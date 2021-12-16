import ReactDOM from "react-dom";
import { ReactElement } from "react";

export function mountTo(element: ReactElement, mountNode = document.body) {
  const el = document.createElement("div");
  mountNode.appendChild(el);

  function unmount() {
    const unmounted = ReactDOM.unmountComponentAtNode(el);
    if (unmounted && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  ReactDOM.render(element, el);
  return unmount;
}