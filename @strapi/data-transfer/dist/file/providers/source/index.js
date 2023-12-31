"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _LocalFileSourceProvider_instances, _LocalFileSourceProvider_metadata, _LocalFileSourceProvider_loadMetadata, _LocalFileSourceProvider_getBackupStream, _LocalFileSourceProvider_streamJsonlDirectory, _LocalFileSourceProvider_parseJSONFile;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocalFileSourceProvider = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const zlib_1 = __importDefault(require("zlib"));
const tar_1 = __importDefault(require("tar"));
const path_1 = __importDefault(require("path"));
const fp_1 = require("lodash/fp");
const stream_chain_1 = require("stream-chain");
const stream_1 = require("stream");
const Parser_1 = require("stream-json/jsonl/Parser");
const encryption_1 = require("../../../utils/encryption");
const stream_2 = require("../../../utils/stream");
const providers_1 = require("../../../errors/providers");
const utils_1 = require("./utils");
/**
 * Constant for the metadata file path
 */
const METADATA_FILE_PATH = 'metadata.json';
const createLocalFileSourceProvider = (options) => {
    return new LocalFileSourceProvider(options);
};
exports.createLocalFileSourceProvider = createLocalFileSourceProvider;
class LocalFileSourceProvider {
    constructor(options) {
        _LocalFileSourceProvider_instances.add(this);
        this.type = 'source';
        this.name = 'source::local-file';
        _LocalFileSourceProvider_metadata.set(this, void 0);
        this.options = options;
        const { encryption } = this.options;
        if (encryption.enabled && encryption.key === undefined) {
            throw new Error('Missing encryption key');
        }
    }
    /**
     * Pre flight checks regarding the provided options, making sure that the file can be opened (decrypted, decompressed), etc.
     */
    async bootstrap() {
        const { path: filePath } = this.options.file;
        try {
            // Read the metadata to ensure the file can be parsed
            await __classPrivateFieldGet(this, _LocalFileSourceProvider_instances, "m", _LocalFileSourceProvider_loadMetadata).call(this);
            // TODO: we might also need to read the schema.jsonl files & implements a custom stream-check
        }
        catch (e) {
            if (this.options?.encryption?.enabled) {
                throw new providers_1.ProviderInitializationError(`Key is incorrect or the file '${filePath}' is not a valid Strapi data file.`);
            }
            throw new providers_1.ProviderInitializationError(`File '${filePath}' is not a valid Strapi data file.`);
        }
        if (!__classPrivateFieldGet(this, _LocalFileSourceProvider_metadata, "f")) {
            throw new providers_1.ProviderInitializationError('Could not load metadata from Strapi data file.');
        }
    }
    async getMetadata() {
        if (!__classPrivateFieldGet(this, _LocalFileSourceProvider_metadata, "f")) {
            await __classPrivateFieldGet(this, _LocalFileSourceProvider_instances, "m", _LocalFileSourceProvider_loadMetadata).call(this);
        }
        return __classPrivateFieldGet(this, _LocalFileSourceProvider_metadata, "f") ?? null;
    }
    async getSchemas() {
        const schemas = await (0, stream_2.collect)(this.createSchemasReadStream());
        if ((0, fp_1.isEmpty)(schemas)) {
            throw new providers_1.ProviderInitializationError('Could not load schemas from Strapi data file.');
        }
        return (0, fp_1.keyBy)('uid', schemas);
    }
    createEntitiesReadStream() {
        return __classPrivateFieldGet(this, _LocalFileSourceProvider_instances, "m", _LocalFileSourceProvider_streamJsonlDirectory).call(this, 'entities');
    }
    createSchemasReadStream() {
        return __classPrivateFieldGet(this, _LocalFileSourceProvider_instances, "m", _LocalFileSourceProvider_streamJsonlDirectory).call(this, 'schemas');
    }
    createLinksReadStream() {
        return __classPrivateFieldGet(this, _LocalFileSourceProvider_instances, "m", _LocalFileSourceProvider_streamJsonlDirectory).call(this, 'links');
    }
    createConfigurationReadStream() {
        // NOTE: TBD
        return __classPrivateFieldGet(this, _LocalFileSourceProvider_instances, "m", _LocalFileSourceProvider_streamJsonlDirectory).call(this, 'configuration');
    }
    createAssetsReadStream() {
        const inStream = __classPrivateFieldGet(this, _LocalFileSourceProvider_instances, "m", _LocalFileSourceProvider_getBackupStream).call(this);
        const outStream = new stream_1.PassThrough({ objectMode: true });
        (0, stream_1.pipeline)([
            inStream,
            new tar_1.default.Parse({
                // find only files in the assets/uploads folder
                filter(filePath, entry) {
                    if (entry.type !== 'File') {
                        return false;
                    }
                    return (0, utils_1.isFilePathInDirname)('assets/uploads', filePath);
                },
                onentry(entry) {
                    const { path: filePath, size = 0 } = entry;
                    const normalizedPath = (0, utils_1.unknownPathToPosix)(filePath);
                    const file = path_1.default.basename(normalizedPath);
                    const asset = {
                        filename: file,
                        filepath: normalizedPath,
                        stats: { size },
                        stream: entry,
                    };
                    outStream.write(asset);
                },
            }),
        ], () => outStream.end());
        return outStream;
    }
}
_LocalFileSourceProvider_metadata = new WeakMap(), _LocalFileSourceProvider_instances = new WeakSet(), _LocalFileSourceProvider_loadMetadata = async function _LocalFileSourceProvider_loadMetadata() {
    const backupStream = __classPrivateFieldGet(this, _LocalFileSourceProvider_instances, "m", _LocalFileSourceProvider_getBackupStream).call(this);
    __classPrivateFieldSet(this, _LocalFileSourceProvider_metadata, await __classPrivateFieldGet(this, _LocalFileSourceProvider_instances, "m", _LocalFileSourceProvider_parseJSONFile).call(this, backupStream, METADATA_FILE_PATH), "f");
}, _LocalFileSourceProvider_getBackupStream = function _LocalFileSourceProvider_getBackupStream() {
    const { file, encryption, compression } = this.options;
    const streams = [];
    try {
        streams.push(fs_extra_1.default.createReadStream(file.path));
    }
    catch (e) {
        throw new Error(`Could not read backup file path provided at "${this.options.file.path}"`);
    }
    if (encryption.enabled && encryption.key) {
        streams.push((0, encryption_1.createDecryptionCipher)(encryption.key));
    }
    if (compression.enabled) {
        streams.push(zlib_1.default.createGunzip());
    }
    return (0, stream_chain_1.chain)(streams);
}, _LocalFileSourceProvider_streamJsonlDirectory = function _LocalFileSourceProvider_streamJsonlDirectory(directory) {
    const inStream = __classPrivateFieldGet(this, _LocalFileSourceProvider_instances, "m", _LocalFileSourceProvider_getBackupStream).call(this);
    const outStream = new stream_1.PassThrough({ objectMode: true });
    (0, stream_1.pipeline)([
        inStream,
        new tar_1.default.Parse({
            filter(filePath, entry) {
                if (entry.type !== 'File') {
                    return false;
                }
                return (0, utils_1.isFilePathInDirname)(directory, filePath);
            },
            async onentry(entry) {
                const transforms = [
                    // JSONL parser to read the data chunks one by one (line by line)
                    (0, Parser_1.parser)({
                        checkErrors: true,
                    }),
                    // The JSONL parser returns each line as key/value
                    (line) => line.value,
                ];
                const stream = entry.pipe((0, stream_chain_1.chain)(transforms));
                try {
                    for await (const chunk of stream) {
                        outStream.write(chunk);
                    }
                }
                catch (e) {
                    outStream.destroy(new providers_1.ProviderTransferError(`Error parsing backup files from backup file ${entry.path}: ${e.message}`, {
                        details: {
                            error: e,
                        },
                    }));
                }
            },
        }),
    ], async () => {
        // Manually send the 'end' event to the out stream
        // once every entry has finished streaming its content
        outStream.end();
    });
    return outStream;
}, _LocalFileSourceProvider_parseJSONFile = 
// For collecting an entire JSON file then parsing it, not for streaming JSONL
async function _LocalFileSourceProvider_parseJSONFile(fileStream, filePath) {
    return new Promise((resolve, reject) => {
        (0, stream_1.pipeline)([
            fileStream,
            // Custom backup archive parsing
            new tar_1.default.Parse({
                /**
                 * Filter the parsed entries to only keep the one that matches the given filepath
                 */
                filter(entryPath, entry) {
                    if (entry.type !== 'File') {
                        return false;
                    }
                    return (0, utils_1.isPathEquivalent)(entryPath, filePath);
                },
                async onentry(entry) {
                    // Collect all the content of the entry file
                    const content = await entry.collect();
                    try {
                        // Parse from buffer to string to JSON
                        const parsedContent = JSON.parse(content.toString());
                        // Resolve the Promise with the parsed content
                        resolve(parsedContent);
                    }
                    catch (e) {
                        reject(e);
                    }
                    finally {
                        // Cleanup (close the stream associated to the entry)
                        entry.destroy();
                    }
                },
            }),
        ], () => {
            // If the promise hasn't been resolved and we've parsed all
            // the archive entries, then the file doesn't exist
            reject(new Error(`File "${filePath}" not found`));
        });
    });
};
//# sourceMappingURL=index.js.map