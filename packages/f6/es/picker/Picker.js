import { useImperativeHandle, useEffect, useRef, useState, forwardRef } from "react";
import { defineName } from "../utils/name";
import PickerColumn from "./PickerColumn";
import { jsx as _jsx } from "react/jsx-runtime";

var _defineName = defineName('picker'),
    prefix = _defineName[0];

var Picker = function Picker(_ref, ref) {
  var _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      _ref$cascade = _ref.cascade,
      cascade = _ref$cascade === void 0 ? false : _ref$cascade,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? 3 : _ref$maxLength,
      optionRender = _ref.optionRender,
      defaultIndex = _ref.defaultIndex,
      onChange = _ref.onChange;

  var _useState = useState([]),
      mColumns = _useState[0],
      setMColumns = _useState[1];

  var childrenRef = useRef([]);
  useEffect(function () {
    setMColumns(columns);
  }, []);

  var slideTo = function slideTo(columnIndex, columnValue, animation) {
    if (animation === void 0) {
      animation = true;
    }

    var children = childrenRef.current;
    var child = children[columnIndex];
    child.slideTo(columnValue, animation);
  }; // 设置所有选项


  var setOptions = function setOptions(columns) {
    var children = childrenRef.current;
    setMColumns(columns);
    columns.forEach(function (it, index) {
      children[index].setOptions(it);
    });
  }; // 获取所有选项


  var getOptions = function getOptions() {
    var children = childrenRef.current;
    return children.map(function (it) {
      return it.getOptions();
    });
  }; // 设置某列的选项


  var setColumnOptions = function setColumnOptions(index, options) {
    var children = childrenRef.current;
    children[index].setOptions(options);
  }; // 获取某列的选项


  var getColumnOptions = function getColumnOptions(columnIndex) {
    var children = childrenRef.current;
    return children[columnIndex].getOptions();
  }; // 设置每一列选中项索引


  var setIndex = function setIndex(list) {
    var children = childrenRef.current;
    children.forEach(function (it, index) {
      it.slideTo(list[index], false);
    });
  }; // 获取每一列选中项索引


  var getIndex = function getIndex() {
    var children = childrenRef.current;
    return children.map(function (it) {
      return it.getIndex();
    });
  }; // 设置指定列的选中项索引


  var setColumnIndex = function setColumnIndex(index, value) {
    var children = childrenRef.current;
    children[index].slideTo(value, false);
  }; // 获取指定列的选中项索引


  var getColumnIndex = function getColumnIndex(index) {
    var children = childrenRef.current;
    return children[index].getIndex();
  }; // 获取选中的值


  var getValues = function getValues() {
    var children = childrenRef.current;
    return children.map(function (it) {
      return it.getValue();
    });
  };

  var context = {
    slideTo: slideTo,
    setOptions: setOptions,
    getOptions: getOptions,
    setColumnOptions: setColumnOptions,
    getColumnOptions: getColumnOptions,
    setIndex: setIndex,
    getIndex: getIndex,
    setColumnIndex: setColumnIndex,
    getColumnIndex: getColumnIndex,
    getValues: getValues
  };
  useImperativeHandle(ref, function () {
    return context;
  });

  var mOnChange = function mOnChange(index, value, columns, pickerColumn) {
    var _columns$value;

    var list = ((_columns$value = columns[value]) == null ? void 0 : _columns$value.children) || [];

    if (cascade) {
      for (var i = index + 1; i < maxLength; i++) {
        var _list$;

        childrenRef.current[i].setOptions(list);
        childrenRef.current[i].slideTo(0, false);
        list = ((_list$ = list[0]) == null ? void 0 : _list$.children) || [];
      }
    }

    onChange && onChange(index, value, columns, context);
  };

  var renderColumns = function renderColumns() {
    return mColumns.map(function (it, index) {
      return /*#__PURE__*/_jsx(PickerColumn, {
        onMounted: function onMounted(child, index) {
          var children = childrenRef.current;
          children[index] = child;
        },
        onDestroyed: function onDestroyed(_, index) {
          var children = childrenRef.current;
          children.splice(index, 1);
        },
        optionRender: optionRender,
        onChange: mOnChange,
        index: index,
        columns: it,
        defaultIndex: defaultIndex ? defaultIndex[index] : 0
      }, index);
    });
  };

  return /*#__PURE__*/_jsx("div", {
    className: prefix + "-columns",
    children: renderColumns()
  });
};

export default /*#__PURE__*/forwardRef(Picker);