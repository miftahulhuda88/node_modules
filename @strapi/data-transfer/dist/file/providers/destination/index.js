"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _LocalFileDestinationProvider_instances, _LocalFileDestinationProvider_providersMetadata, _LocalFileDestinationProvider_archive, _LocalFileDestinationProvider_archivePath_get, _LocalFileDestinationProvider_writeMetadata, _LocalFileDestinationProvider_getMetadataStream;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocalFileDestinationProvider = void 0;
const fs_extra_1 = require("fs-extra");
const tar_stream_1 = __importDefault(require("tar-stream"));
const path_1 = __importDefault(require("path"));
const zlib_1 = __importDefault(require("zlib"));
const Stringer_1 = require("stream-json/jsonl/Stringer");
const stream_chain_1 = require("stream-chain");
const stream_1 = require("stream");
const encryption_1 = require("../../../utils/encryption");
const utils_1 = require("./utils");
const providers_1 = require("../../../errors/providers");
const createLocalFileDestinationProvider = (options) => {
    return new LocalFileDestinationProvider(options);
};
exports.createLocalFileDestinationProvider = createLocalFileDestinationProvider;
class LocalFileDestinationProvider {
    constructor(options) {
        _LocalFileDestinationProvider_instances.add(this);
        this.name = 'destination::local-file';
        this.type = 'destination';
        this.results = {};
        _LocalFileDestinationProvider_providersMetadata.set(this, {});
        _LocalFileDestinationProvider_archive.set(this, {});
        this.options = options;
    }
    setMetadata(target, metadata) {
        __classPrivateFieldGet(this, _LocalFileDestinationProvider_providersMetadata, "f")[target] = metadata;
        return this;
    }
    createGzip() {
        return zlib_1.default.createGzip();
    }
    bootstrap() {
        const { compression, encryption } = this.options;
        if (encryption.enabled && !encryption.key) {
            throw new Error("Can't encrypt without a key");
        }
        __classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f").stream = tar_stream_1.default.pack();
        const outStream = (0, fs_extra_1.createWriteStream)(__classPrivateFieldGet(this, _LocalFileDestinationProvider_instances, "a", _LocalFileDestinationProvider_archivePath_get));
        outStream.on('error', (err) => {
            if (err.code === 'ENOSPC') {
                throw new providers_1.ProviderTransferError("Your server doesn't have space to proceed with the import.");
            }
            throw err;
        });
        const archiveTransforms = [];
        if (compression.enabled) {
            archiveTransforms.push(this.createGzip());
        }
        if (encryption.enabled && encryption.key) {
            archiveTransforms.push((0, encryption_1.createEncryptionCipher)(encryption.key));
        }
        __classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f").pipeline = (0, stream_chain_1.chain)([__classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f").stream, ...archiveTransforms, outStream]);
        this.results.file = { path: __classPrivateFieldGet(this, _LocalFileDestinationProvider_instances, "a", _LocalFileDestinationProvider_archivePath_get) };
    }
    async close() {
        const { stream, pipeline } = __classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f");
        if (!stream) {
            return;
        }
        await __classPrivateFieldGet(this, _LocalFileDestinationProvider_instances, "m", _LocalFileDestinationProvider_writeMetadata).call(this);
        stream.finalize();
        if (pipeline && !pipeline.closed) {
            await new Promise((resolve, reject) => {
                pipeline.on('close', resolve).on('error', reject);
            });
        }
    }
    async rollback() {
        await this.close();
        await (0, fs_extra_1.rm)(__classPrivateFieldGet(this, _LocalFileDestinationProvider_instances, "a", _LocalFileDestinationProvider_archivePath_get), { force: true });
    }
    getMetadata() {
        return null;
    }
    createSchemasWriteStream() {
        if (!__classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f").stream) {
            throw new Error('Archive stream is unavailable');
        }
        const filePathFactory = (0, utils_1.createFilePathFactory)('schemas');
        const entryStream = (0, utils_1.createTarEntryStream)(__classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f").stream, filePathFactory, this.options.file.maxSizeJsonl);
        return (0, stream_chain_1.chain)([(0, Stringer_1.stringer)(), entryStream]);
    }
    createEntitiesWriteStream() {
        if (!__classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f").stream) {
            throw new Error('Archive stream is unavailable');
        }
        const filePathFactory = (0, utils_1.createFilePathFactory)('entities');
        const entryStream = (0, utils_1.createTarEntryStream)(__classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f").stream, filePathFactory, this.options.file.maxSizeJsonl);
        return (0, stream_chain_1.chain)([(0, Stringer_1.stringer)(), entryStream]);
    }
    createLinksWriteStream() {
        if (!__classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f").stream) {
            throw new Error('Archive stream is unavailable');
        }
        const filePathFactory = (0, utils_1.createFilePathFactory)('links');
        const entryStream = (0, utils_1.createTarEntryStream)(__classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f").stream, filePathFactory, this.options.file.maxSizeJsonl);
        return (0, stream_chain_1.chain)([(0, Stringer_1.stringer)(), entryStream]);
    }
    createConfigurationWriteStream() {
        if (!__classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f").stream) {
            throw new Error('Archive stream is unavailable');
        }
        const filePathFactory = (0, utils_1.createFilePathFactory)('configuration');
        const entryStream = (0, utils_1.createTarEntryStream)(__classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f").stream, filePathFactory, this.options.file.maxSizeJsonl);
        return (0, stream_chain_1.chain)([(0, Stringer_1.stringer)(), entryStream]);
    }
    createAssetsWriteStream() {
        const { stream: archiveStream } = __classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f");
        if (!archiveStream) {
            throw new Error('Archive stream is unavailable');
        }
        return new stream_1.Writable({
            objectMode: true,
            write(data, _encoding, callback) {
                // always write tar files with posix paths so we have a standard format for paths regardless of system
                const entryPath = path_1.default.posix.join('assets', 'uploads', data.filename);
                const entry = archiveStream.entry({
                    name: entryPath,
                    size: data.stats.size,
                });
                if (!entry) {
                    callback(new Error(`Failed to created a tar entry for ${entryPath}`));
                    return;
                }
                data.stream.pipe(entry);
                entry
                    .on('finish', () => {
                    callback(null);
                })
                    .on('error', (error) => {
                    callback(error);
                });
            },
        });
    }
}
_LocalFileDestinationProvider_providersMetadata = new WeakMap(), _LocalFileDestinationProvider_archive = new WeakMap(), _LocalFileDestinationProvider_instances = new WeakSet(), _LocalFileDestinationProvider_archivePath_get = function _LocalFileDestinationProvider_archivePath_get() {
    const { encryption, compression, file } = this.options;
    let filePath = `${file.path}.tar`;
    if (compression.enabled) {
        filePath += '.gz';
    }
    if (encryption.enabled) {
        filePath += '.enc';
    }
    return filePath;
}, _LocalFileDestinationProvider_writeMetadata = async function _LocalFileDestinationProvider_writeMetadata() {
    const metadata = __classPrivateFieldGet(this, _LocalFileDestinationProvider_providersMetadata, "f").source;
    if (metadata) {
        await new Promise((resolve) => {
            const outStream = __classPrivateFieldGet(this, _LocalFileDestinationProvider_instances, "m", _LocalFileDestinationProvider_getMetadataStream).call(this);
            const data = JSON.stringify(metadata, null, 2);
            stream_1.Readable.from(data).pipe(outStream).on('close', resolve);
        });
    }
}, _LocalFileDestinationProvider_getMetadataStream = function _LocalFileDestinationProvider_getMetadataStream() {
    const { stream } = __classPrivateFieldGet(this, _LocalFileDestinationProvider_archive, "f");
    if (!stream) {
        throw new Error('Archive stream is unavailable');
    }
    return (0, utils_1.createTarEntryStream)(stream, () => 'metadata.json');
};
//# sourceMappingURL=index.js.map