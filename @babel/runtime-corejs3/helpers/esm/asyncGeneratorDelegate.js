import _Promise from "core-js-pure/features/promise/index.js";
import _Symbol from "core-js-pure/features/symbol/index.js";
import _Symbol$iterator from "core-js-pure/features/symbol/iterator.js";
import OverloadYield from "./OverloadYield.js";
export default function _asyncGeneratorDelegate(inner) {
  var iter = {},
    waiting = !1;
  function pump(key, value) {
    return waiting = !0, value = new _Promise(function (resolve) {
      resolve(inner[key](value));
    }), {
      done: !1,
      value: new OverloadYield(value, 1)
    };
  }
  return iter["undefined" != typeof _Symbol && _Symbol$iterator || "@@iterator"] = function () {
    return this;
  }, iter.next = function (value) {
    return waiting ? (waiting = !1, value) : pump("next", value);
  }, "function" == typeof inner["throw"] && (iter["throw"] = function (value) {
    if (waiting) throw waiting = !1, value;
    return pump("throw", value);
  }), "function" == typeof inner["return"] && (iter["return"] = function (value) {
    return waiting ? (waiting = !1, value) : pump("return", value);
  }), iter;
}