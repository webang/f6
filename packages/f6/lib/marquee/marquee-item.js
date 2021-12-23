"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var context_1 = require("./context");
var prefix = (0, name_1.defineName)("marquee-item")[0];
var MarqueeItem = function (_a) {
    var children = _a.children;
    var context = (0, react_1.useContext)(context_1.MarqueeContext);
    var height = (context === null || context === void 0 ? void 0 : context.itemHeight) || 0;
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix, style: {
            height: height
        } }, { children: children }), void 0));
};
exports["default"] = MarqueeItem;
//# sourceMappingURL=marquee-item.js.map