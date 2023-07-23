"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useConnectDragSource = useConnectDragSource;
exports.useConnectDragPreview = useConnectDragPreview;
var _react = require("react");
function useConnectDragSource(connector) {
    return (0, _react).useMemo(()=>connector.hooks.dragSource()
    , [
        connector
    ]);
}
function useConnectDragPreview(connector) {
    return (0, _react).useMemo(()=>connector.hooks.dragPreview()
    , [
        connector
    ]);
}

//# sourceMappingURL=connectors.js.map