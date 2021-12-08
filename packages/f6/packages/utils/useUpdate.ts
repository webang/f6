import { useCallback, useState } from "react";

const useUpdate = () => {
  const [, setState] = useState({});

  return () => setState({});
};

export default useUpdate;