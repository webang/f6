export var supportRef = function supportRef(c) {
  if ("$$typeof" in c) {
    return c["$$typeof"] === "Symbol(react.forward_ref)";
  }

  return false;
};