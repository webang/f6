const fs = require("fs");
const path = require("path");

module.exports = {
  parseDocument
}

/**
 * @desc 解析 demo md
 */
function parseDocument(modlePath, name) {
  const readMeMd = path.resolve(modlePath, 'README.md');
  const demosMd = path.resolve(modlePath, 'demo');
  let files = fs.readdirSync(demosMd);

  const outputPath = `../site/src/.build/demo/${name}`;

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath)
  }

  files = files.filter(it => it)

  const usageList = files
    .map((it) => parseDemoDoc(demosMd + '/' + it))
    .sort((a,b) => a.order - b.order)
    .map((it, index) => {
      const code = `\`\`\`jsx\n${it.code}\`\`\``;
      fs.writeFileSync(`${outputPath}/${files[index].replace('md', 'tsx')}`, it.code);
      return `<div class="block-panel"><h3>${it.title}</h3>\n${it.description}\n${code}\n</div>`
    })
    .join('\n\n');

  const codes = files.map((it, index) => {
    const key = it.replace('md', 'tsx')
    return `import App${index} from './${key}';`;
  });

  console.log(codes)

  const demoList = files
    .map((it) => parseDemoDoc(demosMd + '/' + it))
    .filter(it => it)
    .sort((a,b) => a.order - b.order)

  const readMeMap = parseReadMeDoc(readMeMd);

  fs.writeFileSync(
    `../site/src/.build/docs/${name}.md`,
    usageList + '\n' + readMeMap.body
  );

  fs.writeFileSync(
    `../site/src/.build/demo/${name}.tsx`,
    demoTemplate({ title: readMeMap.title, list: demoList })
  )
}

function demoTemplate({ title, list }) {
  return `import Demo from '../../components/demo-block';
export default () => {
  const title = '${title}';
  const list = ${JSON.stringify(list, null, 2)};
  return <Demo list={list} title={title}/>;
}
`
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
    const metaReg = /(---\n)([\s\S]*)(---)/;
    const metaRes = metaReg.exec(s);
    const list = metaRes[2].split('\n').filter(it => it.includes(":"));
    list.forEach((it) => {
      const [key, value] = it.split(':');
      map[key.trim()] = value.trim()
    })

    // code
    var codeReg = /(```jsx\n)([\s\S]*)(```)/
    var codeRes = codeReg.exec(s);
    map.code = codeRes[2];

    // description
    let start = metaRes.index + metaRes[0].length;
    let end = codeRes.index - 1;
    map.description = s.substr(start + 1, end - start - 1);

    return map;
  } catch (e) {

  }
}

function parseReadMeDoc(filePath) {
  const s = fs.readFileSync(filePath, "utf8");
  const map = {};

  // metaData
  const metaReg = /(---\n)([\s\S]*)(---)/;
  const metaRes = metaReg.exec(s);
  const list = metaRes[2].split('\n').filter(it => it.includes(":"));
  list.forEach((it) => {
    const [key, value] = it.split(':');
    map[key.trim()] = value.trim()
  })

  // description
  let start = metaRes.index + metaRes[0].length;
  map.body = s.substr(start + 1, s.length);

  return map;
}