import React from "react";

export const supportRef = (c: React.ReactElement) => {
  if ("$$typeof" in c) {
    return (c as any)["$$typeof"] === "Symbol(react.forward_ref)";
  }
  return false;
};
