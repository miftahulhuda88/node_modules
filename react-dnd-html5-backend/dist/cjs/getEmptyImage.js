"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEmptyImage = getEmptyImage;
let emptyImage;
function getEmptyImage() {
    if (!emptyImage) {
        emptyImage = new Image();
        emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    }
    return emptyImage;
}

//# sourceMappingURL=getEmptyImage.js.map