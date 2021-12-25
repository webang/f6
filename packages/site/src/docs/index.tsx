import ReactDOM from "react-dom";
import App from "./App";
import "./index.less";
import { HashRouter as Router } from "react-router-dom";
import 'f6/lib/es/style/common.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#app")
);