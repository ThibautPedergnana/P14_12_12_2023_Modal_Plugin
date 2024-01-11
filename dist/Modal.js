"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _Close = _interopRequireDefault(require("./Close"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    children,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "modal",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal-background",
      onClick: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal-container",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal-wrap",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "close-icon-container",
          onClick: onClose,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Close.default, {
            width: "20px",
            height: "20px"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "modal-content",
          children: children
        })]
      })
    })]
  });
}
var _default = exports.default = Modal;