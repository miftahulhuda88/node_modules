var _Object$defineProperty = require("core-js-pure/features/object/define-property.js");
function _defineAccessor(type, obj, key, fn) {
  var desc = {
    configurable: !0,
    enumerable: !0
  };
  return desc[type] = fn, _Object$defineProperty(obj, key, desc);
}
module.exports = _defineAccessor, module.exports.__esModule = true, module.exports["default"] = module.exports;