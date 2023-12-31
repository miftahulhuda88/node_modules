"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _exportNames = {
    createDragDropActions: true,
    manager: true
};
exports.createDragDropActions = createDragDropActions;
var _beginDragJs = require("./beginDrag.js");
var _publishDragSourceJs = require("./publishDragSource.js");
var _hoverJs = require("./hover.js");
var _dropJs = require("./drop.js");
var _endDragJs = require("./endDrag.js");
var _typesJs = _interopRequireWildcard(require("./types.js"));
Object.keys(_typesJs).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _typesJs[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _typesJs[key];
        }
    });
});
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
function createDragDropActions(manager) {
    return {
        beginDrag: (0, _beginDragJs).createBeginDrag(manager),
        publishDragSource: (0, _publishDragSourceJs).createPublishDragSource(manager),
        hover: (0, _hoverJs).createHover(manager),
        drop: (0, _dropJs).createDrop(manager),
        endDrag: (0, _endDragJs).createEndDrag(manager)
    };
}

//# sourceMappingURL=index.js.map