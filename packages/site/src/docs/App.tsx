import { Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import DocsBlock from "../components/docs-block";
import IconGithub from "../components/github";
import menuConfig from "./config/site.config";
import classNames from "classnames";

import "./App.less";

const formatKey = (str: string) => {
  return str.replace(/([A-Z])/g, function (match, space, letter) {
    if (letter === 0) {
      return match.toLocaleLowerCase();
    }
    return "-" + match.toLocaleLowerCase();
  });
};

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

function App() {
  const location = useLocation();

  const renderComponentsRoutes = () => {
    const list = docs.map((it, index) => {
      const name = it.key.replace(".md", "");
      const MyComponent = () => {
        return <DocsBlock content={it.component.default} />;
      };
      return (
        <Route
          key={index}
          path={"/components/" + name}
          element={<MyComponent />}
        />
      );
    });
    return list;
  };

  const renderMenus = () => {
    let index = 0;
    let prefix = 'guide'
    if (location.pathname.indexOf('/components') !== -1) {
      index = 1;
      prefix = 'components'
    }

    const renderChild = (menus: any[]) => {
      return menus.map((it, index) => {
        const isActive = location.pathname.includes(`/${it.key}`);
        const cls = classNames("menu-item", {
          "menu-item--active": isActive,
        });
        return (
          <div className={cls} key={index}>
            <Link to={`/${prefix}/` + formatKey(it.key)}>
              <span>{it.title}</span>
            </Link>
          </div>
        );
      });
    };

    if (index === 1) {
      return menuConfig[1].menus.map((g, gIndex) => {
        return (
          <div key={gIndex}>
            <div className="menu-title">{g.title}</div>
            {renderChild(g.menus)}
          </div>
        );
      });
    }

    return renderChild(menuConfig[0].menus)
  };

  const renderGuideRoutes = () => {
    const list = mdList.map((it, index) => {
      const name = it.key.replace(".md", "");
      const MyComponent = () => {
        return <DocsBlock content={it.component.default} />;
      };
      return (
        <Route key={index} path={"/guide/" + name} element={<MyComponent />} />
      );
    });
    return list;
  };

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="item">
          <Link to="/guide/introduce">文档</Link>
        </div>
        <div className="item">
          <Link to="/components/button">组件</Link>
        </div>
        <div className="item">资源</div>
        <a href="https://github.com/Webang/f6" target="_blank">
          <IconGithub />
        </a>
      </header>
      <div className="body">
        <div className="side">{renderMenus()}</div>
        <div className="main">
          <div className="docs">
            <Routes>
              {renderComponentsRoutes()}
              {renderGuideRoutes()}
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
  if (h.pathname.indexOf('/components')  !== 0) {
    return null;
  }

  const pathname = h.pathname.replace('/components', '')
  const url = __webpack_public_path__ + "demo.html" + "#" + pathname;
  return (
    <div className="preview">
      <iframe src={url}></iframe>
    </div>
  );
}

export default App;