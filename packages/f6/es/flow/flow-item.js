import { defineName } from "../utils/name";
import { useContext } from "react";
import { FlowContext } from "./flow-context";
import Icon from "f6-icons";
import classNames from "classnames";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("flow-item"),
    prefix = _defineName[0];

var FlowItem = function FlowItem(_ref) {
  var _classNames;

  var title = _ref.title,
      index = _ref.index,
      description = _ref.description;
  var context = useContext(FlowContext);
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
        return /*#__PURE__*/_jsx(Icon, {
          name: "checkmark-circle"
        });
      }
    } else if (isProcess) {
      if (context.processIcon) {
        return context.processIcon;
      } else {
        return /*#__PURE__*/_jsx(Icon, {
          name: "checkmark-circle"
        });
      }
    } else {
      if (context.waitingIcon) {
        return context.waitingIcon;
      } else {
        return /*#__PURE__*/_jsx(Icon, {
          name: "checkmark-circle"
        });
      }
    }
  }();

  var mCls = classNames((_classNames = {}, _classNames[prefix] = true, _classNames[prefix + "--" + status] = true, _classNames[prefix + "--" + direction] = true, _classNames));
  return /*#__PURE__*/_jsxs("div", {
    className: mCls,
    children: [/*#__PURE__*/_jsxs("div", {
      className: prefix + "__head",
      children: [/*#__PURE__*/_jsx("div", {
        className: prefix + "__icon",
        children: icon
      }), /*#__PURE__*/_jsx("div", {
        className: prefix + "__line"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: prefix + "__main",
      children: [/*#__PURE__*/_jsx("div", {
        className: prefix + "__title",
        children: title
      }), /*#__PURE__*/_jsx("div", {
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


export default FlowItem;