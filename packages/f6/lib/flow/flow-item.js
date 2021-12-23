"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var flow_context_1 = require("./flow-context");
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var prefix = (0, name_1.defineName)("flow-item")[0];
var FlowItem = function (_a) {
    var _b;
    var title = _a.title, index = _a.index, description = _a.description;
    var context = (0, react_1.useContext)(flow_context_1.FlowContext);
    var activeIndex = context.current;
    var direction = context.direction;
    var isFinish = index < activeIndex;
    var isProcess = index === activeIndex;
    var isWaiting = index > activeIndex;
    var status = (function () {
        if (isFinish) {
            return 'finish';
        }
        else if (isProcess) {
            return 'process';
        }
        else {
            return 'waiting';
        }
    })();
    var icon = (function () {
        if (isFinish) {
            if (context.finishIcon) {
                return context.finishIcon;
            }
            else {
                return (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "checkmark-circle" }, void 0);
            }
        }
        else if (isProcess) {
            if (context.processIcon) {
                return context.processIcon;
            }
            else {
                return (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "checkmark-circle" }, void 0);
            }
        }
        else {
            if (context.waitingIcon) {
                return context.waitingIcon;
            }
            else {
                return (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "checkmark-circle" }, void 0);
            }
        }
    })();
    var mCls = (0, classnames_1["default"])((_b = {},
        _b[prefix] = true,
        _b["".concat(prefix, "--").concat(status)] = true,
        _b["".concat(prefix, "--").concat(direction)] = true,
        _b));
    return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: mCls }, { children: [(0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__head") }, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__icon") }, { children: icon }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "".concat(prefix, "__line") }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__main") }, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__title") }, { children: title }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__description") }, { children: description }), void 0)] }), void 0)] }), void 0));
};
// const FlowItem: FC<FlowItemProps> = ({ title, description }) => {
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
exports["default"] = FlowItem;
//# sourceMappingURL=flow-item.js.map