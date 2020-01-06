import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import './main.less';

var Test =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Test, _React$Component);

  function Test(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = Test.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      className: "sty"
    }, "\u8FD9\u4E2A\u662F" + (this.props.name || '我') + "\u7684\u79C1\u6709\u7EC4\u4EF6\u5E93");
  };

  return Test;
}(React.Component);

export default Test;
//# sourceMappingURL=index.js.map