import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import "./index.less";
import { NumberKeyboard } from 'f6/packages'

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().map((key: string) => {
    return {
      key: key.replace("./", "").replace(".tsx", ""),
      component: requireContext(key),
    };
  });
};

const demos = importAll(require.context("../.build/demo", false, /\.tsx$/));

export function App() {
  return (
    <Router>
      <Routes>
        {demos.map((it) => {
          const MyComponent = it.component.default;
          return <Route key={it.key} path={"/" + it.key} element={<MyComponent />} />;
        })}
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));