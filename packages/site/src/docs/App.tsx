import { useState, useEffect } from "react";
import "./App.less";
import { Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import DocsBlock from "../components/docs-block";
import IconGithub from "../components/github";
import menuConfig from "./menu.config";
import classNames from "classnames";
import Test from './pages/test';

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().map((key: string) => {
    return {
      key: key.replace("./", "").replace(".tsx", ""),
      component: requireContext(key),
    };
  });
};

const docs = importAll(require.context("../.build/docs", false, /\.md$/));
const mdList = importAll(require.context("../markdown", false, /\.md$/));

console.log(docs)

function App() {
  const location = useLocation();

  const renderComponentsRoutes = () => {
    const list = docs.map((it, index) => {
      const name = it.key.replace(".md", "");
      const MyComponent = () => {
        return <DocsBlock content={it.component.default} />;
      };
      return <Route key={index} path={"/" + name} element={<MyComponent />} />;
    });
    return list;
  };

  // 驼峰转 中划线
  const formatKey = (str: string) => {
    return str.replace(/([A-Z])/g, function (match, space, letter) {
      if (letter === 0) {
        return match.toLocaleLowerCase()
      }
      return '-' + match.toLocaleLowerCase()
    })
  }

  const renderMenus = () => {
    const renderChild = (menus: any[]) => {
      return menus.map((it, index) => {
        const isActive = location.pathname.includes(`/${it.key}`);
        const cls = classNames("menu-item", {
          "menu-item--active": isActive,
        });
        return (
          <div className={cls} key={index}>
            <Link to={formatKey(it.key)}>
              <span>{it.title}</span>
            </Link>
          </div>
        );
      });
    }
    return menuConfig.map((g, gIndex) => {
      return (
        <div key={gIndex}>
          <div className="menu-title">{g.title}</div>
          {renderChild(g.menus)}
        </div>
      )
    })
  };

  const renderMarkdownRoutes = () => {
    const list = mdList.map((it, index) => {
      const name = it.key.replace(".md", "");
      const MyComponent = () => {
        return <DocsBlock content={it.component.default} />;
      };
      return <Route key={index} path={"/" + name} element={<MyComponent />} />;
    });
    return list;
  };

  // return <Test />

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="item">文档</div>
        <div className="item">组件</div>
        <div className="item">资源</div>
        <a href="https://github.com/Webang/f6" target="_blank">
          <IconGithub />
        </a>
      </header>
      <div className="body">
        <div className="side">
          {renderMenus()}
        </div>
        <div className="main">
          <div className="docs">
            {/* <Test /> */}
            <Routes>
              {renderComponentsRoutes()}
              {renderMarkdownRoutes()}
            </Routes>
          </div>
        </div>
        <Preview />
      </div>
    </div>
  );
}

function Preview() {
  const h = useLocation();
  const url = __webpack_public_path__ + 'demo.html' + "#" + h.pathname;
  if (h.pathname === "/") return null;
  return (
    <div className="preview">
      <iframe src={url}></iframe>
    </div>
  );
}

export default App;
