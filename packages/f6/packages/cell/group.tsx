import React from "react";
import { defineName } from "../utils/name";

export const CellGroup: React.FC = ({ children }) => {
  const [prefix] = defineName("cell-group");
  return <div className={prefix}>{children}</div>;
};

export default CellGroup;