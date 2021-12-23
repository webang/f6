import ReactDOM from "react-dom";
import App from "./App";
import "./index.less";
import { HashRouter as Router } from "react-router-dom";
import 'f6/lib/style/common.less';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#app")
);