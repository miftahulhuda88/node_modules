var _Symbol = require("core-js-pure/features/symbol/index.js");
var _Symbol$asyncIterator = require("core-js-pure/features/symbol/async-iterator.js");
var _Symbol$iterator = require("core-js-pure/features/symbol/iterator.js");
var _Promise = require("core-js-pure/features/promise/index.js");
function _asyncIterator(iterable) {
  var method,
    async,
    sync,
    retry = 2;
  for ("undefined" != typeof _Symbol && (async = _Symbol$asyncIterator, sync = _Symbol$iterator); retry--;) {
    if (async && null != (method = iterable[async])) return method.call(iterable);
    if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
    async = "@@asyncIterator", sync = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return _Promise.reject(new TypeError(r + " is not an object."));
    var done = r.done;
    return _Promise.resolve(r.value).then(function (value) {
      return {
        value: value,
        done: done
      };
    });
  }
  return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) {
    this.s = s, this.n = s.next;
  }, AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next: function next() {
      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
    },
    "return": function _return(value) {
      var ret = this.s["return"];
      return void 0 === ret ? _Promise.resolve({
        value: value,
        done: !0
      }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
    },
    "throw": function _throw(value) {
      var thr = this.s["return"];
      return void 0 === thr ? _Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
    }
  }, new AsyncFromSyncIterator(s);
}
module.exports = _asyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;