import { defineName } from "../utils/name";
import { useEffect, useState } from "react";
import Popup from "../popup";
import CascaderView from "./cascader-view";
import "./index.css";
import Button from "../button";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

var _defineName = defineName("cascader"),
    prefix = _defineName[0];

var getInitData = function getInitData(options, value) {
  if (value === void 0) {
    value = [];
  }

  var rValue = [];
  var columns = [options];

  var _loop = function _loop(i) {
    var val = value[i];
    var item = columns[i].find(function (it) {
      return it.value === val;
    });

    if (item) {
      rValue.push(item);

      if (i < value.length - 1) {
        columns.push(item.children || []);
      }
    } else {
      return {
        v: {
          columns: [options],
          value: []
        }
      };
    }
  };

  for (var i = 0; i < value.length; i++) {
    var _ret = _loop(i);

    if (typeof _ret === "object") return _ret.v;
  }

  return {
    columns: columns,
    value: rValue
  };
};

var Cascader = function Cascader(props) {
  var visible = props.visible,
      options = props.options,
      onClose = props.onClose,
      onConfirm = props.onConfirm;

  var _useState = useState(0),
      current = _useState[0],
      setCurrent = _useState[1];

  var _useState2 = useState([]),
      columns = _useState2[0],
      setColumns = _useState2[1];

  var _useState3 = useState([]),
      selected = _useState3[0],
      setSelected = _useState3[1];

  useEffect(function () {
    var _getInitData = getInitData(options, props.defaultValue),
        columns = _getInitData.columns,
        value = _getInitData.value;

    setColumns(columns);
    setSelected(value);
    setCurrent(columns.length - 1);
  }, []);

  var _onClick = function onClick(option, index) {
    var hasChild = option.children && option.children.length;

    if (!selected[index]) {
      setSelected(function (prev) {
        return [].concat(prev, [option]);
      });

      if (hasChild) {
        setColumns(function (prev) {
          return [].concat(prev, [option.children]);
        });
        setCurrent(index + 1);
      }
    } else {
      var mSelected = selected.map(function (it, i) {
        return i === index ? option : it;
      }).filter(function (_, i) {
        return i <= index;
      });
      var mColumns = columns.filter(function (_, i) {
        return i <= index;
      });
      setSelected(mSelected);
      setCurrent(hasChild ? index + 1 : index);
      setColumns(hasChild ? [].concat(mColumns, [option.children]) : mColumns);
    }
  };

  var renderChoose = function renderChoose() {
    var choose = /*#__PURE__*/_jsx("span", {
      onClick: function onClick() {
        return setCurrent(columns.length - 1);
      },
      className: prefix + "__tab-item",
      children: "\u8BF7\u9009\u62E9"
    });

    return selected.length < columns.length ? choose : null;
  };

  var renderTabs = function renderTabs() {
    var list = selected.map(function (it, index) {
      return /*#__PURE__*/_jsx("span", {
        onClick: function onClick() {
          return setCurrent(index);
        },
        className: prefix + "__tab-item",
        children: it.label
      }, index);
    });
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs("div", {
        className: prefix + "-header",
        children: [/*#__PURE__*/_jsx(Button, {
          fill: "none",
          onClick: function onClick() {
            return onClose == null ? void 0 : onClose();
          },
          children: "\u53D6\u6D88"
        }), /*#__PURE__*/_jsx(Button, {
          fill: "none",
          onClick: function onClick() {
            return onConfirm == null ? void 0 : onConfirm(selected);
          },
          children: "\u786E\u8BA4"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: prefix + "__tab",
        children: [list, renderChoose()]
      })]
    });
  };

  var views = columns.map(function (it, index) {
    return /*#__PURE__*/_jsx(CascaderView, {
      style: {
        display: index === current ? "block" : "none"
      },
      options: it,
      onClick: function onClick(it) {
        return _onClick(it, index);
      },
      value: selected[index]
    }, index);
  });
  return /*#__PURE__*/_jsxs(Popup, {
    position: "bottom",
    visible: visible,
    children: [renderTabs(), views]
  });
};

export default Cascader;