import { useState } from "react";

var useUpdate = function useUpdate() {
  var _useState = useState({}),
      setState = _useState[1];

  return function () {
    return setState({});
  };
};

export default useUpdate;