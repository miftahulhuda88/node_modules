"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOption = void 0;
var _262_1 = require("./262");
/**
 * https://tc39.es/ecma402/#sec-getoption
 * @param opts
 * @param prop
 * @param type
 * @param values
 * @param fallback
 */
function GetOption(opts, prop, type, values, fallback) {
    if (typeof opts !== 'object') {
        throw new TypeError('Options must be an object');
    }
    var value = opts[prop];
    if (value !== undefined) {
        if (type !== 'boolean' && type !== 'string') {
            throw new TypeError('invalid type');
        }
        if (type === 'boolean') {
            value = Boolean(value);
        }
        if (type === 'string') {
            value = (0, _262_1.ToString)(value);
        }
        if (values !== undefined && !values.filter(function (val) { return val == value; }).length) {
            throw new RangeError("".concat(value, " is not within ").concat(values.join(', ')));
        }
        return value;
    }
    return fallback;
}
exports.GetOption = GetOption;
