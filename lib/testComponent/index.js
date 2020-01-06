"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

require("./main.less");

var Test =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2["default"])(Test, _React$Component);

  function Test(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = Test.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "sty"
    }, "\u8FD9\u4E2A\u662F" + (this.props.name || '我') + "\u7684\u79C1\u6709\u7EC4\u4EF6\u5E93");
  };

  return Test;
}(_react["default"].Component);

var _default = Test;
exports["default"] = _default;
//# sourceMappingURL=index.js.map