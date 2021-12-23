import ReactDOM from "react-dom";
export function mountTo(element, mountNode) {
  if (mountNode === void 0) {
    mountNode = document.body;
  }

  var el = document.createElement("div");
  mountNode.appendChild(el);

  function unmount() {
    var unmounted = ReactDOM.unmountComponentAtNode(el);

    if (unmounted && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  ReactDOM.render(element, el);
  return unmount;
}