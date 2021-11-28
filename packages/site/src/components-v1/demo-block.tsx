import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import * as Babel from "@babel/standalone";
import "./demo-block.less";
import wax from 'f6';
import classNames from "classnames";

interface IDemoItem {
  order: string;
  title: string;
  code: string;
}

interface IDemo {
  title: string;
  list: IDemoItem[];
}

/**
 * @desc 替换 import 语句
 * @param s string
 * @returns string
 */
function replaceImport(s: string) {
  let res
  while (res = /(import\s)(.*)(\sfrom\s)(.*)/.exec(s)) {
    const code = `const ${res[2]} = ${res[4].replace(/(\'|\")/g, "")}`;
    s = s.substr(0, res.index) + code + s.substr(res.index + res[0].length, s.length);
  }
  return s;
}

function run(code: string, mountNode: HTMLElement) {
  const res = Babel.transform(code, {
    presets: [
      Babel.availablePresets["es2015"],
      Babel.availablePresets["react"],
      [
        Babel.availablePresets["typescript"],
        {
          allExtensions: true,
          isTSX: true
        }
      ]
    ],
    plugins: ["proposal-class-properties"],
  });
  const args = ["react", "React", "ReactDOM", "wax", "mountNode"];
  const argv = [React, React, ReactDOM, wax, mountNode];
  args.push(res.code as string);

  try {
    new Function(...args)(...argv);
  } catch (e) {
    console.log('render error', e);
  }
}

const Demo: React.FC<IDemo> = ({ title, list }) => {
  const renderItem: React.FC<IDemoItem> = (item) => {
    return (
      <div key={item.title}>
        <h3 className="demo-block-title">{item.title}</h3>
        <div className="demo-block-body" id={`demo-${title}-${item.title}`}></div>
      </div>
    );
  };

  useEffect(() => {
    list.forEach((it) => {
      const id = `demo-${title}-${it.title}`;
      const code = replaceImport(it.code);
      run(code, document.getElementById(id) as HTMLElement);
    });
  }, [list]);

  return (
    <div className={classNames("demo-page", `demo-page-${title}`)}>
      <h2 className="page-title">{title}</h2>
      {list.map((it) => renderItem(it))}
    </div>
  );
};

export default Demo;