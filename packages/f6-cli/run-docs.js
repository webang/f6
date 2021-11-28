const fs = require("fs");
const path = require("path");

module.exports = {
  parseDocument
}

/**
 * @desc 解析 demo md
 */
function parseDocument(modulePath, name) {
  const readMeMd = path.resolve(modulePath, 'README.md');
  const demosMd = path.resolve(modulePath, 'demo');
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
      fs.writeFileSync(`${outputPath}/${files[index].replace('md', 'tsx')}`, it.code.replace('f6', 'f6/packages'));
      return `<div class="block-panel"><h3>${it.title}</h3>\n${it.description}\n${code}\n</div>`
    })
    .join('\n\n');

  const codes = files.map((it, index) => {
    const key = it.replace('.md', '')
    return `import App${index} from './${name}/${key}';`;
  }).join('\n')

  const _list = files
    .map((it) => parseDemoDoc(demosMd + '/' + it))
    .sort((a,b) => a.order - b.order)
    .reduce((prev, curr, index) => {
      return prev + `{
        title: '${curr.title}',
        element: App${index}
      },`
    }, '');

  const readMeMap = parseReadMeDoc(readMeMd);

  fs.writeFileSync(
    `../site/src/.build/docs/${name}.md`,
    usageList + '\n' + readMeMap.body
  );

  fs.writeFileSync(
    `../site/src/.build/demo/${name}.tsx`,
    demoTemplate({ deps: codes, title: readMeMap.title, list: `[${_list}]` })
  )
}

function demoTemplate({ deps, title, list }) {
  return `${deps}\nimport Demo from '../../components/demo-block';
export default () => {
  const title = '${title}';
  const list = ${list};
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