"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writableDiscardStream = exports.getStreamSize = exports.kbytesToBytes = exports.bytesToKbytes = exports.bytesToHumanReadable = exports.streamToBuffer = void 0;
/**
 * Utils file containing file treatment utils
 */
const node_stream_1 = require("node:stream");
const kbytesToBytes = (kbytes) => kbytes * 1000;
exports.kbytesToBytes = kbytesToBytes;
const bytesToKbytes = (bytes) => Math.round((bytes / 1000) * 100) / 100;
exports.bytesToKbytes = bytesToKbytes;
const bytesToHumanReadable = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    if (bytes === 0)
        return '0 Bytes';
    const i = parseInt(`${Math.floor(Math.log(bytes) / Math.log(1000))}`, 10);
    return `${Math.round(bytes / 1000 ** i)} ${sizes[i]}`;
};
exports.bytesToHumanReadable = bytesToHumanReadable;
const streamToBuffer = (stream) => new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => {
        chunks.push(chunk);
    });
    stream.on('end', () => {
        resolve(Buffer.concat(chunks));
    });
    stream.on('error', reject);
});
exports.streamToBuffer = streamToBuffer;
const getStreamSize = (stream) => new Promise((resolve, reject) => {
    let size = 0;
    stream.on('data', (chunk) => {
        size += Buffer.byteLength(chunk);
    });
    stream.on('close', () => resolve(size));
    stream.on('error', reject);
    stream.resume();
});
exports.getStreamSize = getStreamSize;
/**
 * Create a writeable Node.js stream that discards received data.
 * Useful for testing, draining a stream of data, etc.
 */
function writableDiscardStream(options) {
    return new node_stream_1.Writable({
        ...options,
        write(chunk, encding, callback) {
            setImmediate(callback);
        },
    });
}
exports.writableDiscardStream = writableDiscardStream;
//# sourceMappingURL=file.js.map