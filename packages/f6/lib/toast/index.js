"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var react_1 = (0, tslib_1.__importStar)(require("react"));
var react_dom_1 = (0, tslib_1.__importDefault)(require("react-dom"));
var name_1 = require("../utils/name");
var react_transition_group_1 = require("react-transition-group");
require("./index.less");
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var spinner_1 = (0, tslib_1.__importDefault)(require("../spinner"));
var prefix = (0, name_1.defineName)("toast")[0];
var instances = [];
var defaultAnimationTime = 300;
var single = true;
/**
 * @description
 */
var AnimateWrapper = function (_a, ref) {
    var position = _a.position, _b = _a.message, message = _b === void 0 ? '' : _b, restProps = (0, tslib_1.__rest)(_a, ["position", "message"]);
    var _c = (0, react_1.useState)(false), visible = _c[0], setVisible = _c[1];
    var _d = (0, react_1.useState)(message), content = _d[0], setContent = _d[1];
    (0, react_1.useEffect)(function () {
        setVisible(true);
    }, []);
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        close: function () {
            setVisible(false);
        },
        setContent: function (message) {
            setContent(message);
        }
    }); }, []);
    return ((0, jsx_runtime_1.jsx)(react_transition_group_1.CSSTransition, (0, tslib_1.__assign)({ "in": visible, timeout: defaultAnimationTime, classNames: "slide-".concat(position), unmountOnExit: true }, { children: (0, jsx_runtime_1.jsx)(Toast, (0, tslib_1.__assign)({ position: position, message: content }, restProps), void 0) }), void 0));
};
var AnimateWrapperRefed = react_1["default"].forwardRef(AnimateWrapper);
var Toast = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.formatParams = function (params) {
        var getField = function (params, key, _default) {
            if (typeof params === 'string')
                return _default;
            return typeof params[key] !== "undefined" ? params[key] : _default;
        };
        var type = getField(params, 'type', 'text');
        var message = getField(params, 'message', '');
        var duration = getField(params, 'duration', 1000);
        var position = getField(params, 'position', 'middle');
        var spinner = getField(params, 'spinner', undefined);
        return { duration: duration, position: position, message: message, type: type, spinner: spinner };
    };
    /**
     * @description 创建 toast
     */
    Toast.show = function (params) {
        var _a = Toast.formatParams(params), type = _a.type, duration = _a.duration, position = _a.position, message = _a.message, spinner = _a.spinner;
        var ref = react_1["default"].createRef();
        var result = {
            mountNode: Toast.createSlot(),
            close: function (force) {
                var _a;
                if (force) {
                    if (result.mountNode) {
                        document.body.removeChild(result.mountNode);
                    }
                    result.mountNode = null;
                }
                else {
                    (_a = ref.current) === null || _a === void 0 ? void 0 : _a.close();
                    setTimeout(function () {
                        if (result.mountNode) {
                            document.body.removeChild(result.mountNode);
                        }
                        result.mountNode = null;
                    }, defaultAnimationTime);
                }
            },
            setContent: function (content) {
                var _a;
                (_a = ref.current) === null || _a === void 0 ? void 0 : _a.setContent(content);
            }
        };
        if (single) {
            Toast.forceClear();
        }
        instances.push(result);
        react_dom_1["default"].render((0, jsx_runtime_1.jsx)(AnimateWrapperRefed, { spinner: spinner, type: type, position: position, duration: duration, message: message, ref: ref }, void 0), result.mountNode);
        if (duration) {
            setTimeout(result.close, duration);
        }
        return result;
    };
    Toast.forceClear = function () {
        while (instances.length) {
            var it = instances.pop();
            it === null || it === void 0 ? void 0 : it.close(true);
        }
    };
    Toast.clear = function () {
        while (instances.length) {
            var it = instances.pop();
            it === null || it === void 0 ? void 0 : it.close();
        }
    };
    Toast.hide = function () {
        Toast.clear();
    };
    Toast.createSlot = function () {
        var mountNode = document.createElement("div");
        mountNode.setAttribute("class", "".concat(prefix, "-wrapper"));
        document.body.appendChild(mountNode);
        return mountNode;
    };
    Toast.prototype.renderIcon = function () {
        if (this.props.type === 'success') {
            return (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { className: "".concat(prefix, "__icon"), name: "success3" }, void 0);
        }
        if (this.props.type === 'fail') {
            return (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { className: "".concat(prefix, "__icon"), name: "close-circle-o" }, void 0);
        }
        if (this.props.type === 'warning') {
            return (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { className: "".concat(prefix, "__icon"), name: "warn" }, void 0);
        }
        if (this.props.type === 'loading') {
            return (0, jsx_runtime_1.jsx)(spinner_1["default"], { type: this.props.spinner || "oval" }, void 0);
        }
    };
    Toast.prototype.render = function () {
        var _a = this.props, position = _a.position, type = _a.type;
        return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ style: { transitionDuration: "".concat(defaultAnimationTime, "ms") }, className: (0, classnames_1["default"])([
                prefix,
                "".concat(prefix, "--").concat(type),
                "".concat(prefix, "--").concat(position)
            ]) }, { children: [this.renderIcon(), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__content") }, { children: this.props.message }), void 0)] }), void 0));
    };
    return Toast;
}(react_1["default"].Component));
exports["default"] = Toast;
//# sourceMappingURL=index.js.map