"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reduce = reduce;
var _indexJs = require("../actions/dragDrop/index.js");
var _equalityJs = require("../utils/equality.js");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
const initialState = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};
function reduce(state = initialState, action) {
    const { payload  } = action;
    switch(action.type){
        case _indexJs.INIT_COORDS:
        case _indexJs.BEGIN_DRAG:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset
            };
        case _indexJs.HOVER:
            if ((0, _equalityJs).areCoordsEqual(state.clientOffset, payload.clientOffset)) {
                return state;
            }
            return _objectSpread({}, state, {
                clientOffset: payload.clientOffset
            });
        case _indexJs.END_DRAG:
        case _indexJs.DROP:
            return initialState;
        default:
            return state;
    }
}

//# sourceMappingURL=dragOffset.js.map