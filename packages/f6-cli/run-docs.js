const fs = require("fs");
const path = require("path");
const os = require("os");

module.exports = {
  parseDocument,
};

if (!fs.existsSync(`../site/src/.build`)) {
  fs.mkdirSync(`../site/src/.build`);
}

if (!fs.existsSync(`../site/src/.build/demo`)) {
  fs.mkdirSync(`../site/src/.build/demo`);
}

if (!fs.existsSync(`../site/src/.build/docs`)) {
  fs.mkdirSync(`../site/src/.build/docs`);
}

/**
 * modulePath = "../f6/packages/button", name = "button"
 */
function parseDocument(modulePath, name) {
  const demoPath = path.resolve(modulePath, "demo");
  const pagePath = path.resolve(modulePath, "page");
  const outputPath = `../site/src/.build/demo/${name}`;

  // 如果已经存在 page/index.tsx
  if (fs.existsSync(`${pagePath}/index.tsx`)) {
    // 生成 渲染模板
    fs.writeFileSync(
      `../site/src/.build/demo/${name}.tsx`,
      fs.readFileSync(`${pagePath}/index.tsx`)
    );
    generateMarkdown(modulePath, name);
    return;
  }

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  // 获取 demo 下的 markdown 文件
  let demos = fs.readdirSync(demoPath).filter((it) => it);

  // 将这些 demo markdown 中的代码复制到目标目录
  demos
    .map((it) => parseDemoDoc(demoPath + "/" + it))
    .sort((a, b) => a.order - b.order)
    .map((it, index) => {
      fs.writeFileSync(
        `${outputPath}/${demos[index].replace("md", "tsx")}`,
        it.code
      );
    });

  // 依赖列表
  const deps = demos
    .map((it, index) => {
      const key = it.replace(".md", "");
      return `import App${index} from './${name}/${key}';`;
    })
    .join("\n");

  // 渲染列表
  const _list = demos
    .map((it) => parseDemoDoc(demoPath + "/" + it))
    .sort((a, b) => a.order - b.order)
    .reduce((prev, curr, index) => {
      return (
        prev +
        `{
        title: '${curr.title}',
        element: App${index}
      },`
      );
    }, "");

  fs.writeFileSync(
    `../site/src/.build/demo/${name}.tsx`,
    demoTemplate({
      deps,
      title: name,
      list: `[${_list}]`,
    })
  );

  generateMarkdown(modulePath, name);
}

/**
 * modulePath = "../f6/packages/button", name = "button"
 */
function generateMarkdown(modulePath, name) {
  const readMeMd = path.resolve(modulePath, "README.md");
  const demoPath = path.resolve(modulePath, "demo");
  const pagePath = path.resolve(modulePath, "page");
  const readMeMap = parseReadMeDoc(readMeMd);

  let usageList = "";

  if (fs.existsSync(`${pagePath}/index.tsx`)) {
    const content = fs.readFileSync(`${pagePath}/index.tsx`, "utf-8");
    const code = `\`\`\`jsx\n${content}\`\`\``;
    usageList = `<div class="block-panel"><h3>Demos</h3>\n\n${code}\n</div>`;
  } else {
    usageList = fs
      .readdirSync(demoPath)
      .filter((it) => it)
      .map((it) => parseDemoDoc(demoPath + "/" + it))
      .sort((a, b) => a.order - b.order)
      .map((it) => {
        const code = `\`\`\`jsx\n${it.code}\`\`\``;
        return `<div class="block-panel"><h3>${it.title}</h3>\n${it.description}\n${code}\n</div>`;
      })
      .join("\n\n");
  }

  fs.writeFileSync(
    `../site/src/.build/docs/${name}.md`,
    usageList + "\n" + readMeMap.body
  );
}

function demoTemplate({ deps, title, list }) {
  return `${deps}\nimport Demo from '../../components/demo-block';
export default () => {
  const title = '${title}';
  const list = ${list};
  return <Demo list={list} title={title}/>;
}
`;
}

/**
 * @desc 将某个 usage-md 文件解析为 usage-map
 * @param {*} filePath
 * @returns
 */
function parseDemoDoc(filePath) {
  try {
    const s = fs.readFileSync(filePath, "utf8");
    const map = {};

    // metaData
    const metaReg = new RegExp(`---${os.EOL}([\\s\\S]*?)---`);
    const metaRes = metaReg.exec(s);
    const list = metaRes[1].split(os.EOL).filter((it) => it.includes(":"));
    list.forEach((it) => {
      const [key, value] = it.split(":");
      map[key.trim()] = value.trim();
    });

    // code
    const codeReg = new RegExp(`\`\`\`jsx${os.EOL}([\\s\\S]*?)\`\`\``);
    const codeRes = codeReg.exec(s);
    map.code = codeRes[1];

    // description
    let start = metaRes.index + metaRes[0].length;
    let end = codeRes.index - 1;
    map.description = s.substr(start + 1, end - start - 1);

    return map;
  } catch (e) {}
}

function parseReadMeDoc(filePath) {
  const s = fs.readFileSync(filePath, "utf8");
  const map = {};

  // metaData
  const metaReg = new RegExp(`---${os.EOL}([\\s\\S]*?)---`);
  const metaRes = metaReg.exec(s);
  const list = metaRes[1].split(os.EOL).filter((it) => it.includes(":"));
  list.forEach((it) => {
    const [key, value] = it.split(":");
    map[key.trim()] = value.trim();
  });

  // description
  let start = metaRes.index + metaRes[0].length;
  map.body = s.substr(start + 1, s.length);

  var mList = [];
  var reg = /###(.*?)(\r|\n)/g;
  var res = null;
  while ((res = reg.exec(map.body))) {
    mList.push(res);
  }

  if (mList.length) {
    let prefix = map.body.substring(0, mList[0].index);
    let m = mList
      .map((cur, index) => {
        let next = mList[index + 1];
        return (
          `<h3>${cur[1]}</h3>\n` +
          map.body.substring(
            cur.index + cur[0].length,
            index === mList.length - 1 ? map.body.length : next.index
          )
        );
      })
      .map((it) => `<div class="block-panel">\n${it}\n</div>`)
      .join("\n");
    map.body = prefix + m;
  }

  return map;
}
