"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = require("react");

var _flowContext = require("./flow-context");

var _f6Icons = _interopRequireDefault(require("f6-icons"));

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)("flow-item"),
    prefix = _defineName[0];

var FlowItem = function FlowItem(_ref) {
  var _classNames;

  var title = _ref.title,
      index = _ref.index,
      description = _ref.description;
  var context = (0, _react.useContext)(_flowContext.FlowContext);
  var activeIndex = context.current;
  var direction = context.direction;
  var isFinish = index < activeIndex;
  var isProcess = index === activeIndex;
  var isWaiting = index > activeIndex;

  var status = function () {
    if (isFinish) {
      return 'finish';
    } else if (isProcess) {
      return 'process';
    } else {
      return 'waiting';
    }
  }();

  var icon = function () {
    if (isFinish) {
      if (context.finishIcon) {
        return context.finishIcon;
      } else {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
          name: "checkmark-circle"
        });
      }
    } else if (isProcess) {
      if (context.processIcon) {
        return context.processIcon;
      } else {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
          name: "checkmark-circle"
        });
      }
    } else {
      if (context.waitingIcon) {
        return context.waitingIcon;
      } else {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
          name: "checkmark-circle"
        });
      }
    }
  }();

  var mCls = (0, _classnames["default"])((_classNames = {}, _classNames[prefix] = true, _classNames[prefix + "--" + status] = true, _classNames[prefix + "--" + direction] = true, _classNames));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: mCls,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: prefix + "__head",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__icon",
        children: icon
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__line"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: prefix + "__main",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__title",
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__description",
        children: description
      })]
    })]
  });
}; // const FlowItem: FC<FlowItemProps> = ({ title, description }) => {
//   return (
//     <div className={prefix}>
//       <div className={`${prefix}__indicator`}>
//         <div className={`${prefix}__icon`}>
//         </div>
//         <div className={`${prefix}__line`}>
//         </div>
//       </div>
//       <div className={`${prefix}__content`}>
//         <div className={`${prefix}__title`}>{title}</div>
//         <div className={`${prefix}__description`}>{description}</div>
//       </div>
//     </div>
//   );
// };


var _default = FlowItem;
exports["default"] = _default;