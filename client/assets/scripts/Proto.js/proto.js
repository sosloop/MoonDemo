/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.C2SMatch = (function() {

    /**
     * Properties of a C2SMatch.
     * @exports IC2SMatch
     * @interface IC2SMatch
     */

    /**
     * Constructs a new C2SMatch.
     * @exports C2SMatch
     * @classdesc Represents a C2SMatch.
     * @implements IC2SMatch
     * @constructor
     * @param {IC2SMatch=} [properties] Properties to set
     */
    function C2SMatch(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2SMatch instance using the specified properties.
     * @function create
     * @memberof C2SMatch
     * @static
     * @param {IC2SMatch=} [properties] Properties to set
     * @returns {C2SMatch} C2SMatch instance
     */
    C2SMatch.create = function create(properties) {
        return new C2SMatch(properties);
    };

    /**
     * Encodes the specified C2SMatch message. Does not implicitly {@link C2SMatch.verify|verify} messages.
     * @function encode
     * @memberof C2SMatch
     * @static
     * @param {IC2SMatch} message C2SMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMatch.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2SMatch message, length delimited. Does not implicitly {@link C2SMatch.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SMatch
     * @static
     * @param {IC2SMatch} message C2SMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMatch.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SMatch message from the specified reader or buffer.
     * @function decode
     * @memberof C2SMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SMatch} C2SMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMatch.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SMatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SMatch message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SMatch} C2SMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMatch.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SMatch message.
     * @function verify
     * @memberof C2SMatch
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SMatch.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2SMatch message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SMatch
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SMatch} C2SMatch
     */
    C2SMatch.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SMatch)
            return object;
        return new $root.C2SMatch();
    };

    /**
     * Creates a plain object from a C2SMatch message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SMatch
     * @static
     * @param {C2SMatch} message C2SMatch
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SMatch.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2SMatch to JSON.
     * @function toJSON
     * @memberof C2SMatch
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SMatch.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SMatch
     * @function getTypeUrl
     * @memberof C2SMatch
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SMatch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SMatch";
    };

    return C2SMatch;
})();

$root.S2CMatch = (function() {

    /**
     * Properties of a S2CMatch.
     * @exports IS2CMatch
     * @interface IS2CMatch
     * @property {boolean|null} [res] S2CMatch res
     */

    /**
     * Constructs a new S2CMatch.
     * @exports S2CMatch
     * @classdesc Represents a S2CMatch.
     * @implements IS2CMatch
     * @constructor
     * @param {IS2CMatch=} [properties] Properties to set
     */
    function S2CMatch(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CMatch res.
     * @member {boolean} res
     * @memberof S2CMatch
     * @instance
     */
    S2CMatch.prototype.res = false;

    /**
     * Creates a new S2CMatch instance using the specified properties.
     * @function create
     * @memberof S2CMatch
     * @static
     * @param {IS2CMatch=} [properties] Properties to set
     * @returns {S2CMatch} S2CMatch instance
     */
    S2CMatch.create = function create(properties) {
        return new S2CMatch(properties);
    };

    /**
     * Encodes the specified S2CMatch message. Does not implicitly {@link S2CMatch.verify|verify} messages.
     * @function encode
     * @memberof S2CMatch
     * @static
     * @param {IS2CMatch} message S2CMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMatch.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.res != null && Object.hasOwnProperty.call(message, "res"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.res);
        return writer;
    };

    /**
     * Encodes the specified S2CMatch message, length delimited. Does not implicitly {@link S2CMatch.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CMatch
     * @static
     * @param {IS2CMatch} message S2CMatch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMatch.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CMatch message from the specified reader or buffer.
     * @function decode
     * @memberof S2CMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CMatch} S2CMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMatch.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CMatch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.res = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CMatch message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CMatch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CMatch} S2CMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMatch.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CMatch message.
     * @function verify
     * @memberof S2CMatch
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CMatch.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.res != null && message.hasOwnProperty("res"))
            if (typeof message.res !== "boolean")
                return "res: boolean expected";
        return null;
    };

    /**
     * Creates a S2CMatch message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CMatch
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CMatch} S2CMatch
     */
    S2CMatch.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CMatch)
            return object;
        var message = new $root.S2CMatch();
        if (object.res != null)
            message.res = Boolean(object.res);
        return message;
    };

    /**
     * Creates a plain object from a S2CMatch message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CMatch
     * @static
     * @param {S2CMatch} message S2CMatch
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CMatch.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.res = false;
        if (message.res != null && message.hasOwnProperty("res"))
            object.res = message.res;
        return object;
    };

    /**
     * Converts this S2CMatch to JSON.
     * @function toJSON
     * @memberof S2CMatch
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CMatch.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CMatch
     * @function getTypeUrl
     * @memberof S2CMatch
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CMatch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CMatch";
    };

    return S2CMatch;
})();

$root.S2CMatchSuccess = (function() {

    /**
     * Properties of a S2CMatchSuccess.
     * @exports IS2CMatchSuccess
     * @interface IS2CMatchSuccess
     */

    /**
     * Constructs a new S2CMatchSuccess.
     * @exports S2CMatchSuccess
     * @classdesc Represents a S2CMatchSuccess.
     * @implements IS2CMatchSuccess
     * @constructor
     * @param {IS2CMatchSuccess=} [properties] Properties to set
     */
    function S2CMatchSuccess(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new S2CMatchSuccess instance using the specified properties.
     * @function create
     * @memberof S2CMatchSuccess
     * @static
     * @param {IS2CMatchSuccess=} [properties] Properties to set
     * @returns {S2CMatchSuccess} S2CMatchSuccess instance
     */
    S2CMatchSuccess.create = function create(properties) {
        return new S2CMatchSuccess(properties);
    };

    /**
     * Encodes the specified S2CMatchSuccess message. Does not implicitly {@link S2CMatchSuccess.verify|verify} messages.
     * @function encode
     * @memberof S2CMatchSuccess
     * @static
     * @param {IS2CMatchSuccess} message S2CMatchSuccess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMatchSuccess.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified S2CMatchSuccess message, length delimited. Does not implicitly {@link S2CMatchSuccess.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CMatchSuccess
     * @static
     * @param {IS2CMatchSuccess} message S2CMatchSuccess message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMatchSuccess.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CMatchSuccess message from the specified reader or buffer.
     * @function decode
     * @memberof S2CMatchSuccess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CMatchSuccess} S2CMatchSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMatchSuccess.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CMatchSuccess();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CMatchSuccess message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CMatchSuccess
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CMatchSuccess} S2CMatchSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMatchSuccess.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CMatchSuccess message.
     * @function verify
     * @memberof S2CMatchSuccess
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CMatchSuccess.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a S2CMatchSuccess message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CMatchSuccess
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CMatchSuccess} S2CMatchSuccess
     */
    S2CMatchSuccess.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CMatchSuccess)
            return object;
        return new $root.S2CMatchSuccess();
    };

    /**
     * Creates a plain object from a S2CMatchSuccess message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CMatchSuccess
     * @static
     * @param {S2CMatchSuccess} message S2CMatchSuccess
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CMatchSuccess.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this S2CMatchSuccess to JSON.
     * @function toJSON
     * @memberof S2CMatchSuccess
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CMatchSuccess.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CMatchSuccess
     * @function getTypeUrl
     * @memberof S2CMatchSuccess
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CMatchSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CMatchSuccess";
    };

    return S2CMatchSuccess;
})();

$root.S2CGameOver = (function() {

    /**
     * Properties of a S2CGameOver.
     * @exports IS2CGameOver
     * @interface IS2CGameOver
     * @property {number|Long|null} [score] S2CGameOver score
     */

    /**
     * Constructs a new S2CGameOver.
     * @exports S2CGameOver
     * @classdesc Represents a S2CGameOver.
     * @implements IS2CGameOver
     * @constructor
     * @param {IS2CGameOver=} [properties] Properties to set
     */
    function S2CGameOver(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CGameOver score.
     * @member {number|Long} score
     * @memberof S2CGameOver
     * @instance
     */
    S2CGameOver.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CGameOver instance using the specified properties.
     * @function create
     * @memberof S2CGameOver
     * @static
     * @param {IS2CGameOver=} [properties] Properties to set
     * @returns {S2CGameOver} S2CGameOver instance
     */
    S2CGameOver.create = function create(properties) {
        return new S2CGameOver(properties);
    };

    /**
     * Encodes the specified S2CGameOver message. Does not implicitly {@link S2CGameOver.verify|verify} messages.
     * @function encode
     * @memberof S2CGameOver
     * @static
     * @param {IS2CGameOver} message S2CGameOver message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGameOver.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.score != null && Object.hasOwnProperty.call(message, "score"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.score);
        return writer;
    };

    /**
     * Encodes the specified S2CGameOver message, length delimited. Does not implicitly {@link S2CGameOver.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CGameOver
     * @static
     * @param {IS2CGameOver} message S2CGameOver message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGameOver.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CGameOver message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGameOver
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CGameOver} S2CGameOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGameOver.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CGameOver();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.score = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CGameOver message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CGameOver
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CGameOver} S2CGameOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGameOver.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CGameOver message.
     * @function verify
     * @memberof S2CGameOver
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CGameOver.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.score != null && message.hasOwnProperty("score"))
            if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                return "score: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CGameOver message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CGameOver
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CGameOver} S2CGameOver
     */
    S2CGameOver.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CGameOver)
            return object;
        var message = new $root.S2CGameOver();
        if (object.score != null)
            if ($util.Long)
                (message.score = $util.Long.fromValue(object.score)).unsigned = false;
            else if (typeof object.score === "string")
                message.score = parseInt(object.score, 10);
            else if (typeof object.score === "number")
                message.score = object.score;
            else if (typeof object.score === "object")
                message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CGameOver message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CGameOver
     * @static
     * @param {S2CGameOver} message S2CGameOver
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CGameOver.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.score = options.longs === String ? "0" : 0;
        if (message.score != null && message.hasOwnProperty("score"))
            if (typeof message.score === "number")
                object.score = options.longs === String ? String(message.score) : message.score;
            else
                object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
        return object;
    };

    /**
     * Converts this S2CGameOver to JSON.
     * @function toJSON
     * @memberof S2CGameOver
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CGameOver.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CGameOver
     * @function getTypeUrl
     * @memberof S2CGameOver
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CGameOver.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CGameOver";
    };

    return S2CGameOver;
})();

$root.Vector2 = (function() {

    /**
     * Properties of a Vector2.
     * @exports IVector2
     * @interface IVector2
     * @property {number|null} [x] Vector2 x
     * @property {number|null} [y] Vector2 y
     */

    /**
     * Constructs a new Vector2.
     * @exports Vector2
     * @classdesc Represents a Vector2.
     * @implements IVector2
     * @constructor
     * @param {IVector2=} [properties] Properties to set
     */
    function Vector2(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Vector2 x.
     * @member {number} x
     * @memberof Vector2
     * @instance
     */
    Vector2.prototype.x = 0;

    /**
     * Vector2 y.
     * @member {number} y
     * @memberof Vector2
     * @instance
     */
    Vector2.prototype.y = 0;

    /**
     * Creates a new Vector2 instance using the specified properties.
     * @function create
     * @memberof Vector2
     * @static
     * @param {IVector2=} [properties] Properties to set
     * @returns {Vector2} Vector2 instance
     */
    Vector2.create = function create(properties) {
        return new Vector2(properties);
    };

    /**
     * Encodes the specified Vector2 message. Does not implicitly {@link Vector2.verify|verify} messages.
     * @function encode
     * @memberof Vector2
     * @static
     * @param {IVector2} message Vector2 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Vector2.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
        return writer;
    };

    /**
     * Encodes the specified Vector2 message, length delimited. Does not implicitly {@link Vector2.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Vector2
     * @static
     * @param {IVector2} message Vector2 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Vector2.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Vector2 message from the specified reader or buffer.
     * @function decode
     * @memberof Vector2
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Vector2} Vector2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Vector2.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Vector2();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.x = reader.float();
                    break;
                }
            case 2: {
                    message.y = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Vector2 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Vector2
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Vector2} Vector2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Vector2.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Vector2 message.
     * @function verify
     * @memberof Vector2
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Vector2.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        return null;
    };

    /**
     * Creates a Vector2 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Vector2
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Vector2} Vector2
     */
    Vector2.fromObject = function fromObject(object) {
        if (object instanceof $root.Vector2)
            return object;
        var message = new $root.Vector2();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        return message;
    };

    /**
     * Creates a plain object from a Vector2 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Vector2
     * @static
     * @param {Vector2} message Vector2
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Vector2.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        return object;
    };

    /**
     * Converts this Vector2 to JSON.
     * @function toJSON
     * @memberof Vector2
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Vector2.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Vector2
     * @function getTypeUrl
     * @memberof Vector2
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Vector2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Vector2";
    };

    return Vector2;
})();

$root.ItemData = (function() {

    /**
     * Properties of an ItemData.
     * @exports IItemData
     * @interface IItemData
     * @property {number|null} [id] ItemData id
     * @property {number|Long|null} [count] ItemData count
     */

    /**
     * Constructs a new ItemData.
     * @exports ItemData
     * @classdesc Represents an ItemData.
     * @implements IItemData
     * @constructor
     * @param {IItemData=} [properties] Properties to set
     */
    function ItemData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ItemData id.
     * @member {number} id
     * @memberof ItemData
     * @instance
     */
    ItemData.prototype.id = 0;

    /**
     * ItemData count.
     * @member {number|Long} count
     * @memberof ItemData
     * @instance
     */
    ItemData.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ItemData instance using the specified properties.
     * @function create
     * @memberof ItemData
     * @static
     * @param {IItemData=} [properties] Properties to set
     * @returns {ItemData} ItemData instance
     */
    ItemData.create = function create(properties) {
        return new ItemData(properties);
    };

    /**
     * Encodes the specified ItemData message. Does not implicitly {@link ItemData.verify|verify} messages.
     * @function encode
     * @memberof ItemData
     * @static
     * @param {IItemData} message ItemData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.count);
        return writer;
    };

    /**
     * Encodes the specified ItemData message, length delimited. Does not implicitly {@link ItemData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemData
     * @static
     * @param {IItemData} message ItemData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ItemData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ItemData message from the specified reader or buffer.
     * @function decode
     * @memberof ItemData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ItemData} ItemData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ItemData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int32();
                    break;
                }
            case 2: {
                    message.count = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ItemData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ItemData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemData} ItemData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ItemData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ItemData message.
     * @function verify
     * @memberof ItemData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ItemData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                return "count: integer|Long expected";
        return null;
    };

    /**
     * Creates an ItemData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ItemData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ItemData} ItemData
     */
    ItemData.fromObject = function fromObject(object) {
        if (object instanceof $root.ItemData)
            return object;
        var message = new $root.ItemData();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.count != null)
            if ($util.Long)
                (message.count = $util.Long.fromValue(object.count)).unsigned = false;
            else if (typeof object.count === "string")
                message.count = parseInt(object.count, 10);
            else if (typeof object.count === "number")
                message.count = object.count;
            else if (typeof object.count === "object")
                message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from an ItemData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ItemData
     * @static
     * @param {ItemData} message ItemData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ItemData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.count = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.count != null && message.hasOwnProperty("count"))
            if (typeof message.count === "number")
                object.count = options.longs === String ? String(message.count) : message.count;
            else
                object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
        return object;
    };

    /**
     * Converts this ItemData to JSON.
     * @function toJSON
     * @memberof ItemData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ItemData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ItemData
     * @function getTypeUrl
     * @memberof ItemData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ItemData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ItemData";
    };

    return ItemData;
})();

$root.MailData = (function() {

    /**
     * Properties of a MailData.
     * @exports IMailData
     * @interface IMailData
     * @property {number|Long|null} [id] MailData id
     * @property {string|null} [mailKey] MailData mailKey
     * @property {number|Long|null} [ctime] MailData ctime
     * @property {number|null} [flag] MailData flag
     * @property {Array.<IItemData>|null} [rewards] MailData rewards
     * @property {number|null} [trace] MailData trace
     * @property {string|null} [parmas] MailData parmas
     */

    /**
     * Constructs a new MailData.
     * @exports MailData
     * @classdesc Represents a MailData.
     * @implements IMailData
     * @constructor
     * @param {IMailData=} [properties] Properties to set
     */
    function MailData(properties) {
        this.rewards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MailData id.
     * @member {number|Long} id
     * @memberof MailData
     * @instance
     */
    MailData.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MailData mailKey.
     * @member {string} mailKey
     * @memberof MailData
     * @instance
     */
    MailData.prototype.mailKey = "";

    /**
     * MailData ctime.
     * @member {number|Long} ctime
     * @memberof MailData
     * @instance
     */
    MailData.prototype.ctime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MailData flag.
     * @member {number} flag
     * @memberof MailData
     * @instance
     */
    MailData.prototype.flag = 0;

    /**
     * MailData rewards.
     * @member {Array.<IItemData>} rewards
     * @memberof MailData
     * @instance
     */
    MailData.prototype.rewards = $util.emptyArray;

    /**
     * MailData trace.
     * @member {number} trace
     * @memberof MailData
     * @instance
     */
    MailData.prototype.trace = 0;

    /**
     * MailData parmas.
     * @member {string} parmas
     * @memberof MailData
     * @instance
     */
    MailData.prototype.parmas = "";

    /**
     * Creates a new MailData instance using the specified properties.
     * @function create
     * @memberof MailData
     * @static
     * @param {IMailData=} [properties] Properties to set
     * @returns {MailData} MailData instance
     */
    MailData.create = function create(properties) {
        return new MailData(properties);
    };

    /**
     * Encodes the specified MailData message. Does not implicitly {@link MailData.verify|verify} messages.
     * @function encode
     * @memberof MailData
     * @static
     * @param {IMailData} message MailData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MailData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.mailKey != null && Object.hasOwnProperty.call(message, "mailKey"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.mailKey);
        if (message.ctime != null && Object.hasOwnProperty.call(message, "ctime"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.ctime);
        if (message.flag != null && Object.hasOwnProperty.call(message, "flag"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.flag);
        if (message.rewards != null && message.rewards.length)
            for (var i = 0; i < message.rewards.length; ++i)
                $root.ItemData.encode(message.rewards[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.trace != null && Object.hasOwnProperty.call(message, "trace"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.trace);
        if (message.parmas != null && Object.hasOwnProperty.call(message, "parmas"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.parmas);
        return writer;
    };

    /**
     * Encodes the specified MailData message, length delimited. Does not implicitly {@link MailData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MailData
     * @static
     * @param {IMailData} message MailData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MailData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MailData message from the specified reader or buffer.
     * @function decode
     * @memberof MailData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MailData} MailData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MailData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MailData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            case 2: {
                    message.mailKey = reader.string();
                    break;
                }
            case 3: {
                    message.ctime = reader.int64();
                    break;
                }
            case 4: {
                    message.flag = reader.int32();
                    break;
                }
            case 5: {
                    if (!(message.rewards && message.rewards.length))
                        message.rewards = [];
                    message.rewards.push($root.ItemData.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    message.trace = reader.int32();
                    break;
                }
            case 7: {
                    message.parmas = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MailData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MailData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MailData} MailData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MailData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MailData message.
     * @function verify
     * @memberof MailData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MailData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.mailKey != null && message.hasOwnProperty("mailKey"))
            if (!$util.isString(message.mailKey))
                return "mailKey: string expected";
        if (message.ctime != null && message.hasOwnProperty("ctime"))
            if (!$util.isInteger(message.ctime) && !(message.ctime && $util.isInteger(message.ctime.low) && $util.isInteger(message.ctime.high)))
                return "ctime: integer|Long expected";
        if (message.flag != null && message.hasOwnProperty("flag"))
            if (!$util.isInteger(message.flag))
                return "flag: integer expected";
        if (message.rewards != null && message.hasOwnProperty("rewards")) {
            if (!Array.isArray(message.rewards))
                return "rewards: array expected";
            for (var i = 0; i < message.rewards.length; ++i) {
                var error = $root.ItemData.verify(message.rewards[i]);
                if (error)
                    return "rewards." + error;
            }
        }
        if (message.trace != null && message.hasOwnProperty("trace"))
            if (!$util.isInteger(message.trace))
                return "trace: integer expected";
        if (message.parmas != null && message.hasOwnProperty("parmas"))
            if (!$util.isString(message.parmas))
                return "parmas: string expected";
        return null;
    };

    /**
     * Creates a MailData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MailData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MailData} MailData
     */
    MailData.fromObject = function fromObject(object) {
        if (object instanceof $root.MailData)
            return object;
        var message = new $root.MailData();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.mailKey != null)
            message.mailKey = String(object.mailKey);
        if (object.ctime != null)
            if ($util.Long)
                (message.ctime = $util.Long.fromValue(object.ctime)).unsigned = false;
            else if (typeof object.ctime === "string")
                message.ctime = parseInt(object.ctime, 10);
            else if (typeof object.ctime === "number")
                message.ctime = object.ctime;
            else if (typeof object.ctime === "object")
                message.ctime = new $util.LongBits(object.ctime.low >>> 0, object.ctime.high >>> 0).toNumber();
        if (object.flag != null)
            message.flag = object.flag | 0;
        if (object.rewards) {
            if (!Array.isArray(object.rewards))
                throw TypeError(".MailData.rewards: array expected");
            message.rewards = [];
            for (var i = 0; i < object.rewards.length; ++i) {
                if (typeof object.rewards[i] !== "object")
                    throw TypeError(".MailData.rewards: object expected");
                message.rewards[i] = $root.ItemData.fromObject(object.rewards[i]);
            }
        }
        if (object.trace != null)
            message.trace = object.trace | 0;
        if (object.parmas != null)
            message.parmas = String(object.parmas);
        return message;
    };

    /**
     * Creates a plain object from a MailData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MailData
     * @static
     * @param {MailData} message MailData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MailData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.rewards = [];
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.mailKey = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.ctime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.ctime = options.longs === String ? "0" : 0;
            object.flag = 0;
            object.trace = 0;
            object.parmas = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.mailKey != null && message.hasOwnProperty("mailKey"))
            object.mailKey = message.mailKey;
        if (message.ctime != null && message.hasOwnProperty("ctime"))
            if (typeof message.ctime === "number")
                object.ctime = options.longs === String ? String(message.ctime) : message.ctime;
            else
                object.ctime = options.longs === String ? $util.Long.prototype.toString.call(message.ctime) : options.longs === Number ? new $util.LongBits(message.ctime.low >>> 0, message.ctime.high >>> 0).toNumber() : message.ctime;
        if (message.flag != null && message.hasOwnProperty("flag"))
            object.flag = message.flag;
        if (message.rewards && message.rewards.length) {
            object.rewards = [];
            for (var j = 0; j < message.rewards.length; ++j)
                object.rewards[j] = $root.ItemData.toObject(message.rewards[j], options);
        }
        if (message.trace != null && message.hasOwnProperty("trace"))
            object.trace = message.trace;
        if (message.parmas != null && message.hasOwnProperty("parmas"))
            object.parmas = message.parmas;
        return object;
    };

    /**
     * Converts this MailData to JSON.
     * @function toJSON
     * @memberof MailData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MailData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MailData
     * @function getTypeUrl
     * @memberof MailData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MailData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MailData";
    };

    return MailData;
})();

$root.ProductionData = (function() {

    /**
     * Properties of a ProductionData.
     * @exports IProductionData
     * @interface IProductionData
     * @property {number|null} [configid] ProductionData configid
     * @property {number|Long|null} [targettime] ProductionData targettime
     * @property {number|Long|null} [starttime] ProductionData starttime
     * @property {number|null} [productionstate] ProductionData productionstate
     */

    /**
     * Constructs a new ProductionData.
     * @exports ProductionData
     * @classdesc Represents a ProductionData.
     * @implements IProductionData
     * @constructor
     * @param {IProductionData=} [properties] Properties to set
     */
    function ProductionData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProductionData configid.
     * @member {number} configid
     * @memberof ProductionData
     * @instance
     */
    ProductionData.prototype.configid = 0;

    /**
     * ProductionData targettime.
     * @member {number|Long} targettime
     * @memberof ProductionData
     * @instance
     */
    ProductionData.prototype.targettime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ProductionData starttime.
     * @member {number|Long} starttime
     * @memberof ProductionData
     * @instance
     */
    ProductionData.prototype.starttime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ProductionData productionstate.
     * @member {number} productionstate
     * @memberof ProductionData
     * @instance
     */
    ProductionData.prototype.productionstate = 0;

    /**
     * Creates a new ProductionData instance using the specified properties.
     * @function create
     * @memberof ProductionData
     * @static
     * @param {IProductionData=} [properties] Properties to set
     * @returns {ProductionData} ProductionData instance
     */
    ProductionData.create = function create(properties) {
        return new ProductionData(properties);
    };

    /**
     * Encodes the specified ProductionData message. Does not implicitly {@link ProductionData.verify|verify} messages.
     * @function encode
     * @memberof ProductionData
     * @static
     * @param {IProductionData} message ProductionData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProductionData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.configid != null && Object.hasOwnProperty.call(message, "configid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.configid);
        if (message.targettime != null && Object.hasOwnProperty.call(message, "targettime"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.targettime);
        if (message.starttime != null && Object.hasOwnProperty.call(message, "starttime"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.starttime);
        if (message.productionstate != null && Object.hasOwnProperty.call(message, "productionstate"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.productionstate);
        return writer;
    };

    /**
     * Encodes the specified ProductionData message, length delimited. Does not implicitly {@link ProductionData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProductionData
     * @static
     * @param {IProductionData} message ProductionData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProductionData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProductionData message from the specified reader or buffer.
     * @function decode
     * @memberof ProductionData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProductionData} ProductionData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProductionData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProductionData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 2: {
                    message.configid = reader.int32();
                    break;
                }
            case 3: {
                    message.targettime = reader.int64();
                    break;
                }
            case 4: {
                    message.starttime = reader.int64();
                    break;
                }
            case 5: {
                    message.productionstate = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ProductionData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProductionData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProductionData} ProductionData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProductionData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProductionData message.
     * @function verify
     * @memberof ProductionData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProductionData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.configid != null && message.hasOwnProperty("configid"))
            if (!$util.isInteger(message.configid))
                return "configid: integer expected";
        if (message.targettime != null && message.hasOwnProperty("targettime"))
            if (!$util.isInteger(message.targettime) && !(message.targettime && $util.isInteger(message.targettime.low) && $util.isInteger(message.targettime.high)))
                return "targettime: integer|Long expected";
        if (message.starttime != null && message.hasOwnProperty("starttime"))
            if (!$util.isInteger(message.starttime) && !(message.starttime && $util.isInteger(message.starttime.low) && $util.isInteger(message.starttime.high)))
                return "starttime: integer|Long expected";
        if (message.productionstate != null && message.hasOwnProperty("productionstate"))
            if (!$util.isInteger(message.productionstate))
                return "productionstate: integer expected";
        return null;
    };

    /**
     * Creates a ProductionData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProductionData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProductionData} ProductionData
     */
    ProductionData.fromObject = function fromObject(object) {
        if (object instanceof $root.ProductionData)
            return object;
        var message = new $root.ProductionData();
        if (object.configid != null)
            message.configid = object.configid | 0;
        if (object.targettime != null)
            if ($util.Long)
                (message.targettime = $util.Long.fromValue(object.targettime)).unsigned = false;
            else if (typeof object.targettime === "string")
                message.targettime = parseInt(object.targettime, 10);
            else if (typeof object.targettime === "number")
                message.targettime = object.targettime;
            else if (typeof object.targettime === "object")
                message.targettime = new $util.LongBits(object.targettime.low >>> 0, object.targettime.high >>> 0).toNumber();
        if (object.starttime != null)
            if ($util.Long)
                (message.starttime = $util.Long.fromValue(object.starttime)).unsigned = false;
            else if (typeof object.starttime === "string")
                message.starttime = parseInt(object.starttime, 10);
            else if (typeof object.starttime === "number")
                message.starttime = object.starttime;
            else if (typeof object.starttime === "object")
                message.starttime = new $util.LongBits(object.starttime.low >>> 0, object.starttime.high >>> 0).toNumber();
        if (object.productionstate != null)
            message.productionstate = object.productionstate | 0;
        return message;
    };

    /**
     * Creates a plain object from a ProductionData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProductionData
     * @static
     * @param {ProductionData} message ProductionData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProductionData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.configid = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.targettime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.targettime = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.starttime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.starttime = options.longs === String ? "0" : 0;
            object.productionstate = 0;
        }
        if (message.configid != null && message.hasOwnProperty("configid"))
            object.configid = message.configid;
        if (message.targettime != null && message.hasOwnProperty("targettime"))
            if (typeof message.targettime === "number")
                object.targettime = options.longs === String ? String(message.targettime) : message.targettime;
            else
                object.targettime = options.longs === String ? $util.Long.prototype.toString.call(message.targettime) : options.longs === Number ? new $util.LongBits(message.targettime.low >>> 0, message.targettime.high >>> 0).toNumber() : message.targettime;
        if (message.starttime != null && message.hasOwnProperty("starttime"))
            if (typeof message.starttime === "number")
                object.starttime = options.longs === String ? String(message.starttime) : message.starttime;
            else
                object.starttime = options.longs === String ? $util.Long.prototype.toString.call(message.starttime) : options.longs === Number ? new $util.LongBits(message.starttime.low >>> 0, message.starttime.high >>> 0).toNumber() : message.starttime;
        if (message.productionstate != null && message.hasOwnProperty("productionstate"))
            object.productionstate = message.productionstate;
        return object;
    };

    /**
     * Converts this ProductionData to JSON.
     * @function toJSON
     * @memberof ProductionData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProductionData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ProductionData
     * @function getTypeUrl
     * @memberof ProductionData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ProductionData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ProductionData";
    };

    return ProductionData;
})();

$root.AttributeEntryData = (function() {

    /**
     * Properties of an AttributeEntryData.
     * @exports IAttributeEntryData
     * @interface IAttributeEntryData
     * @property {number|Long|null} [id] AttributeEntryData id
     * @property {number|null} [key] AttributeEntryData key
     * @property {number|Long|null} [value] AttributeEntryData value
     * @property {number|null} [entrytype] AttributeEntryData entrytype
     */

    /**
     * Constructs a new AttributeEntryData.
     * @exports AttributeEntryData
     * @classdesc Represents an AttributeEntryData.
     * @implements IAttributeEntryData
     * @constructor
     * @param {IAttributeEntryData=} [properties] Properties to set
     */
    function AttributeEntryData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AttributeEntryData id.
     * @member {number|Long} id
     * @memberof AttributeEntryData
     * @instance
     */
    AttributeEntryData.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AttributeEntryData key.
     * @member {number} key
     * @memberof AttributeEntryData
     * @instance
     */
    AttributeEntryData.prototype.key = 0;

    /**
     * AttributeEntryData value.
     * @member {number|Long} value
     * @memberof AttributeEntryData
     * @instance
     */
    AttributeEntryData.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AttributeEntryData entrytype.
     * @member {number} entrytype
     * @memberof AttributeEntryData
     * @instance
     */
    AttributeEntryData.prototype.entrytype = 0;

    /**
     * Creates a new AttributeEntryData instance using the specified properties.
     * @function create
     * @memberof AttributeEntryData
     * @static
     * @param {IAttributeEntryData=} [properties] Properties to set
     * @returns {AttributeEntryData} AttributeEntryData instance
     */
    AttributeEntryData.create = function create(properties) {
        return new AttributeEntryData(properties);
    };

    /**
     * Encodes the specified AttributeEntryData message. Does not implicitly {@link AttributeEntryData.verify|verify} messages.
     * @function encode
     * @memberof AttributeEntryData
     * @static
     * @param {IAttributeEntryData} message AttributeEntryData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttributeEntryData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.key);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.value);
        if (message.entrytype != null && Object.hasOwnProperty.call(message, "entrytype"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.entrytype);
        return writer;
    };

    /**
     * Encodes the specified AttributeEntryData message, length delimited. Does not implicitly {@link AttributeEntryData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AttributeEntryData
     * @static
     * @param {IAttributeEntryData} message AttributeEntryData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AttributeEntryData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AttributeEntryData message from the specified reader or buffer.
     * @function decode
     * @memberof AttributeEntryData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AttributeEntryData} AttributeEntryData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttributeEntryData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AttributeEntryData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            case 2: {
                    message.key = reader.int32();
                    break;
                }
            case 3: {
                    message.value = reader.int64();
                    break;
                }
            case 4: {
                    message.entrytype = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AttributeEntryData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AttributeEntryData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AttributeEntryData} AttributeEntryData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AttributeEntryData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AttributeEntryData message.
     * @function verify
     * @memberof AttributeEntryData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AttributeEntryData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isInteger(message.key))
                return "key: integer expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                return "value: integer|Long expected";
        if (message.entrytype != null && message.hasOwnProperty("entrytype"))
            if (!$util.isInteger(message.entrytype))
                return "entrytype: integer expected";
        return null;
    };

    /**
     * Creates an AttributeEntryData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AttributeEntryData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AttributeEntryData} AttributeEntryData
     */
    AttributeEntryData.fromObject = function fromObject(object) {
        if (object instanceof $root.AttributeEntryData)
            return object;
        var message = new $root.AttributeEntryData();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.key != null)
            message.key = object.key | 0;
        if (object.value != null)
            if ($util.Long)
                (message.value = $util.Long.fromValue(object.value)).unsigned = false;
            else if (typeof object.value === "string")
                message.value = parseInt(object.value, 10);
            else if (typeof object.value === "number")
                message.value = object.value;
            else if (typeof object.value === "object")
                message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
        if (object.entrytype != null)
            message.entrytype = object.entrytype | 0;
        return message;
    };

    /**
     * Creates a plain object from an AttributeEntryData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AttributeEntryData
     * @static
     * @param {AttributeEntryData} message AttributeEntryData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AttributeEntryData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.key = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.value = options.longs === String ? "0" : 0;
            object.entrytype = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value === "number")
                object.value = options.longs === String ? String(message.value) : message.value;
            else
                object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
        if (message.entrytype != null && message.hasOwnProperty("entrytype"))
            object.entrytype = message.entrytype;
        return object;
    };

    /**
     * Converts this AttributeEntryData to JSON.
     * @function toJSON
     * @memberof AttributeEntryData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AttributeEntryData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AttributeEntryData
     * @function getTypeUrl
     * @memberof AttributeEntryData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AttributeEntryData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AttributeEntryData";
    };

    return AttributeEntryData;
})();

$root.TaskData = (function() {

    /**
     * Properties of a TaskData.
     * @exports ITaskData
     * @interface ITaskData
     * @property {number|null} [configid] TaskData configid
     * @property {number|null} [taskstate] TaskData taskstate
     * @property {number|null} [taskpogress] TaskData taskpogress
     */

    /**
     * Constructs a new TaskData.
     * @exports TaskData
     * @classdesc Represents a TaskData.
     * @implements ITaskData
     * @constructor
     * @param {ITaskData=} [properties] Properties to set
     */
    function TaskData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TaskData configid.
     * @member {number} configid
     * @memberof TaskData
     * @instance
     */
    TaskData.prototype.configid = 0;

    /**
     * TaskData taskstate.
     * @member {number} taskstate
     * @memberof TaskData
     * @instance
     */
    TaskData.prototype.taskstate = 0;

    /**
     * TaskData taskpogress.
     * @member {number} taskpogress
     * @memberof TaskData
     * @instance
     */
    TaskData.prototype.taskpogress = 0;

    /**
     * Creates a new TaskData instance using the specified properties.
     * @function create
     * @memberof TaskData
     * @static
     * @param {ITaskData=} [properties] Properties to set
     * @returns {TaskData} TaskData instance
     */
    TaskData.create = function create(properties) {
        return new TaskData(properties);
    };

    /**
     * Encodes the specified TaskData message. Does not implicitly {@link TaskData.verify|verify} messages.
     * @function encode
     * @memberof TaskData
     * @static
     * @param {ITaskData} message TaskData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.configid != null && Object.hasOwnProperty.call(message, "configid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.configid);
        if (message.taskstate != null && Object.hasOwnProperty.call(message, "taskstate"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.taskstate);
        if (message.taskpogress != null && Object.hasOwnProperty.call(message, "taskpogress"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.taskpogress);
        return writer;
    };

    /**
     * Encodes the specified TaskData message, length delimited. Does not implicitly {@link TaskData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TaskData
     * @static
     * @param {ITaskData} message TaskData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TaskData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TaskData message from the specified reader or buffer.
     * @function decode
     * @memberof TaskData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TaskData} TaskData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TaskData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.configid = reader.int32();
                    break;
                }
            case 2: {
                    message.taskstate = reader.int32();
                    break;
                }
            case 3: {
                    message.taskpogress = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TaskData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TaskData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TaskData} TaskData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TaskData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TaskData message.
     * @function verify
     * @memberof TaskData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TaskData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.configid != null && message.hasOwnProperty("configid"))
            if (!$util.isInteger(message.configid))
                return "configid: integer expected";
        if (message.taskstate != null && message.hasOwnProperty("taskstate"))
            if (!$util.isInteger(message.taskstate))
                return "taskstate: integer expected";
        if (message.taskpogress != null && message.hasOwnProperty("taskpogress"))
            if (!$util.isInteger(message.taskpogress))
                return "taskpogress: integer expected";
        return null;
    };

    /**
     * Creates a TaskData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TaskData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TaskData} TaskData
     */
    TaskData.fromObject = function fromObject(object) {
        if (object instanceof $root.TaskData)
            return object;
        var message = new $root.TaskData();
        if (object.configid != null)
            message.configid = object.configid | 0;
        if (object.taskstate != null)
            message.taskstate = object.taskstate | 0;
        if (object.taskpogress != null)
            message.taskpogress = object.taskpogress | 0;
        return message;
    };

    /**
     * Creates a plain object from a TaskData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TaskData
     * @static
     * @param {TaskData} message TaskData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TaskData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.configid = 0;
            object.taskstate = 0;
            object.taskpogress = 0;
        }
        if (message.configid != null && message.hasOwnProperty("configid"))
            object.configid = message.configid;
        if (message.taskstate != null && message.hasOwnProperty("taskstate"))
            object.taskstate = message.taskstate;
        if (message.taskpogress != null && message.hasOwnProperty("taskpogress"))
            object.taskpogress = message.taskpogress;
        return object;
    };

    /**
     * Converts this TaskData to JSON.
     * @function toJSON
     * @memberof TaskData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TaskData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TaskData
     * @function getTypeUrl
     * @memberof TaskData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TaskData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TaskData";
    };

    return TaskData;
})();

$root.RankData = (function() {

    /**
     * Properties of a RankData.
     * @exports IRankData
     * @interface IRankData
     * @property {number|Long|null} [id] RankData id
     * @property {number|Long|null} [unitid] RankData unitid
     * @property {string|null} [name] RankData name
     * @property {number|null} [count] RankData count
     */

    /**
     * Constructs a new RankData.
     * @exports RankData
     * @classdesc Represents a RankData.
     * @implements IRankData
     * @constructor
     * @param {IRankData=} [properties] Properties to set
     */
    function RankData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RankData id.
     * @member {number|Long} id
     * @memberof RankData
     * @instance
     */
    RankData.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RankData unitid.
     * @member {number|Long} unitid
     * @memberof RankData
     * @instance
     */
    RankData.prototype.unitid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RankData name.
     * @member {string} name
     * @memberof RankData
     * @instance
     */
    RankData.prototype.name = "";

    /**
     * RankData count.
     * @member {number} count
     * @memberof RankData
     * @instance
     */
    RankData.prototype.count = 0;

    /**
     * Creates a new RankData instance using the specified properties.
     * @function create
     * @memberof RankData
     * @static
     * @param {IRankData=} [properties] Properties to set
     * @returns {RankData} RankData instance
     */
    RankData.create = function create(properties) {
        return new RankData(properties);
    };

    /**
     * Encodes the specified RankData message. Does not implicitly {@link RankData.verify|verify} messages.
     * @function encode
     * @memberof RankData
     * @static
     * @param {IRankData} message RankData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RankData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.unitid != null && Object.hasOwnProperty.call(message, "unitid"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.unitid);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.count);
        return writer;
    };

    /**
     * Encodes the specified RankData message, length delimited. Does not implicitly {@link RankData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RankData
     * @static
     * @param {IRankData} message RankData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RankData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RankData message from the specified reader or buffer.
     * @function decode
     * @memberof RankData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RankData} RankData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RankData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RankData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            case 2: {
                    message.unitid = reader.int64();
                    break;
                }
            case 3: {
                    message.name = reader.string();
                    break;
                }
            case 4: {
                    message.count = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RankData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RankData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RankData} RankData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RankData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RankData message.
     * @function verify
     * @memberof RankData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RankData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.unitid != null && message.hasOwnProperty("unitid"))
            if (!$util.isInteger(message.unitid) && !(message.unitid && $util.isInteger(message.unitid.low) && $util.isInteger(message.unitid.high)))
                return "unitid: integer|Long expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        return null;
    };

    /**
     * Creates a RankData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RankData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RankData} RankData
     */
    RankData.fromObject = function fromObject(object) {
        if (object instanceof $root.RankData)
            return object;
        var message = new $root.RankData();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.unitid != null)
            if ($util.Long)
                (message.unitid = $util.Long.fromValue(object.unitid)).unsigned = false;
            else if (typeof object.unitid === "string")
                message.unitid = parseInt(object.unitid, 10);
            else if (typeof object.unitid === "number")
                message.unitid = object.unitid;
            else if (typeof object.unitid === "object")
                message.unitid = new $util.LongBits(object.unitid.low >>> 0, object.unitid.high >>> 0).toNumber();
        if (object.name != null)
            message.name = String(object.name);
        if (object.count != null)
            message.count = object.count | 0;
        return message;
    };

    /**
     * Creates a plain object from a RankData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RankData
     * @static
     * @param {RankData} message RankData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RankData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.unitid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.unitid = options.longs === String ? "0" : 0;
            object.name = "";
            object.count = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.unitid != null && message.hasOwnProperty("unitid"))
            if (typeof message.unitid === "number")
                object.unitid = options.longs === String ? String(message.unitid) : message.unitid;
            else
                object.unitid = options.longs === String ? $util.Long.prototype.toString.call(message.unitid) : options.longs === Number ? new $util.LongBits(message.unitid.low >>> 0, message.unitid.high >>> 0).toNumber() : message.unitid;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
        return object;
    };

    /**
     * Converts this RankData to JSON.
     * @function toJSON
     * @memberof RankData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RankData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RankData
     * @function getTypeUrl
     * @memberof RankData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RankData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RankData";
    };

    return RankData;
})();

$root.C2SEnterDesk = (function() {

    /**
     * Properties of a C2SEnterDesk.
     * @exports IC2SEnterDesk
     * @interface IC2SEnterDesk
     */

    /**
     * Constructs a new C2SEnterDesk.
     * @exports C2SEnterDesk
     * @classdesc Represents a C2SEnterDesk.
     * @implements IC2SEnterDesk
     * @constructor
     * @param {IC2SEnterDesk=} [properties] Properties to set
     */
    function C2SEnterDesk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2SEnterDesk instance using the specified properties.
     * @function create
     * @memberof C2SEnterDesk
     * @static
     * @param {IC2SEnterDesk=} [properties] Properties to set
     * @returns {C2SEnterDesk} C2SEnterDesk instance
     */
    C2SEnterDesk.create = function create(properties) {
        return new C2SEnterDesk(properties);
    };

    /**
     * Encodes the specified C2SEnterDesk message. Does not implicitly {@link C2SEnterDesk.verify|verify} messages.
     * @function encode
     * @memberof C2SEnterDesk
     * @static
     * @param {IC2SEnterDesk} message C2SEnterDesk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SEnterDesk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2SEnterDesk message, length delimited. Does not implicitly {@link C2SEnterDesk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SEnterDesk
     * @static
     * @param {IC2SEnterDesk} message C2SEnterDesk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SEnterDesk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SEnterDesk message from the specified reader or buffer.
     * @function decode
     * @memberof C2SEnterDesk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SEnterDesk} C2SEnterDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SEnterDesk.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SEnterDesk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SEnterDesk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SEnterDesk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SEnterDesk} C2SEnterDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SEnterDesk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SEnterDesk message.
     * @function verify
     * @memberof C2SEnterDesk
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SEnterDesk.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2SEnterDesk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SEnterDesk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SEnterDesk} C2SEnterDesk
     */
    C2SEnterDesk.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SEnterDesk)
            return object;
        return new $root.C2SEnterDesk();
    };

    /**
     * Creates a plain object from a C2SEnterDesk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SEnterDesk
     * @static
     * @param {C2SEnterDesk} message C2SEnterDesk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SEnterDesk.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2SEnterDesk to JSON.
     * @function toJSON
     * @memberof C2SEnterDesk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SEnterDesk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SEnterDesk
     * @function getTypeUrl
     * @memberof C2SEnterDesk
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SEnterDesk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SEnterDesk";
    };

    return C2SEnterDesk;
})();

$root.S2CEnterDesk = (function() {

    /**
     * Properties of a S2CEnterDesk.
     * @exports IS2CEnterDesk
     * @interface IS2CEnterDesk
     */

    /**
     * Constructs a new S2CEnterDesk.
     * @exports S2CEnterDesk
     * @classdesc Represents a S2CEnterDesk.
     * @implements IS2CEnterDesk
     * @constructor
     * @param {IS2CEnterDesk=} [properties] Properties to set
     */
    function S2CEnterDesk(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new S2CEnterDesk instance using the specified properties.
     * @function create
     * @memberof S2CEnterDesk
     * @static
     * @param {IS2CEnterDesk=} [properties] Properties to set
     * @returns {S2CEnterDesk} S2CEnterDesk instance
     */
    S2CEnterDesk.create = function create(properties) {
        return new S2CEnterDesk(properties);
    };

    /**
     * Encodes the specified S2CEnterDesk message. Does not implicitly {@link S2CEnterDesk.verify|verify} messages.
     * @function encode
     * @memberof S2CEnterDesk
     * @static
     * @param {IS2CEnterDesk} message S2CEnterDesk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEnterDesk.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified S2CEnterDesk message, length delimited. Does not implicitly {@link S2CEnterDesk.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CEnterDesk
     * @static
     * @param {IS2CEnterDesk} message S2CEnterDesk message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEnterDesk.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CEnterDesk message from the specified reader or buffer.
     * @function decode
     * @memberof S2CEnterDesk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CEnterDesk} S2CEnterDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEnterDesk.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CEnterDesk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CEnterDesk message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CEnterDesk
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CEnterDesk} S2CEnterDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEnterDesk.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CEnterDesk message.
     * @function verify
     * @memberof S2CEnterDesk
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CEnterDesk.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a S2CEnterDesk message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CEnterDesk
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CEnterDesk} S2CEnterDesk
     */
    S2CEnterDesk.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CEnterDesk)
            return object;
        return new $root.S2CEnterDesk();
    };

    /**
     * Creates a plain object from a S2CEnterDesk message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CEnterDesk
     * @static
     * @param {S2CEnterDesk} message S2CEnterDesk
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CEnterDesk.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this S2CEnterDesk to JSON.
     * @function toJSON
     * @memberof S2CEnterDesk
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CEnterDesk.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CEnterDesk
     * @function getTypeUrl
     * @memberof S2CEnterDesk
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CEnterDesk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CEnterDesk";
    };

    return S2CEnterDesk;
})();

$root.C2SMailList = (function() {

    /**
     * Properties of a C2SMailList.
     * @exports IC2SMailList
     * @interface IC2SMailList
     */

    /**
     * Constructs a new C2SMailList.
     * @exports C2SMailList
     * @classdesc Represents a C2SMailList.
     * @implements IC2SMailList
     * @constructor
     * @param {IC2SMailList=} [properties] Properties to set
     */
    function C2SMailList(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2SMailList instance using the specified properties.
     * @function create
     * @memberof C2SMailList
     * @static
     * @param {IC2SMailList=} [properties] Properties to set
     * @returns {C2SMailList} C2SMailList instance
     */
    C2SMailList.create = function create(properties) {
        return new C2SMailList(properties);
    };

    /**
     * Encodes the specified C2SMailList message. Does not implicitly {@link C2SMailList.verify|verify} messages.
     * @function encode
     * @memberof C2SMailList
     * @static
     * @param {IC2SMailList} message C2SMailList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2SMailList message, length delimited. Does not implicitly {@link C2SMailList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SMailList
     * @static
     * @param {IC2SMailList} message C2SMailList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SMailList message from the specified reader or buffer.
     * @function decode
     * @memberof C2SMailList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SMailList} C2SMailList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailList.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SMailList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SMailList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SMailList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SMailList} C2SMailList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SMailList message.
     * @function verify
     * @memberof C2SMailList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SMailList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2SMailList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SMailList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SMailList} C2SMailList
     */
    C2SMailList.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SMailList)
            return object;
        return new $root.C2SMailList();
    };

    /**
     * Creates a plain object from a C2SMailList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SMailList
     * @static
     * @param {C2SMailList} message C2SMailList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SMailList.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2SMailList to JSON.
     * @function toJSON
     * @memberof C2SMailList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SMailList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SMailList
     * @function getTypeUrl
     * @memberof C2SMailList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SMailList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SMailList";
    };

    return C2SMailList;
})();

$root.S2CMailList = (function() {

    /**
     * Properties of a S2CMailList.
     * @exports IS2CMailList
     * @interface IS2CMailList
     * @property {Object.<string,IMailData>|null} [mailList] S2CMailList mailList
     */

    /**
     * Constructs a new S2CMailList.
     * @exports S2CMailList
     * @classdesc Represents a S2CMailList.
     * @implements IS2CMailList
     * @constructor
     * @param {IS2CMailList=} [properties] Properties to set
     */
    function S2CMailList(properties) {
        this.mailList = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CMailList mailList.
     * @member {Object.<string,IMailData>} mailList
     * @memberof S2CMailList
     * @instance
     */
    S2CMailList.prototype.mailList = $util.emptyObject;

    /**
     * Creates a new S2CMailList instance using the specified properties.
     * @function create
     * @memberof S2CMailList
     * @static
     * @param {IS2CMailList=} [properties] Properties to set
     * @returns {S2CMailList} S2CMailList instance
     */
    S2CMailList.create = function create(properties) {
        return new S2CMailList(properties);
    };

    /**
     * Encodes the specified S2CMailList message. Does not implicitly {@link S2CMailList.verify|verify} messages.
     * @function encode
     * @memberof S2CMailList
     * @static
     * @param {IS2CMailList} message S2CMailList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMailList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mailList != null && Object.hasOwnProperty.call(message, "mailList"))
            for (var keys = Object.keys(message.mailList), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                $root.MailData.encode(message.mailList[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified S2CMailList message, length delimited. Does not implicitly {@link S2CMailList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CMailList
     * @static
     * @param {IS2CMailList} message S2CMailList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMailList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CMailList message from the specified reader or buffer.
     * @function decode
     * @memberof S2CMailList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CMailList} S2CMailList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMailList.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CMailList(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (message.mailList === $util.emptyObject)
                        message.mailList = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int64();
                            break;
                        case 2:
                            value = $root.MailData.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.mailList[typeof key === "object" ? $util.longToHash(key) : key] = value;
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CMailList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CMailList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CMailList} S2CMailList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMailList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CMailList message.
     * @function verify
     * @memberof S2CMailList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CMailList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mailList != null && message.hasOwnProperty("mailList")) {
            if (!$util.isObject(message.mailList))
                return "mailList: object expected";
            var key = Object.keys(message.mailList);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key64Re.test(key[i]))
                    return "mailList: integer|Long key{k:int64} expected";
                {
                    var error = $root.MailData.verify(message.mailList[key[i]]);
                    if (error)
                        return "mailList." + error;
                }
            }
        }
        return null;
    };

    /**
     * Creates a S2CMailList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CMailList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CMailList} S2CMailList
     */
    S2CMailList.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CMailList)
            return object;
        var message = new $root.S2CMailList();
        if (object.mailList) {
            if (typeof object.mailList !== "object")
                throw TypeError(".S2CMailList.mailList: object expected");
            message.mailList = {};
            for (var keys = Object.keys(object.mailList), i = 0; i < keys.length; ++i) {
                if (typeof object.mailList[keys[i]] !== "object")
                    throw TypeError(".S2CMailList.mailList: object expected");
                message.mailList[keys[i]] = $root.MailData.fromObject(object.mailList[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CMailList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CMailList
     * @static
     * @param {S2CMailList} message S2CMailList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CMailList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.mailList = {};
        var keys2;
        if (message.mailList && (keys2 = Object.keys(message.mailList)).length) {
            object.mailList = {};
            for (var j = 0; j < keys2.length; ++j)
                object.mailList[keys2[j]] = $root.MailData.toObject(message.mailList[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this S2CMailList to JSON.
     * @function toJSON
     * @memberof S2CMailList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CMailList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CMailList
     * @function getTypeUrl
     * @memberof S2CMailList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CMailList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CMailList";
    };

    return S2CMailList;
})();

$root.S2CUpdateMail = (function() {

    /**
     * Properties of a S2CUpdateMail.
     * @exports IS2CUpdateMail
     * @interface IS2CUpdateMail
     * @property {Array.<IMailData>|null} [mailList] S2CUpdateMail mailList
     */

    /**
     * Constructs a new S2CUpdateMail.
     * @exports S2CUpdateMail
     * @classdesc Represents a S2CUpdateMail.
     * @implements IS2CUpdateMail
     * @constructor
     * @param {IS2CUpdateMail=} [properties] Properties to set
     */
    function S2CUpdateMail(properties) {
        this.mailList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUpdateMail mailList.
     * @member {Array.<IMailData>} mailList
     * @memberof S2CUpdateMail
     * @instance
     */
    S2CUpdateMail.prototype.mailList = $util.emptyArray;

    /**
     * Creates a new S2CUpdateMail instance using the specified properties.
     * @function create
     * @memberof S2CUpdateMail
     * @static
     * @param {IS2CUpdateMail=} [properties] Properties to set
     * @returns {S2CUpdateMail} S2CUpdateMail instance
     */
    S2CUpdateMail.create = function create(properties) {
        return new S2CUpdateMail(properties);
    };

    /**
     * Encodes the specified S2CUpdateMail message. Does not implicitly {@link S2CUpdateMail.verify|verify} messages.
     * @function encode
     * @memberof S2CUpdateMail
     * @static
     * @param {IS2CUpdateMail} message S2CUpdateMail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUpdateMail.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mailList != null && message.mailList.length)
            for (var i = 0; i < message.mailList.length; ++i)
                $root.MailData.encode(message.mailList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CUpdateMail message, length delimited. Does not implicitly {@link S2CUpdateMail.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUpdateMail
     * @static
     * @param {IS2CUpdateMail} message S2CUpdateMail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUpdateMail.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUpdateMail message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUpdateMail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUpdateMail} S2CUpdateMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUpdateMail.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUpdateMail();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.mailList && message.mailList.length))
                        message.mailList = [];
                    message.mailList.push($root.MailData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUpdateMail message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUpdateMail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUpdateMail} S2CUpdateMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUpdateMail.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUpdateMail message.
     * @function verify
     * @memberof S2CUpdateMail
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUpdateMail.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mailList != null && message.hasOwnProperty("mailList")) {
            if (!Array.isArray(message.mailList))
                return "mailList: array expected";
            for (var i = 0; i < message.mailList.length; ++i) {
                var error = $root.MailData.verify(message.mailList[i]);
                if (error)
                    return "mailList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2CUpdateMail message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUpdateMail
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUpdateMail} S2CUpdateMail
     */
    S2CUpdateMail.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUpdateMail)
            return object;
        var message = new $root.S2CUpdateMail();
        if (object.mailList) {
            if (!Array.isArray(object.mailList))
                throw TypeError(".S2CUpdateMail.mailList: array expected");
            message.mailList = [];
            for (var i = 0; i < object.mailList.length; ++i) {
                if (typeof object.mailList[i] !== "object")
                    throw TypeError(".S2CUpdateMail.mailList: object expected");
                message.mailList[i] = $root.MailData.fromObject(object.mailList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CUpdateMail message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUpdateMail
     * @static
     * @param {S2CUpdateMail} message S2CUpdateMail
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUpdateMail.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.mailList = [];
        if (message.mailList && message.mailList.length) {
            object.mailList = [];
            for (var j = 0; j < message.mailList.length; ++j)
                object.mailList[j] = $root.MailData.toObject(message.mailList[j], options);
        }
        return object;
    };

    /**
     * Converts this S2CUpdateMail to JSON.
     * @function toJSON
     * @memberof S2CUpdateMail
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUpdateMail.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CUpdateMail
     * @function getTypeUrl
     * @memberof S2CUpdateMail
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CUpdateMail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CUpdateMail";
    };

    return S2CUpdateMail;
})();

$root.C2SMailRead = (function() {

    /**
     * Properties of a C2SMailRead.
     * @exports IC2SMailRead
     * @interface IC2SMailRead
     * @property {number|Long|null} [id] C2SMailRead id
     */

    /**
     * Constructs a new C2SMailRead.
     * @exports C2SMailRead
     * @classdesc Represents a C2SMailRead.
     * @implements IC2SMailRead
     * @constructor
     * @param {IC2SMailRead=} [properties] Properties to set
     */
    function C2SMailRead(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SMailRead id.
     * @member {number|Long} id
     * @memberof C2SMailRead
     * @instance
     */
    C2SMailRead.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new C2SMailRead instance using the specified properties.
     * @function create
     * @memberof C2SMailRead
     * @static
     * @param {IC2SMailRead=} [properties] Properties to set
     * @returns {C2SMailRead} C2SMailRead instance
     */
    C2SMailRead.create = function create(properties) {
        return new C2SMailRead(properties);
    };

    /**
     * Encodes the specified C2SMailRead message. Does not implicitly {@link C2SMailRead.verify|verify} messages.
     * @function encode
     * @memberof C2SMailRead
     * @static
     * @param {IC2SMailRead} message C2SMailRead message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailRead.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        return writer;
    };

    /**
     * Encodes the specified C2SMailRead message, length delimited. Does not implicitly {@link C2SMailRead.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SMailRead
     * @static
     * @param {IC2SMailRead} message C2SMailRead message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailRead.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SMailRead message from the specified reader or buffer.
     * @function decode
     * @memberof C2SMailRead
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SMailRead} C2SMailRead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailRead.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SMailRead();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SMailRead message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SMailRead
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SMailRead} C2SMailRead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailRead.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SMailRead message.
     * @function verify
     * @memberof C2SMailRead
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SMailRead.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        return null;
    };

    /**
     * Creates a C2SMailRead message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SMailRead
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SMailRead} C2SMailRead
     */
    C2SMailRead.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SMailRead)
            return object;
        var message = new $root.C2SMailRead();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a C2SMailRead message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SMailRead
     * @static
     * @param {C2SMailRead} message C2SMailRead
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SMailRead.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        return object;
    };

    /**
     * Converts this C2SMailRead to JSON.
     * @function toJSON
     * @memberof C2SMailRead
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SMailRead.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SMailRead
     * @function getTypeUrl
     * @memberof C2SMailRead
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SMailRead.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SMailRead";
    };

    return C2SMailRead;
})();

$root.C2SMailLock = (function() {

    /**
     * Properties of a C2SMailLock.
     * @exports IC2SMailLock
     * @interface IC2SMailLock
     * @property {number|Long|null} [id] C2SMailLock id
     */

    /**
     * Constructs a new C2SMailLock.
     * @exports C2SMailLock
     * @classdesc Represents a C2SMailLock.
     * @implements IC2SMailLock
     * @constructor
     * @param {IC2SMailLock=} [properties] Properties to set
     */
    function C2SMailLock(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SMailLock id.
     * @member {number|Long} id
     * @memberof C2SMailLock
     * @instance
     */
    C2SMailLock.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new C2SMailLock instance using the specified properties.
     * @function create
     * @memberof C2SMailLock
     * @static
     * @param {IC2SMailLock=} [properties] Properties to set
     * @returns {C2SMailLock} C2SMailLock instance
     */
    C2SMailLock.create = function create(properties) {
        return new C2SMailLock(properties);
    };

    /**
     * Encodes the specified C2SMailLock message. Does not implicitly {@link C2SMailLock.verify|verify} messages.
     * @function encode
     * @memberof C2SMailLock
     * @static
     * @param {IC2SMailLock} message C2SMailLock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailLock.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        return writer;
    };

    /**
     * Encodes the specified C2SMailLock message, length delimited. Does not implicitly {@link C2SMailLock.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SMailLock
     * @static
     * @param {IC2SMailLock} message C2SMailLock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailLock.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SMailLock message from the specified reader or buffer.
     * @function decode
     * @memberof C2SMailLock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SMailLock} C2SMailLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailLock.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SMailLock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SMailLock message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SMailLock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SMailLock} C2SMailLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailLock.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SMailLock message.
     * @function verify
     * @memberof C2SMailLock
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SMailLock.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        return null;
    };

    /**
     * Creates a C2SMailLock message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SMailLock
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SMailLock} C2SMailLock
     */
    C2SMailLock.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SMailLock)
            return object;
        var message = new $root.C2SMailLock();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a C2SMailLock message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SMailLock
     * @static
     * @param {C2SMailLock} message C2SMailLock
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SMailLock.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        return object;
    };

    /**
     * Converts this C2SMailLock to JSON.
     * @function toJSON
     * @memberof C2SMailLock
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SMailLock.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SMailLock
     * @function getTypeUrl
     * @memberof C2SMailLock
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SMailLock.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SMailLock";
    };

    return C2SMailLock;
})();

$root.C2SMailReward = (function() {

    /**
     * Properties of a C2SMailReward.
     * @exports IC2SMailReward
     * @interface IC2SMailReward
     * @property {Array.<number|Long>|null} [mailIdList] C2SMailReward mailIdList
     */

    /**
     * Constructs a new C2SMailReward.
     * @exports C2SMailReward
     * @classdesc Represents a C2SMailReward.
     * @implements IC2SMailReward
     * @constructor
     * @param {IC2SMailReward=} [properties] Properties to set
     */
    function C2SMailReward(properties) {
        this.mailIdList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SMailReward mailIdList.
     * @member {Array.<number|Long>} mailIdList
     * @memberof C2SMailReward
     * @instance
     */
    C2SMailReward.prototype.mailIdList = $util.emptyArray;

    /**
     * Creates a new C2SMailReward instance using the specified properties.
     * @function create
     * @memberof C2SMailReward
     * @static
     * @param {IC2SMailReward=} [properties] Properties to set
     * @returns {C2SMailReward} C2SMailReward instance
     */
    C2SMailReward.create = function create(properties) {
        return new C2SMailReward(properties);
    };

    /**
     * Encodes the specified C2SMailReward message. Does not implicitly {@link C2SMailReward.verify|verify} messages.
     * @function encode
     * @memberof C2SMailReward
     * @static
     * @param {IC2SMailReward} message C2SMailReward message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailReward.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mailIdList != null && message.mailIdList.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.mailIdList.length; ++i)
                writer.int64(message.mailIdList[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified C2SMailReward message, length delimited. Does not implicitly {@link C2SMailReward.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SMailReward
     * @static
     * @param {IC2SMailReward} message C2SMailReward message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailReward.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SMailReward message from the specified reader or buffer.
     * @function decode
     * @memberof C2SMailReward
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SMailReward} C2SMailReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailReward.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SMailReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.mailIdList && message.mailIdList.length))
                        message.mailIdList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mailIdList.push(reader.int64());
                    } else
                        message.mailIdList.push(reader.int64());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SMailReward message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SMailReward
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SMailReward} C2SMailReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailReward.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SMailReward message.
     * @function verify
     * @memberof C2SMailReward
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SMailReward.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mailIdList != null && message.hasOwnProperty("mailIdList")) {
            if (!Array.isArray(message.mailIdList))
                return "mailIdList: array expected";
            for (var i = 0; i < message.mailIdList.length; ++i)
                if (!$util.isInteger(message.mailIdList[i]) && !(message.mailIdList[i] && $util.isInteger(message.mailIdList[i].low) && $util.isInteger(message.mailIdList[i].high)))
                    return "mailIdList: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a C2SMailReward message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SMailReward
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SMailReward} C2SMailReward
     */
    C2SMailReward.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SMailReward)
            return object;
        var message = new $root.C2SMailReward();
        if (object.mailIdList) {
            if (!Array.isArray(object.mailIdList))
                throw TypeError(".C2SMailReward.mailIdList: array expected");
            message.mailIdList = [];
            for (var i = 0; i < object.mailIdList.length; ++i)
                if ($util.Long)
                    (message.mailIdList[i] = $util.Long.fromValue(object.mailIdList[i])).unsigned = false;
                else if (typeof object.mailIdList[i] === "string")
                    message.mailIdList[i] = parseInt(object.mailIdList[i], 10);
                else if (typeof object.mailIdList[i] === "number")
                    message.mailIdList[i] = object.mailIdList[i];
                else if (typeof object.mailIdList[i] === "object")
                    message.mailIdList[i] = new $util.LongBits(object.mailIdList[i].low >>> 0, object.mailIdList[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a C2SMailReward message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SMailReward
     * @static
     * @param {C2SMailReward} message C2SMailReward
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SMailReward.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.mailIdList = [];
        if (message.mailIdList && message.mailIdList.length) {
            object.mailIdList = [];
            for (var j = 0; j < message.mailIdList.length; ++j)
                if (typeof message.mailIdList[j] === "number")
                    object.mailIdList[j] = options.longs === String ? String(message.mailIdList[j]) : message.mailIdList[j];
                else
                    object.mailIdList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.mailIdList[j]) : options.longs === Number ? new $util.LongBits(message.mailIdList[j].low >>> 0, message.mailIdList[j].high >>> 0).toNumber() : message.mailIdList[j];
        }
        return object;
    };

    /**
     * Converts this C2SMailReward to JSON.
     * @function toJSON
     * @memberof C2SMailReward
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SMailReward.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SMailReward
     * @function getTypeUrl
     * @memberof C2SMailReward
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SMailReward.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SMailReward";
    };

    return C2SMailReward;
})();

$root.C2SMailMark = (function() {

    /**
     * Properties of a C2SMailMark.
     * @exports IC2SMailMark
     * @interface IC2SMailMark
     * @property {number|Long|null} [id] C2SMailMark id
     */

    /**
     * Constructs a new C2SMailMark.
     * @exports C2SMailMark
     * @classdesc Represents a C2SMailMark.
     * @implements IC2SMailMark
     * @constructor
     * @param {IC2SMailMark=} [properties] Properties to set
     */
    function C2SMailMark(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SMailMark id.
     * @member {number|Long} id
     * @memberof C2SMailMark
     * @instance
     */
    C2SMailMark.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new C2SMailMark instance using the specified properties.
     * @function create
     * @memberof C2SMailMark
     * @static
     * @param {IC2SMailMark=} [properties] Properties to set
     * @returns {C2SMailMark} C2SMailMark instance
     */
    C2SMailMark.create = function create(properties) {
        return new C2SMailMark(properties);
    };

    /**
     * Encodes the specified C2SMailMark message. Does not implicitly {@link C2SMailMark.verify|verify} messages.
     * @function encode
     * @memberof C2SMailMark
     * @static
     * @param {IC2SMailMark} message C2SMailMark message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailMark.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        return writer;
    };

    /**
     * Encodes the specified C2SMailMark message, length delimited. Does not implicitly {@link C2SMailMark.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SMailMark
     * @static
     * @param {IC2SMailMark} message C2SMailMark message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailMark.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SMailMark message from the specified reader or buffer.
     * @function decode
     * @memberof C2SMailMark
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SMailMark} C2SMailMark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailMark.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SMailMark();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SMailMark message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SMailMark
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SMailMark} C2SMailMark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailMark.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SMailMark message.
     * @function verify
     * @memberof C2SMailMark
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SMailMark.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        return null;
    };

    /**
     * Creates a C2SMailMark message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SMailMark
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SMailMark} C2SMailMark
     */
    C2SMailMark.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SMailMark)
            return object;
        var message = new $root.C2SMailMark();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a C2SMailMark message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SMailMark
     * @static
     * @param {C2SMailMark} message C2SMailMark
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SMailMark.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        return object;
    };

    /**
     * Converts this C2SMailMark to JSON.
     * @function toJSON
     * @memberof C2SMailMark
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SMailMark.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SMailMark
     * @function getTypeUrl
     * @memberof C2SMailMark
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SMailMark.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SMailMark";
    };

    return C2SMailMark;
})();

$root.C2SMailDel = (function() {

    /**
     * Properties of a C2SMailDel.
     * @exports IC2SMailDel
     * @interface IC2SMailDel
     * @property {Array.<number|Long>|null} [mailIdList] C2SMailDel mailIdList
     */

    /**
     * Constructs a new C2SMailDel.
     * @exports C2SMailDel
     * @classdesc Represents a C2SMailDel.
     * @implements IC2SMailDel
     * @constructor
     * @param {IC2SMailDel=} [properties] Properties to set
     */
    function C2SMailDel(properties) {
        this.mailIdList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SMailDel mailIdList.
     * @member {Array.<number|Long>} mailIdList
     * @memberof C2SMailDel
     * @instance
     */
    C2SMailDel.prototype.mailIdList = $util.emptyArray;

    /**
     * Creates a new C2SMailDel instance using the specified properties.
     * @function create
     * @memberof C2SMailDel
     * @static
     * @param {IC2SMailDel=} [properties] Properties to set
     * @returns {C2SMailDel} C2SMailDel instance
     */
    C2SMailDel.create = function create(properties) {
        return new C2SMailDel(properties);
    };

    /**
     * Encodes the specified C2SMailDel message. Does not implicitly {@link C2SMailDel.verify|verify} messages.
     * @function encode
     * @memberof C2SMailDel
     * @static
     * @param {IC2SMailDel} message C2SMailDel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailDel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mailIdList != null && message.mailIdList.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.mailIdList.length; ++i)
                writer.int64(message.mailIdList[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified C2SMailDel message, length delimited. Does not implicitly {@link C2SMailDel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SMailDel
     * @static
     * @param {IC2SMailDel} message C2SMailDel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMailDel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SMailDel message from the specified reader or buffer.
     * @function decode
     * @memberof C2SMailDel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SMailDel} C2SMailDel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailDel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SMailDel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.mailIdList && message.mailIdList.length))
                        message.mailIdList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mailIdList.push(reader.int64());
                    } else
                        message.mailIdList.push(reader.int64());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SMailDel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SMailDel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SMailDel} C2SMailDel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMailDel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SMailDel message.
     * @function verify
     * @memberof C2SMailDel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SMailDel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mailIdList != null && message.hasOwnProperty("mailIdList")) {
            if (!Array.isArray(message.mailIdList))
                return "mailIdList: array expected";
            for (var i = 0; i < message.mailIdList.length; ++i)
                if (!$util.isInteger(message.mailIdList[i]) && !(message.mailIdList[i] && $util.isInteger(message.mailIdList[i].low) && $util.isInteger(message.mailIdList[i].high)))
                    return "mailIdList: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a C2SMailDel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SMailDel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SMailDel} C2SMailDel
     */
    C2SMailDel.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SMailDel)
            return object;
        var message = new $root.C2SMailDel();
        if (object.mailIdList) {
            if (!Array.isArray(object.mailIdList))
                throw TypeError(".C2SMailDel.mailIdList: array expected");
            message.mailIdList = [];
            for (var i = 0; i < object.mailIdList.length; ++i)
                if ($util.Long)
                    (message.mailIdList[i] = $util.Long.fromValue(object.mailIdList[i])).unsigned = false;
                else if (typeof object.mailIdList[i] === "string")
                    message.mailIdList[i] = parseInt(object.mailIdList[i], 10);
                else if (typeof object.mailIdList[i] === "number")
                    message.mailIdList[i] = object.mailIdList[i];
                else if (typeof object.mailIdList[i] === "object")
                    message.mailIdList[i] = new $util.LongBits(object.mailIdList[i].low >>> 0, object.mailIdList[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a C2SMailDel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SMailDel
     * @static
     * @param {C2SMailDel} message C2SMailDel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SMailDel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.mailIdList = [];
        if (message.mailIdList && message.mailIdList.length) {
            object.mailIdList = [];
            for (var j = 0; j < message.mailIdList.length; ++j)
                if (typeof message.mailIdList[j] === "number")
                    object.mailIdList[j] = options.longs === String ? String(message.mailIdList[j]) : message.mailIdList[j];
                else
                    object.mailIdList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.mailIdList[j]) : options.longs === Number ? new $util.LongBits(message.mailIdList[j].low >>> 0, message.mailIdList[j].high >>> 0).toNumber() : message.mailIdList[j];
        }
        return object;
    };

    /**
     * Converts this C2SMailDel to JSON.
     * @function toJSON
     * @memberof C2SMailDel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SMailDel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SMailDel
     * @function getTypeUrl
     * @memberof C2SMailDel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SMailDel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SMailDel";
    };

    return C2SMailDel;
})();

$root.S2CMailDel = (function() {

    /**
     * Properties of a S2CMailDel.
     * @exports IS2CMailDel
     * @interface IS2CMailDel
     * @property {Array.<number|Long>|null} [mailIdList] S2CMailDel mailIdList
     */

    /**
     * Constructs a new S2CMailDel.
     * @exports S2CMailDel
     * @classdesc Represents a S2CMailDel.
     * @implements IS2CMailDel
     * @constructor
     * @param {IS2CMailDel=} [properties] Properties to set
     */
    function S2CMailDel(properties) {
        this.mailIdList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CMailDel mailIdList.
     * @member {Array.<number|Long>} mailIdList
     * @memberof S2CMailDel
     * @instance
     */
    S2CMailDel.prototype.mailIdList = $util.emptyArray;

    /**
     * Creates a new S2CMailDel instance using the specified properties.
     * @function create
     * @memberof S2CMailDel
     * @static
     * @param {IS2CMailDel=} [properties] Properties to set
     * @returns {S2CMailDel} S2CMailDel instance
     */
    S2CMailDel.create = function create(properties) {
        return new S2CMailDel(properties);
    };

    /**
     * Encodes the specified S2CMailDel message. Does not implicitly {@link S2CMailDel.verify|verify} messages.
     * @function encode
     * @memberof S2CMailDel
     * @static
     * @param {IS2CMailDel} message S2CMailDel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMailDel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mailIdList != null && message.mailIdList.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.mailIdList.length; ++i)
                writer.int64(message.mailIdList[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified S2CMailDel message, length delimited. Does not implicitly {@link S2CMailDel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CMailDel
     * @static
     * @param {IS2CMailDel} message S2CMailDel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMailDel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CMailDel message from the specified reader or buffer.
     * @function decode
     * @memberof S2CMailDel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CMailDel} S2CMailDel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMailDel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CMailDel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.mailIdList && message.mailIdList.length))
                        message.mailIdList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mailIdList.push(reader.int64());
                    } else
                        message.mailIdList.push(reader.int64());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CMailDel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CMailDel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CMailDel} S2CMailDel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMailDel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CMailDel message.
     * @function verify
     * @memberof S2CMailDel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CMailDel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mailIdList != null && message.hasOwnProperty("mailIdList")) {
            if (!Array.isArray(message.mailIdList))
                return "mailIdList: array expected";
            for (var i = 0; i < message.mailIdList.length; ++i)
                if (!$util.isInteger(message.mailIdList[i]) && !(message.mailIdList[i] && $util.isInteger(message.mailIdList[i].low) && $util.isInteger(message.mailIdList[i].high)))
                    return "mailIdList: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a S2CMailDel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CMailDel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CMailDel} S2CMailDel
     */
    S2CMailDel.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CMailDel)
            return object;
        var message = new $root.S2CMailDel();
        if (object.mailIdList) {
            if (!Array.isArray(object.mailIdList))
                throw TypeError(".S2CMailDel.mailIdList: array expected");
            message.mailIdList = [];
            for (var i = 0; i < object.mailIdList.length; ++i)
                if ($util.Long)
                    (message.mailIdList[i] = $util.Long.fromValue(object.mailIdList[i])).unsigned = false;
                else if (typeof object.mailIdList[i] === "string")
                    message.mailIdList[i] = parseInt(object.mailIdList[i], 10);
                else if (typeof object.mailIdList[i] === "number")
                    message.mailIdList[i] = object.mailIdList[i];
                else if (typeof object.mailIdList[i] === "object")
                    message.mailIdList[i] = new $util.LongBits(object.mailIdList[i].low >>> 0, object.mailIdList[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CMailDel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CMailDel
     * @static
     * @param {S2CMailDel} message S2CMailDel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CMailDel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.mailIdList = [];
        if (message.mailIdList && message.mailIdList.length) {
            object.mailIdList = [];
            for (var j = 0; j < message.mailIdList.length; ++j)
                if (typeof message.mailIdList[j] === "number")
                    object.mailIdList[j] = options.longs === String ? String(message.mailIdList[j]) : message.mailIdList[j];
                else
                    object.mailIdList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.mailIdList[j]) : options.longs === Number ? new $util.LongBits(message.mailIdList[j].low >>> 0, message.mailIdList[j].high >>> 0).toNumber() : message.mailIdList[j];
        }
        return object;
    };

    /**
     * Converts this S2CMailDel to JSON.
     * @function toJSON
     * @memberof S2CMailDel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CMailDel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CMailDel
     * @function getTypeUrl
     * @memberof S2CMailDel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CMailDel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CMailDel";
    };

    return S2CMailDel;
})();

$root.C2SEnterRoom = (function() {

    /**
     * Properties of a C2SEnterRoom.
     * @exports IC2SEnterRoom
     * @interface IC2SEnterRoom
     * @property {string|null} [name] C2SEnterRoom name
     */

    /**
     * Constructs a new C2SEnterRoom.
     * @exports C2SEnterRoom
     * @classdesc Represents a C2SEnterRoom.
     * @implements IC2SEnterRoom
     * @constructor
     * @param {IC2SEnterRoom=} [properties] Properties to set
     */
    function C2SEnterRoom(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SEnterRoom name.
     * @member {string} name
     * @memberof C2SEnterRoom
     * @instance
     */
    C2SEnterRoom.prototype.name = "";

    /**
     * Creates a new C2SEnterRoom instance using the specified properties.
     * @function create
     * @memberof C2SEnterRoom
     * @static
     * @param {IC2SEnterRoom=} [properties] Properties to set
     * @returns {C2SEnterRoom} C2SEnterRoom instance
     */
    C2SEnterRoom.create = function create(properties) {
        return new C2SEnterRoom(properties);
    };

    /**
     * Encodes the specified C2SEnterRoom message. Does not implicitly {@link C2SEnterRoom.verify|verify} messages.
     * @function encode
     * @memberof C2SEnterRoom
     * @static
     * @param {IC2SEnterRoom} message C2SEnterRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SEnterRoom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified C2SEnterRoom message, length delimited. Does not implicitly {@link C2SEnterRoom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SEnterRoom
     * @static
     * @param {IC2SEnterRoom} message C2SEnterRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SEnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SEnterRoom message from the specified reader or buffer.
     * @function decode
     * @memberof C2SEnterRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SEnterRoom} C2SEnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SEnterRoom.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SEnterRoom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SEnterRoom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SEnterRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SEnterRoom} C2SEnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SEnterRoom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SEnterRoom message.
     * @function verify
     * @memberof C2SEnterRoom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SEnterRoom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a C2SEnterRoom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SEnterRoom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SEnterRoom} C2SEnterRoom
     */
    C2SEnterRoom.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SEnterRoom)
            return object;
        var message = new $root.C2SEnterRoom();
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a C2SEnterRoom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SEnterRoom
     * @static
     * @param {C2SEnterRoom} message C2SEnterRoom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SEnterRoom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this C2SEnterRoom to JSON.
     * @function toJSON
     * @memberof C2SEnterRoom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SEnterRoom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SEnterRoom
     * @function getTypeUrl
     * @memberof C2SEnterRoom
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SEnterRoom.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SEnterRoom";
    };

    return C2SEnterRoom;
})();

$root.S2CEnterRoom = (function() {

    /**
     * Properties of a S2CEnterRoom.
     * @exports IS2CEnterRoom
     * @interface IS2CEnterRoom
     * @property {number|Long|null} [id] S2CEnterRoom id
     * @property {number|Long|null} [time] S2CEnterRoom time
     */

    /**
     * Constructs a new S2CEnterRoom.
     * @exports S2CEnterRoom
     * @classdesc Represents a S2CEnterRoom.
     * @implements IS2CEnterRoom
     * @constructor
     * @param {IS2CEnterRoom=} [properties] Properties to set
     */
    function S2CEnterRoom(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CEnterRoom id.
     * @member {number|Long} id
     * @memberof S2CEnterRoom
     * @instance
     */
    S2CEnterRoom.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CEnterRoom time.
     * @member {number|Long} time
     * @memberof S2CEnterRoom
     * @instance
     */
    S2CEnterRoom.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CEnterRoom instance using the specified properties.
     * @function create
     * @memberof S2CEnterRoom
     * @static
     * @param {IS2CEnterRoom=} [properties] Properties to set
     * @returns {S2CEnterRoom} S2CEnterRoom instance
     */
    S2CEnterRoom.create = function create(properties) {
        return new S2CEnterRoom(properties);
    };

    /**
     * Encodes the specified S2CEnterRoom message. Does not implicitly {@link S2CEnterRoom.verify|verify} messages.
     * @function encode
     * @memberof S2CEnterRoom
     * @static
     * @param {IS2CEnterRoom} message S2CEnterRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEnterRoom.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
        return writer;
    };

    /**
     * Encodes the specified S2CEnterRoom message, length delimited. Does not implicitly {@link S2CEnterRoom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CEnterRoom
     * @static
     * @param {IS2CEnterRoom} message S2CEnterRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CEnterRoom message from the specified reader or buffer.
     * @function decode
     * @memberof S2CEnterRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CEnterRoom} S2CEnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEnterRoom.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CEnterRoom();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            case 2: {
                    message.time = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CEnterRoom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CEnterRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CEnterRoom} S2CEnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEnterRoom.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CEnterRoom message.
     * @function verify
     * @memberof S2CEnterRoom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CEnterRoom.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CEnterRoom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CEnterRoom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CEnterRoom} S2CEnterRoom
     */
    S2CEnterRoom.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CEnterRoom)
            return object;
        var message = new $root.S2CEnterRoom();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = false;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CEnterRoom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CEnterRoom
     * @static
     * @param {S2CEnterRoom} message S2CEnterRoom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CEnterRoom.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
        return object;
    };

    /**
     * Converts this S2CEnterRoom to JSON.
     * @function toJSON
     * @memberof S2CEnterRoom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CEnterRoom.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CEnterRoom
     * @function getTypeUrl
     * @memberof S2CEnterRoom
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CEnterRoom.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CEnterRoom";
    };

    return S2CEnterRoom;
})();

$root.C2SMove = (function() {

    /**
     * Properties of a C2SMove.
     * @exports IC2SMove
     * @interface IC2SMove
     * @property {number|null} [x] C2SMove x
     * @property {number|null} [y] C2SMove y
     */

    /**
     * Constructs a new C2SMove.
     * @exports C2SMove
     * @classdesc Represents a C2SMove.
     * @implements IC2SMove
     * @constructor
     * @param {IC2SMove=} [properties] Properties to set
     */
    function C2SMove(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SMove x.
     * @member {number} x
     * @memberof C2SMove
     * @instance
     */
    C2SMove.prototype.x = 0;

    /**
     * C2SMove y.
     * @member {number} y
     * @memberof C2SMove
     * @instance
     */
    C2SMove.prototype.y = 0;

    /**
     * Creates a new C2SMove instance using the specified properties.
     * @function create
     * @memberof C2SMove
     * @static
     * @param {IC2SMove=} [properties] Properties to set
     * @returns {C2SMove} C2SMove instance
     */
    C2SMove.create = function create(properties) {
        return new C2SMove(properties);
    };

    /**
     * Encodes the specified C2SMove message. Does not implicitly {@link C2SMove.verify|verify} messages.
     * @function encode
     * @memberof C2SMove
     * @static
     * @param {IC2SMove} message C2SMove message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMove.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
        return writer;
    };

    /**
     * Encodes the specified C2SMove message, length delimited. Does not implicitly {@link C2SMove.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SMove
     * @static
     * @param {IC2SMove} message C2SMove message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SMove.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SMove message from the specified reader or buffer.
     * @function decode
     * @memberof C2SMove
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SMove} C2SMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMove.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SMove();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.x = reader.float();
                    break;
                }
            case 2: {
                    message.y = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SMove message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SMove
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SMove} C2SMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SMove.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SMove message.
     * @function verify
     * @memberof C2SMove
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SMove.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        return null;
    };

    /**
     * Creates a C2SMove message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SMove
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SMove} C2SMove
     */
    C2SMove.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SMove)
            return object;
        var message = new $root.C2SMove();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        return message;
    };

    /**
     * Creates a plain object from a C2SMove message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SMove
     * @static
     * @param {C2SMove} message C2SMove
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SMove.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        return object;
    };

    /**
     * Converts this C2SMove to JSON.
     * @function toJSON
     * @memberof C2SMove
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SMove.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SMove
     * @function getTypeUrl
     * @memberof C2SMove
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SMove.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SMove";
    };

    return C2SMove;
})();

$root.S2CMove = (function() {

    /**
     * Properties of a S2CMove.
     * @exports IS2CMove
     * @interface IS2CMove
     * @property {number|Long|null} [id] S2CMove id
     * @property {number|null} [x] S2CMove x
     * @property {number|null} [y] S2CMove y
     * @property {number|null} [dirx] S2CMove dirx
     * @property {number|null} [diry] S2CMove diry
     * @property {number|Long|null} [movetime] S2CMove movetime
     */

    /**
     * Constructs a new S2CMove.
     * @exports S2CMove
     * @classdesc Represents a S2CMove.
     * @implements IS2CMove
     * @constructor
     * @param {IS2CMove=} [properties] Properties to set
     */
    function S2CMove(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CMove id.
     * @member {number|Long} id
     * @memberof S2CMove
     * @instance
     */
    S2CMove.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CMove x.
     * @member {number} x
     * @memberof S2CMove
     * @instance
     */
    S2CMove.prototype.x = 0;

    /**
     * S2CMove y.
     * @member {number} y
     * @memberof S2CMove
     * @instance
     */
    S2CMove.prototype.y = 0;

    /**
     * S2CMove dirx.
     * @member {number} dirx
     * @memberof S2CMove
     * @instance
     */
    S2CMove.prototype.dirx = 0;

    /**
     * S2CMove diry.
     * @member {number} diry
     * @memberof S2CMove
     * @instance
     */
    S2CMove.prototype.diry = 0;

    /**
     * S2CMove movetime.
     * @member {number|Long} movetime
     * @memberof S2CMove
     * @instance
     */
    S2CMove.prototype.movetime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CMove instance using the specified properties.
     * @function create
     * @memberof S2CMove
     * @static
     * @param {IS2CMove=} [properties] Properties to set
     * @returns {S2CMove} S2CMove instance
     */
    S2CMove.create = function create(properties) {
        return new S2CMove(properties);
    };

    /**
     * Encodes the specified S2CMove message. Does not implicitly {@link S2CMove.verify|verify} messages.
     * @function encode
     * @memberof S2CMove
     * @static
     * @param {IS2CMove} message S2CMove message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMove.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.y);
        if (message.dirx != null && Object.hasOwnProperty.call(message, "dirx"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.dirx);
        if (message.diry != null && Object.hasOwnProperty.call(message, "diry"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.diry);
        if (message.movetime != null && Object.hasOwnProperty.call(message, "movetime"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.movetime);
        return writer;
    };

    /**
     * Encodes the specified S2CMove message, length delimited. Does not implicitly {@link S2CMove.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CMove
     * @static
     * @param {IS2CMove} message S2CMove message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CMove.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CMove message from the specified reader or buffer.
     * @function decode
     * @memberof S2CMove
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CMove} S2CMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMove.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CMove();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            case 2: {
                    message.x = reader.float();
                    break;
                }
            case 3: {
                    message.y = reader.float();
                    break;
                }
            case 4: {
                    message.dirx = reader.float();
                    break;
                }
            case 5: {
                    message.diry = reader.float();
                    break;
                }
            case 6: {
                    message.movetime = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CMove message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CMove
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CMove} S2CMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CMove.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CMove message.
     * @function verify
     * @memberof S2CMove
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CMove.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        if (message.dirx != null && message.hasOwnProperty("dirx"))
            if (typeof message.dirx !== "number")
                return "dirx: number expected";
        if (message.diry != null && message.hasOwnProperty("diry"))
            if (typeof message.diry !== "number")
                return "diry: number expected";
        if (message.movetime != null && message.hasOwnProperty("movetime"))
            if (!$util.isInteger(message.movetime) && !(message.movetime && $util.isInteger(message.movetime.low) && $util.isInteger(message.movetime.high)))
                return "movetime: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CMove message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CMove
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CMove} S2CMove
     */
    S2CMove.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CMove)
            return object;
        var message = new $root.S2CMove();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        if (object.dirx != null)
            message.dirx = Number(object.dirx);
        if (object.diry != null)
            message.diry = Number(object.diry);
        if (object.movetime != null)
            if ($util.Long)
                (message.movetime = $util.Long.fromValue(object.movetime)).unsigned = false;
            else if (typeof object.movetime === "string")
                message.movetime = parseInt(object.movetime, 10);
            else if (typeof object.movetime === "number")
                message.movetime = object.movetime;
            else if (typeof object.movetime === "object")
                message.movetime = new $util.LongBits(object.movetime.low >>> 0, object.movetime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CMove message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CMove
     * @static
     * @param {S2CMove} message S2CMove
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CMove.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.x = 0;
            object.y = 0;
            object.dirx = 0;
            object.diry = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.movetime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.movetime = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        if (message.dirx != null && message.hasOwnProperty("dirx"))
            object.dirx = options.json && !isFinite(message.dirx) ? String(message.dirx) : message.dirx;
        if (message.diry != null && message.hasOwnProperty("diry"))
            object.diry = options.json && !isFinite(message.diry) ? String(message.diry) : message.diry;
        if (message.movetime != null && message.hasOwnProperty("movetime"))
            if (typeof message.movetime === "number")
                object.movetime = options.longs === String ? String(message.movetime) : message.movetime;
            else
                object.movetime = options.longs === String ? $util.Long.prototype.toString.call(message.movetime) : options.longs === Number ? new $util.LongBits(message.movetime.low >>> 0, message.movetime.high >>> 0).toNumber() : message.movetime;
        return object;
    };

    /**
     * Converts this S2CMove to JSON.
     * @function toJSON
     * @memberof S2CMove
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CMove.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CMove
     * @function getTypeUrl
     * @memberof S2CMove
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CMove.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CMove";
    };

    return S2CMove;
})();

$root.S2CEnterView = (function() {

    /**
     * Properties of a S2CEnterView.
     * @exports IS2CEnterView
     * @interface IS2CEnterView
     * @property {number|Long|null} [id] S2CEnterView id
     * @property {number|null} [x] S2CEnterView x
     * @property {number|null} [y] S2CEnterView y
     * @property {number|null} [radius] S2CEnterView radius
     * @property {number|Long|null} [spriteid] S2CEnterView spriteid
     * @property {number|null} [speed] S2CEnterView speed
     * @property {IVector2|null} [dir] S2CEnterView dir
     * @property {string|null} [name] S2CEnterView name
     * @property {number|Long|null} [movetime] S2CEnterView movetime
     */

    /**
     * Constructs a new S2CEnterView.
     * @exports S2CEnterView
     * @classdesc Represents a S2CEnterView.
     * @implements IS2CEnterView
     * @constructor
     * @param {IS2CEnterView=} [properties] Properties to set
     */
    function S2CEnterView(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CEnterView id.
     * @member {number|Long} id
     * @memberof S2CEnterView
     * @instance
     */
    S2CEnterView.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CEnterView x.
     * @member {number} x
     * @memberof S2CEnterView
     * @instance
     */
    S2CEnterView.prototype.x = 0;

    /**
     * S2CEnterView y.
     * @member {number} y
     * @memberof S2CEnterView
     * @instance
     */
    S2CEnterView.prototype.y = 0;

    /**
     * S2CEnterView radius.
     * @member {number} radius
     * @memberof S2CEnterView
     * @instance
     */
    S2CEnterView.prototype.radius = 0;

    /**
     * S2CEnterView spriteid.
     * @member {number|Long} spriteid
     * @memberof S2CEnterView
     * @instance
     */
    S2CEnterView.prototype.spriteid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CEnterView speed.
     * @member {number} speed
     * @memberof S2CEnterView
     * @instance
     */
    S2CEnterView.prototype.speed = 0;

    /**
     * S2CEnterView dir.
     * @member {IVector2|null|undefined} dir
     * @memberof S2CEnterView
     * @instance
     */
    S2CEnterView.prototype.dir = null;

    /**
     * S2CEnterView name.
     * @member {string} name
     * @memberof S2CEnterView
     * @instance
     */
    S2CEnterView.prototype.name = "";

    /**
     * S2CEnterView movetime.
     * @member {number|Long} movetime
     * @memberof S2CEnterView
     * @instance
     */
    S2CEnterView.prototype.movetime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CEnterView instance using the specified properties.
     * @function create
     * @memberof S2CEnterView
     * @static
     * @param {IS2CEnterView=} [properties] Properties to set
     * @returns {S2CEnterView} S2CEnterView instance
     */
    S2CEnterView.create = function create(properties) {
        return new S2CEnterView(properties);
    };

    /**
     * Encodes the specified S2CEnterView message. Does not implicitly {@link S2CEnterView.verify|verify} messages.
     * @function encode
     * @memberof S2CEnterView
     * @static
     * @param {IS2CEnterView} message S2CEnterView message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEnterView.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.y);
        if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.radius);
        if (message.spriteid != null && Object.hasOwnProperty.call(message, "spriteid"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.spriteid);
        if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.speed);
        if (message.dir != null && Object.hasOwnProperty.call(message, "dir"))
            $root.Vector2.encode(message.dir, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.name);
        if (message.movetime != null && Object.hasOwnProperty.call(message, "movetime"))
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.movetime);
        return writer;
    };

    /**
     * Encodes the specified S2CEnterView message, length delimited. Does not implicitly {@link S2CEnterView.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CEnterView
     * @static
     * @param {IS2CEnterView} message S2CEnterView message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEnterView.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CEnterView message from the specified reader or buffer.
     * @function decode
     * @memberof S2CEnterView
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CEnterView} S2CEnterView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEnterView.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CEnterView();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            case 2: {
                    message.x = reader.float();
                    break;
                }
            case 3: {
                    message.y = reader.float();
                    break;
                }
            case 4: {
                    message.radius = reader.float();
                    break;
                }
            case 5: {
                    message.spriteid = reader.int64();
                    break;
                }
            case 6: {
                    message.speed = reader.float();
                    break;
                }
            case 7: {
                    message.dir = $root.Vector2.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.name = reader.string();
                    break;
                }
            case 9: {
                    message.movetime = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CEnterView message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CEnterView
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CEnterView} S2CEnterView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEnterView.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CEnterView message.
     * @function verify
     * @memberof S2CEnterView
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CEnterView.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        if (message.radius != null && message.hasOwnProperty("radius"))
            if (typeof message.radius !== "number")
                return "radius: number expected";
        if (message.spriteid != null && message.hasOwnProperty("spriteid"))
            if (!$util.isInteger(message.spriteid) && !(message.spriteid && $util.isInteger(message.spriteid.low) && $util.isInteger(message.spriteid.high)))
                return "spriteid: integer|Long expected";
        if (message.speed != null && message.hasOwnProperty("speed"))
            if (typeof message.speed !== "number")
                return "speed: number expected";
        if (message.dir != null && message.hasOwnProperty("dir")) {
            var error = $root.Vector2.verify(message.dir);
            if (error)
                return "dir." + error;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.movetime != null && message.hasOwnProperty("movetime"))
            if (!$util.isInteger(message.movetime) && !(message.movetime && $util.isInteger(message.movetime.low) && $util.isInteger(message.movetime.high)))
                return "movetime: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CEnterView message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CEnterView
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CEnterView} S2CEnterView
     */
    S2CEnterView.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CEnterView)
            return object;
        var message = new $root.S2CEnterView();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        if (object.radius != null)
            message.radius = Number(object.radius);
        if (object.spriteid != null)
            if ($util.Long)
                (message.spriteid = $util.Long.fromValue(object.spriteid)).unsigned = false;
            else if (typeof object.spriteid === "string")
                message.spriteid = parseInt(object.spriteid, 10);
            else if (typeof object.spriteid === "number")
                message.spriteid = object.spriteid;
            else if (typeof object.spriteid === "object")
                message.spriteid = new $util.LongBits(object.spriteid.low >>> 0, object.spriteid.high >>> 0).toNumber();
        if (object.speed != null)
            message.speed = Number(object.speed);
        if (object.dir != null) {
            if (typeof object.dir !== "object")
                throw TypeError(".S2CEnterView.dir: object expected");
            message.dir = $root.Vector2.fromObject(object.dir);
        }
        if (object.name != null)
            message.name = String(object.name);
        if (object.movetime != null)
            if ($util.Long)
                (message.movetime = $util.Long.fromValue(object.movetime)).unsigned = false;
            else if (typeof object.movetime === "string")
                message.movetime = parseInt(object.movetime, 10);
            else if (typeof object.movetime === "number")
                message.movetime = object.movetime;
            else if (typeof object.movetime === "object")
                message.movetime = new $util.LongBits(object.movetime.low >>> 0, object.movetime.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CEnterView message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CEnterView
     * @static
     * @param {S2CEnterView} message S2CEnterView
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CEnterView.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.x = 0;
            object.y = 0;
            object.radius = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.spriteid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.spriteid = options.longs === String ? "0" : 0;
            object.speed = 0;
            object.dir = null;
            object.name = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.movetime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.movetime = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        if (message.radius != null && message.hasOwnProperty("radius"))
            object.radius = options.json && !isFinite(message.radius) ? String(message.radius) : message.radius;
        if (message.spriteid != null && message.hasOwnProperty("spriteid"))
            if (typeof message.spriteid === "number")
                object.spriteid = options.longs === String ? String(message.spriteid) : message.spriteid;
            else
                object.spriteid = options.longs === String ? $util.Long.prototype.toString.call(message.spriteid) : options.longs === Number ? new $util.LongBits(message.spriteid.low >>> 0, message.spriteid.high >>> 0).toNumber() : message.spriteid;
        if (message.speed != null && message.hasOwnProperty("speed"))
            object.speed = options.json && !isFinite(message.speed) ? String(message.speed) : message.speed;
        if (message.dir != null && message.hasOwnProperty("dir"))
            object.dir = $root.Vector2.toObject(message.dir, options);
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.movetime != null && message.hasOwnProperty("movetime"))
            if (typeof message.movetime === "number")
                object.movetime = options.longs === String ? String(message.movetime) : message.movetime;
            else
                object.movetime = options.longs === String ? $util.Long.prototype.toString.call(message.movetime) : options.longs === Number ? new $util.LongBits(message.movetime.low >>> 0, message.movetime.high >>> 0).toNumber() : message.movetime;
        return object;
    };

    /**
     * Converts this S2CEnterView to JSON.
     * @function toJSON
     * @memberof S2CEnterView
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CEnterView.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CEnterView
     * @function getTypeUrl
     * @memberof S2CEnterView
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CEnterView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CEnterView";
    };

    return S2CEnterView;
})();

$root.S2CLeaveView = (function() {

    /**
     * Properties of a S2CLeaveView.
     * @exports IS2CLeaveView
     * @interface IS2CLeaveView
     * @property {number|Long|null} [id] S2CLeaveView id
     */

    /**
     * Constructs a new S2CLeaveView.
     * @exports S2CLeaveView
     * @classdesc Represents a S2CLeaveView.
     * @implements IS2CLeaveView
     * @constructor
     * @param {IS2CLeaveView=} [properties] Properties to set
     */
    function S2CLeaveView(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CLeaveView id.
     * @member {number|Long} id
     * @memberof S2CLeaveView
     * @instance
     */
    S2CLeaveView.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CLeaveView instance using the specified properties.
     * @function create
     * @memberof S2CLeaveView
     * @static
     * @param {IS2CLeaveView=} [properties] Properties to set
     * @returns {S2CLeaveView} S2CLeaveView instance
     */
    S2CLeaveView.create = function create(properties) {
        return new S2CLeaveView(properties);
    };

    /**
     * Encodes the specified S2CLeaveView message. Does not implicitly {@link S2CLeaveView.verify|verify} messages.
     * @function encode
     * @memberof S2CLeaveView
     * @static
     * @param {IS2CLeaveView} message S2CLeaveView message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLeaveView.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        return writer;
    };

    /**
     * Encodes the specified S2CLeaveView message, length delimited. Does not implicitly {@link S2CLeaveView.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CLeaveView
     * @static
     * @param {IS2CLeaveView} message S2CLeaveView message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLeaveView.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CLeaveView message from the specified reader or buffer.
     * @function decode
     * @memberof S2CLeaveView
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CLeaveView} S2CLeaveView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLeaveView.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CLeaveView();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CLeaveView message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CLeaveView
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CLeaveView} S2CLeaveView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLeaveView.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CLeaveView message.
     * @function verify
     * @memberof S2CLeaveView
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CLeaveView.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CLeaveView message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CLeaveView
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CLeaveView} S2CLeaveView
     */
    S2CLeaveView.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CLeaveView)
            return object;
        var message = new $root.S2CLeaveView();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CLeaveView message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CLeaveView
     * @static
     * @param {S2CLeaveView} message S2CLeaveView
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CLeaveView.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        return object;
    };

    /**
     * Converts this S2CLeaveView to JSON.
     * @function toJSON
     * @memberof S2CLeaveView
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CLeaveView.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CLeaveView
     * @function getTypeUrl
     * @memberof S2CLeaveView
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CLeaveView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CLeaveView";
    };

    return S2CLeaveView;
})();

$root.S2CUpdateRadius = (function() {

    /**
     * Properties of a S2CUpdateRadius.
     * @exports IS2CUpdateRadius
     * @interface IS2CUpdateRadius
     * @property {number|Long|null} [id] S2CUpdateRadius id
     * @property {number|null} [radius] S2CUpdateRadius radius
     */

    /**
     * Constructs a new S2CUpdateRadius.
     * @exports S2CUpdateRadius
     * @classdesc Represents a S2CUpdateRadius.
     * @implements IS2CUpdateRadius
     * @constructor
     * @param {IS2CUpdateRadius=} [properties] Properties to set
     */
    function S2CUpdateRadius(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUpdateRadius id.
     * @member {number|Long} id
     * @memberof S2CUpdateRadius
     * @instance
     */
    S2CUpdateRadius.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CUpdateRadius radius.
     * @member {number} radius
     * @memberof S2CUpdateRadius
     * @instance
     */
    S2CUpdateRadius.prototype.radius = 0;

    /**
     * Creates a new S2CUpdateRadius instance using the specified properties.
     * @function create
     * @memberof S2CUpdateRadius
     * @static
     * @param {IS2CUpdateRadius=} [properties] Properties to set
     * @returns {S2CUpdateRadius} S2CUpdateRadius instance
     */
    S2CUpdateRadius.create = function create(properties) {
        return new S2CUpdateRadius(properties);
    };

    /**
     * Encodes the specified S2CUpdateRadius message. Does not implicitly {@link S2CUpdateRadius.verify|verify} messages.
     * @function encode
     * @memberof S2CUpdateRadius
     * @static
     * @param {IS2CUpdateRadius} message S2CUpdateRadius message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUpdateRadius.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.radius != null && Object.hasOwnProperty.call(message, "radius"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.radius);
        return writer;
    };

    /**
     * Encodes the specified S2CUpdateRadius message, length delimited. Does not implicitly {@link S2CUpdateRadius.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUpdateRadius
     * @static
     * @param {IS2CUpdateRadius} message S2CUpdateRadius message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUpdateRadius.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUpdateRadius message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUpdateRadius
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUpdateRadius} S2CUpdateRadius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUpdateRadius.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUpdateRadius();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            case 2: {
                    message.radius = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUpdateRadius message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUpdateRadius
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUpdateRadius} S2CUpdateRadius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUpdateRadius.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUpdateRadius message.
     * @function verify
     * @memberof S2CUpdateRadius
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUpdateRadius.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.radius != null && message.hasOwnProperty("radius"))
            if (typeof message.radius !== "number")
                return "radius: number expected";
        return null;
    };

    /**
     * Creates a S2CUpdateRadius message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUpdateRadius
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUpdateRadius} S2CUpdateRadius
     */
    S2CUpdateRadius.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUpdateRadius)
            return object;
        var message = new $root.S2CUpdateRadius();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.radius != null)
            message.radius = Number(object.radius);
        return message;
    };

    /**
     * Creates a plain object from a S2CUpdateRadius message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUpdateRadius
     * @static
     * @param {S2CUpdateRadius} message S2CUpdateRadius
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUpdateRadius.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.radius = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.radius != null && message.hasOwnProperty("radius"))
            object.radius = options.json && !isFinite(message.radius) ? String(message.radius) : message.radius;
        return object;
    };

    /**
     * Converts this S2CUpdateRadius to JSON.
     * @function toJSON
     * @memberof S2CUpdateRadius
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUpdateRadius.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CUpdateRadius
     * @function getTypeUrl
     * @memberof S2CUpdateRadius
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CUpdateRadius.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CUpdateRadius";
    };

    return S2CUpdateRadius;
})();

$root.S2CDead = (function() {

    /**
     * Properties of a S2CDead.
     * @exports IS2CDead
     * @interface IS2CDead
     * @property {number|Long|null} [id] S2CDead id
     */

    /**
     * Constructs a new S2CDead.
     * @exports S2CDead
     * @classdesc Represents a S2CDead.
     * @implements IS2CDead
     * @constructor
     * @param {IS2CDead=} [properties] Properties to set
     */
    function S2CDead(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CDead id.
     * @member {number|Long} id
     * @memberof S2CDead
     * @instance
     */
    S2CDead.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CDead instance using the specified properties.
     * @function create
     * @memberof S2CDead
     * @static
     * @param {IS2CDead=} [properties] Properties to set
     * @returns {S2CDead} S2CDead instance
     */
    S2CDead.create = function create(properties) {
        return new S2CDead(properties);
    };

    /**
     * Encodes the specified S2CDead message. Does not implicitly {@link S2CDead.verify|verify} messages.
     * @function encode
     * @memberof S2CDead
     * @static
     * @param {IS2CDead} message S2CDead message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CDead.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        return writer;
    };

    /**
     * Encodes the specified S2CDead message, length delimited. Does not implicitly {@link S2CDead.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CDead
     * @static
     * @param {IS2CDead} message S2CDead message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CDead.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CDead message from the specified reader or buffer.
     * @function decode
     * @memberof S2CDead
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CDead} S2CDead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CDead.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CDead();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CDead message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CDead
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CDead} S2CDead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CDead.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CDead message.
     * @function verify
     * @memberof S2CDead
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CDead.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CDead message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CDead
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CDead} S2CDead
     */
    S2CDead.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CDead)
            return object;
        var message = new $root.S2CDead();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CDead message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CDead
     * @static
     * @param {S2CDead} message S2CDead
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CDead.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        return object;
    };

    /**
     * Converts this S2CDead to JSON.
     * @function toJSON
     * @memberof S2CDead
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CDead.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CDead
     * @function getTypeUrl
     * @memberof S2CDead
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CDead.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CDead";
    };

    return S2CDead;
})();

$root.S2CErrorCode = (function() {

    /**
     * Properties of a S2CErrorCode.
     * @exports IS2CErrorCode
     * @interface IS2CErrorCode
     * @property {number|null} [code] S2CErrorCode code
     */

    /**
     * Constructs a new S2CErrorCode.
     * @exports S2CErrorCode
     * @classdesc Represents a S2CErrorCode.
     * @implements IS2CErrorCode
     * @constructor
     * @param {IS2CErrorCode=} [properties] Properties to set
     */
    function S2CErrorCode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CErrorCode code.
     * @member {number} code
     * @memberof S2CErrorCode
     * @instance
     */
    S2CErrorCode.prototype.code = 0;

    /**
     * Creates a new S2CErrorCode instance using the specified properties.
     * @function create
     * @memberof S2CErrorCode
     * @static
     * @param {IS2CErrorCode=} [properties] Properties to set
     * @returns {S2CErrorCode} S2CErrorCode instance
     */
    S2CErrorCode.create = function create(properties) {
        return new S2CErrorCode(properties);
    };

    /**
     * Encodes the specified S2CErrorCode message. Does not implicitly {@link S2CErrorCode.verify|verify} messages.
     * @function encode
     * @memberof S2CErrorCode
     * @static
     * @param {IS2CErrorCode} message S2CErrorCode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CErrorCode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        return writer;
    };

    /**
     * Encodes the specified S2CErrorCode message, length delimited. Does not implicitly {@link S2CErrorCode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CErrorCode
     * @static
     * @param {IS2CErrorCode} message S2CErrorCode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CErrorCode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CErrorCode message from the specified reader or buffer.
     * @function decode
     * @memberof S2CErrorCode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CErrorCode} S2CErrorCode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CErrorCode.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CErrorCode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CErrorCode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CErrorCode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CErrorCode} S2CErrorCode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CErrorCode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CErrorCode message.
     * @function verify
     * @memberof S2CErrorCode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CErrorCode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };

    /**
     * Creates a S2CErrorCode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CErrorCode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CErrorCode} S2CErrorCode
     */
    S2CErrorCode.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CErrorCode)
            return object;
        var message = new $root.S2CErrorCode();
        if (object.code != null)
            message.code = object.code | 0;
        return message;
    };

    /**
     * Creates a plain object from a S2CErrorCode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CErrorCode
     * @static
     * @param {S2CErrorCode} message S2CErrorCode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CErrorCode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.code = 0;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };

    /**
     * Converts this S2CErrorCode to JSON.
     * @function toJSON
     * @memberof S2CErrorCode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CErrorCode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CErrorCode
     * @function getTypeUrl
     * @memberof S2CErrorCode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CErrorCode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CErrorCode";
    };

    return S2CErrorCode;
})();

$root.C2SLogin = (function() {

    /**
     * Properties of a C2SLogin.
     * @exports IC2SLogin
     * @interface IC2SLogin
     * @property {string|null} [openid] C2SLogin openid
     */

    /**
     * Constructs a new C2SLogin.
     * @exports C2SLogin
     * @classdesc Represents a C2SLogin.
     * @implements IC2SLogin
     * @constructor
     * @param {IC2SLogin=} [properties] Properties to set
     */
    function C2SLogin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SLogin openid.
     * @member {string} openid
     * @memberof C2SLogin
     * @instance
     */
    C2SLogin.prototype.openid = "";

    /**
     * Creates a new C2SLogin instance using the specified properties.
     * @function create
     * @memberof C2SLogin
     * @static
     * @param {IC2SLogin=} [properties] Properties to set
     * @returns {C2SLogin} C2SLogin instance
     */
    C2SLogin.create = function create(properties) {
        return new C2SLogin(properties);
    };

    /**
     * Encodes the specified C2SLogin message. Does not implicitly {@link C2SLogin.verify|verify} messages.
     * @function encode
     * @memberof C2SLogin
     * @static
     * @param {IC2SLogin} message C2SLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SLogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.openid != null && Object.hasOwnProperty.call(message, "openid"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.openid);
        return writer;
    };

    /**
     * Encodes the specified C2SLogin message, length delimited. Does not implicitly {@link C2SLogin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SLogin
     * @static
     * @param {IC2SLogin} message C2SLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SLogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SLogin message from the specified reader or buffer.
     * @function decode
     * @memberof C2SLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SLogin} C2SLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SLogin.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SLogin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.openid = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SLogin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SLogin} C2SLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SLogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SLogin message.
     * @function verify
     * @memberof C2SLogin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SLogin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.openid != null && message.hasOwnProperty("openid"))
            if (!$util.isString(message.openid))
                return "openid: string expected";
        return null;
    };

    /**
     * Creates a C2SLogin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SLogin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SLogin} C2SLogin
     */
    C2SLogin.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SLogin)
            return object;
        var message = new $root.C2SLogin();
        if (object.openid != null)
            message.openid = String(object.openid);
        return message;
    };

    /**
     * Creates a plain object from a C2SLogin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SLogin
     * @static
     * @param {C2SLogin} message C2SLogin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SLogin.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.openid = "";
        if (message.openid != null && message.hasOwnProperty("openid"))
            object.openid = message.openid;
        return object;
    };

    /**
     * Converts this C2SLogin to JSON.
     * @function toJSON
     * @memberof C2SLogin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SLogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SLogin
     * @function getTypeUrl
     * @memberof C2SLogin
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SLogin";
    };

    return C2SLogin;
})();

$root.S2CLogin = (function() {

    /**
     * Properties of a S2CLogin.
     * @exports IS2CLogin
     * @interface IS2CLogin
     * @property {boolean|null} [ok] S2CLogin ok
     * @property {number|Long|null} [time] S2CLogin time
     * @property {number|Long|null} [timezone] S2CLogin timezone
     */

    /**
     * Constructs a new S2CLogin.
     * @exports S2CLogin
     * @classdesc Represents a S2CLogin.
     * @implements IS2CLogin
     * @constructor
     * @param {IS2CLogin=} [properties] Properties to set
     */
    function S2CLogin(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CLogin ok.
     * @member {boolean} ok
     * @memberof S2CLogin
     * @instance
     */
    S2CLogin.prototype.ok = false;

    /**
     * S2CLogin time.
     * @member {number|Long} time
     * @memberof S2CLogin
     * @instance
     */
    S2CLogin.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * S2CLogin timezone.
     * @member {number|Long} timezone
     * @memberof S2CLogin
     * @instance
     */
    S2CLogin.prototype.timezone = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CLogin instance using the specified properties.
     * @function create
     * @memberof S2CLogin
     * @static
     * @param {IS2CLogin=} [properties] Properties to set
     * @returns {S2CLogin} S2CLogin instance
     */
    S2CLogin.create = function create(properties) {
        return new S2CLogin(properties);
    };

    /**
     * Encodes the specified S2CLogin message. Does not implicitly {@link S2CLogin.verify|verify} messages.
     * @function encode
     * @memberof S2CLogin
     * @static
     * @param {IS2CLogin} message S2CLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLogin.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
        if (message.timezone != null && Object.hasOwnProperty.call(message, "timezone"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timezone);
        return writer;
    };

    /**
     * Encodes the specified S2CLogin message, length delimited. Does not implicitly {@link S2CLogin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CLogin
     * @static
     * @param {IS2CLogin} message S2CLogin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLogin.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CLogin message from the specified reader or buffer.
     * @function decode
     * @memberof S2CLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CLogin} S2CLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLogin.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CLogin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.ok = reader.bool();
                    break;
                }
            case 2: {
                    message.time = reader.int64();
                    break;
                }
            case 3: {
                    message.timezone = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CLogin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CLogin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CLogin} S2CLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLogin.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CLogin message.
     * @function verify
     * @memberof S2CLogin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CLogin.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ok != null && message.hasOwnProperty("ok"))
            if (typeof message.ok !== "boolean")
                return "ok: boolean expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            if (!$util.isInteger(message.timezone) && !(message.timezone && $util.isInteger(message.timezone.low) && $util.isInteger(message.timezone.high)))
                return "timezone: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CLogin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CLogin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CLogin} S2CLogin
     */
    S2CLogin.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CLogin)
            return object;
        var message = new $root.S2CLogin();
        if (object.ok != null)
            message.ok = Boolean(object.ok);
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = false;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
        if (object.timezone != null)
            if ($util.Long)
                (message.timezone = $util.Long.fromValue(object.timezone)).unsigned = false;
            else if (typeof object.timezone === "string")
                message.timezone = parseInt(object.timezone, 10);
            else if (typeof object.timezone === "number")
                message.timezone = object.timezone;
            else if (typeof object.timezone === "object")
                message.timezone = new $util.LongBits(object.timezone.low >>> 0, object.timezone.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CLogin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CLogin
     * @static
     * @param {S2CLogin} message S2CLogin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CLogin.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ok = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timezone = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timezone = options.longs === String ? "0" : 0;
        }
        if (message.ok != null && message.hasOwnProperty("ok"))
            object.ok = message.ok;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            if (typeof message.timezone === "number")
                object.timezone = options.longs === String ? String(message.timezone) : message.timezone;
            else
                object.timezone = options.longs === String ? $util.Long.prototype.toString.call(message.timezone) : options.longs === Number ? new $util.LongBits(message.timezone.low >>> 0, message.timezone.high >>> 0).toNumber() : message.timezone;
        return object;
    };

    /**
     * Converts this S2CLogin to JSON.
     * @function toJSON
     * @memberof S2CLogin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CLogin.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CLogin
     * @function getTypeUrl
     * @memberof S2CLogin
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CLogin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CLogin";
    };

    return S2CLogin;
})();

$root.C2SItemList = (function() {

    /**
     * Properties of a C2SItemList.
     * @exports IC2SItemList
     * @interface IC2SItemList
     */

    /**
     * Constructs a new C2SItemList.
     * @exports C2SItemList
     * @classdesc Represents a C2SItemList.
     * @implements IC2SItemList
     * @constructor
     * @param {IC2SItemList=} [properties] Properties to set
     */
    function C2SItemList(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2SItemList instance using the specified properties.
     * @function create
     * @memberof C2SItemList
     * @static
     * @param {IC2SItemList=} [properties] Properties to set
     * @returns {C2SItemList} C2SItemList instance
     */
    C2SItemList.create = function create(properties) {
        return new C2SItemList(properties);
    };

    /**
     * Encodes the specified C2SItemList message. Does not implicitly {@link C2SItemList.verify|verify} messages.
     * @function encode
     * @memberof C2SItemList
     * @static
     * @param {IC2SItemList} message C2SItemList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SItemList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2SItemList message, length delimited. Does not implicitly {@link C2SItemList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SItemList
     * @static
     * @param {IC2SItemList} message C2SItemList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SItemList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SItemList message from the specified reader or buffer.
     * @function decode
     * @memberof C2SItemList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SItemList} C2SItemList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SItemList.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SItemList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SItemList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SItemList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SItemList} C2SItemList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SItemList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SItemList message.
     * @function verify
     * @memberof C2SItemList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SItemList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2SItemList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SItemList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SItemList} C2SItemList
     */
    C2SItemList.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SItemList)
            return object;
        return new $root.C2SItemList();
    };

    /**
     * Creates a plain object from a C2SItemList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SItemList
     * @static
     * @param {C2SItemList} message C2SItemList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SItemList.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2SItemList to JSON.
     * @function toJSON
     * @memberof C2SItemList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SItemList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SItemList
     * @function getTypeUrl
     * @memberof C2SItemList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SItemList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SItemList";
    };

    return C2SItemList;
})();

$root.S2CItemList = (function() {

    /**
     * Properties of a S2CItemList.
     * @exports IS2CItemList
     * @interface IS2CItemList
     * @property {Object.<string,IItemData>|null} [list] S2CItemList list
     */

    /**
     * Constructs a new S2CItemList.
     * @exports S2CItemList
     * @classdesc Represents a S2CItemList.
     * @implements IS2CItemList
     * @constructor
     * @param {IS2CItemList=} [properties] Properties to set
     */
    function S2CItemList(properties) {
        this.list = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CItemList list.
     * @member {Object.<string,IItemData>} list
     * @memberof S2CItemList
     * @instance
     */
    S2CItemList.prototype.list = $util.emptyObject;

    /**
     * Creates a new S2CItemList instance using the specified properties.
     * @function create
     * @memberof S2CItemList
     * @static
     * @param {IS2CItemList=} [properties] Properties to set
     * @returns {S2CItemList} S2CItemList instance
     */
    S2CItemList.create = function create(properties) {
        return new S2CItemList(properties);
    };

    /**
     * Encodes the specified S2CItemList message. Does not implicitly {@link S2CItemList.verify|verify} messages.
     * @function encode
     * @memberof S2CItemList
     * @static
     * @param {IS2CItemList} message S2CItemList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CItemList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.list != null && Object.hasOwnProperty.call(message, "list"))
            for (var keys = Object.keys(message.list), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                $root.ItemData.encode(message.list[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified S2CItemList message, length delimited. Does not implicitly {@link S2CItemList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CItemList
     * @static
     * @param {IS2CItemList} message S2CItemList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CItemList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CItemList message from the specified reader or buffer.
     * @function decode
     * @memberof S2CItemList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CItemList} S2CItemList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CItemList.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CItemList(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 11: {
                    if (message.list === $util.emptyObject)
                        message.list = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int32();
                            break;
                        case 2:
                            value = $root.ItemData.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.list[key] = value;
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CItemList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CItemList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CItemList} S2CItemList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CItemList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CItemList message.
     * @function verify
     * @memberof S2CItemList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CItemList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.list != null && message.hasOwnProperty("list")) {
            if (!$util.isObject(message.list))
                return "list: object expected";
            var key = Object.keys(message.list);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "list: integer key{k:int32} expected";
                {
                    var error = $root.ItemData.verify(message.list[key[i]]);
                    if (error)
                        return "list." + error;
                }
            }
        }
        return null;
    };

    /**
     * Creates a S2CItemList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CItemList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CItemList} S2CItemList
     */
    S2CItemList.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CItemList)
            return object;
        var message = new $root.S2CItemList();
        if (object.list) {
            if (typeof object.list !== "object")
                throw TypeError(".S2CItemList.list: object expected");
            message.list = {};
            for (var keys = Object.keys(object.list), i = 0; i < keys.length; ++i) {
                if (typeof object.list[keys[i]] !== "object")
                    throw TypeError(".S2CItemList.list: object expected");
                message.list[keys[i]] = $root.ItemData.fromObject(object.list[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CItemList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CItemList
     * @static
     * @param {S2CItemList} message S2CItemList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CItemList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.list = {};
        var keys2;
        if (message.list && (keys2 = Object.keys(message.list)).length) {
            object.list = {};
            for (var j = 0; j < keys2.length; ++j)
                object.list[keys2[j]] = $root.ItemData.toObject(message.list[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this S2CItemList to JSON.
     * @function toJSON
     * @memberof S2CItemList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CItemList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CItemList
     * @function getTypeUrl
     * @memberof S2CItemList
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CItemList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CItemList";
    };

    return S2CItemList;
})();

$root.C2SUseItem = (function() {

    /**
     * Properties of a C2SUseItem.
     * @exports IC2SUseItem
     * @interface IC2SUseItem
     * @property {number|null} [id] C2SUseItem id
     * @property {number|Long|null} [count] C2SUseItem count
     */

    /**
     * Constructs a new C2SUseItem.
     * @exports C2SUseItem
     * @classdesc Represents a C2SUseItem.
     * @implements IC2SUseItem
     * @constructor
     * @param {IC2SUseItem=} [properties] Properties to set
     */
    function C2SUseItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SUseItem id.
     * @member {number} id
     * @memberof C2SUseItem
     * @instance
     */
    C2SUseItem.prototype.id = 0;

    /**
     * C2SUseItem count.
     * @member {number|Long} count
     * @memberof C2SUseItem
     * @instance
     */
    C2SUseItem.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new C2SUseItem instance using the specified properties.
     * @function create
     * @memberof C2SUseItem
     * @static
     * @param {IC2SUseItem=} [properties] Properties to set
     * @returns {C2SUseItem} C2SUseItem instance
     */
    C2SUseItem.create = function create(properties) {
        return new C2SUseItem(properties);
    };

    /**
     * Encodes the specified C2SUseItem message. Does not implicitly {@link C2SUseItem.verify|verify} messages.
     * @function encode
     * @memberof C2SUseItem
     * @static
     * @param {IC2SUseItem} message C2SUseItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SUseItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.count);
        return writer;
    };

    /**
     * Encodes the specified C2SUseItem message, length delimited. Does not implicitly {@link C2SUseItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SUseItem
     * @static
     * @param {IC2SUseItem} message C2SUseItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SUseItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SUseItem message from the specified reader or buffer.
     * @function decode
     * @memberof C2SUseItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SUseItem} C2SUseItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SUseItem.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SUseItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int32();
                    break;
                }
            case 2: {
                    message.count = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SUseItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SUseItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SUseItem} C2SUseItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SUseItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SUseItem message.
     * @function verify
     * @memberof C2SUseItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SUseItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                return "count: integer|Long expected";
        return null;
    };

    /**
     * Creates a C2SUseItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SUseItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SUseItem} C2SUseItem
     */
    C2SUseItem.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SUseItem)
            return object;
        var message = new $root.C2SUseItem();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.count != null)
            if ($util.Long)
                (message.count = $util.Long.fromValue(object.count)).unsigned = false;
            else if (typeof object.count === "string")
                message.count = parseInt(object.count, 10);
            else if (typeof object.count === "number")
                message.count = object.count;
            else if (typeof object.count === "object")
                message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a C2SUseItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SUseItem
     * @static
     * @param {C2SUseItem} message C2SUseItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SUseItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.count = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.count != null && message.hasOwnProperty("count"))
            if (typeof message.count === "number")
                object.count = options.longs === String ? String(message.count) : message.count;
            else
                object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
        return object;
    };

    /**
     * Converts this C2SUseItem to JSON.
     * @function toJSON
     * @memberof C2SUseItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SUseItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SUseItem
     * @function getTypeUrl
     * @memberof C2SUseItem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SUseItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SUseItem";
    };

    return C2SUseItem;
})();

$root.S2CUpdateItem = (function() {

    /**
     * Properties of a S2CUpdateItem.
     * @exports IS2CUpdateItem
     * @interface IS2CUpdateItem
     * @property {Array.<IItemData>|null} [list] S2CUpdateItem list
     */

    /**
     * Constructs a new S2CUpdateItem.
     * @exports S2CUpdateItem
     * @classdesc Represents a S2CUpdateItem.
     * @implements IS2CUpdateItem
     * @constructor
     * @param {IS2CUpdateItem=} [properties] Properties to set
     */
    function S2CUpdateItem(properties) {
        this.list = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUpdateItem list.
     * @member {Array.<IItemData>} list
     * @memberof S2CUpdateItem
     * @instance
     */
    S2CUpdateItem.prototype.list = $util.emptyArray;

    /**
     * Creates a new S2CUpdateItem instance using the specified properties.
     * @function create
     * @memberof S2CUpdateItem
     * @static
     * @param {IS2CUpdateItem=} [properties] Properties to set
     * @returns {S2CUpdateItem} S2CUpdateItem instance
     */
    S2CUpdateItem.create = function create(properties) {
        return new S2CUpdateItem(properties);
    };

    /**
     * Encodes the specified S2CUpdateItem message. Does not implicitly {@link S2CUpdateItem.verify|verify} messages.
     * @function encode
     * @memberof S2CUpdateItem
     * @static
     * @param {IS2CUpdateItem} message S2CUpdateItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUpdateItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.list != null && message.list.length)
            for (var i = 0; i < message.list.length; ++i)
                $root.ItemData.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CUpdateItem message, length delimited. Does not implicitly {@link S2CUpdateItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUpdateItem
     * @static
     * @param {IS2CUpdateItem} message S2CUpdateItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUpdateItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUpdateItem message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUpdateItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUpdateItem} S2CUpdateItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUpdateItem.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUpdateItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.ItemData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUpdateItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUpdateItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUpdateItem} S2CUpdateItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUpdateItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUpdateItem message.
     * @function verify
     * @memberof S2CUpdateItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUpdateItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.list != null && message.hasOwnProperty("list")) {
            if (!Array.isArray(message.list))
                return "list: array expected";
            for (var i = 0; i < message.list.length; ++i) {
                var error = $root.ItemData.verify(message.list[i]);
                if (error)
                    return "list." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2CUpdateItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUpdateItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUpdateItem} S2CUpdateItem
     */
    S2CUpdateItem.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUpdateItem)
            return object;
        var message = new $root.S2CUpdateItem();
        if (object.list) {
            if (!Array.isArray(object.list))
                throw TypeError(".S2CUpdateItem.list: array expected");
            message.list = [];
            for (var i = 0; i < object.list.length; ++i) {
                if (typeof object.list[i] !== "object")
                    throw TypeError(".S2CUpdateItem.list: object expected");
                message.list[i] = $root.ItemData.fromObject(object.list[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CUpdateItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUpdateItem
     * @static
     * @param {S2CUpdateItem} message S2CUpdateItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUpdateItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.list = [];
        if (message.list && message.list.length) {
            object.list = [];
            for (var j = 0; j < message.list.length; ++j)
                object.list[j] = $root.ItemData.toObject(message.list[j], options);
        }
        return object;
    };

    /**
     * Converts this S2CUpdateItem to JSON.
     * @function toJSON
     * @memberof S2CUpdateItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUpdateItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CUpdateItem
     * @function getTypeUrl
     * @memberof S2CUpdateItem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CUpdateItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CUpdateItem";
    };

    return S2CUpdateItem;
})();

$root.C2SHello = (function() {

    /**
     * Properties of a C2SHello.
     * @exports IC2SHello
     * @interface IC2SHello
     * @property {string|null} [hello] C2SHello hello
     */

    /**
     * Constructs a new C2SHello.
     * @exports C2SHello
     * @classdesc Represents a C2SHello.
     * @implements IC2SHello
     * @constructor
     * @param {IC2SHello=} [properties] Properties to set
     */
    function C2SHello(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SHello hello.
     * @member {string} hello
     * @memberof C2SHello
     * @instance
     */
    C2SHello.prototype.hello = "";

    /**
     * Creates a new C2SHello instance using the specified properties.
     * @function create
     * @memberof C2SHello
     * @static
     * @param {IC2SHello=} [properties] Properties to set
     * @returns {C2SHello} C2SHello instance
     */
    C2SHello.create = function create(properties) {
        return new C2SHello(properties);
    };

    /**
     * Encodes the specified C2SHello message. Does not implicitly {@link C2SHello.verify|verify} messages.
     * @function encode
     * @memberof C2SHello
     * @static
     * @param {IC2SHello} message C2SHello message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SHello.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hello != null && Object.hasOwnProperty.call(message, "hello"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hello);
        return writer;
    };

    /**
     * Encodes the specified C2SHello message, length delimited. Does not implicitly {@link C2SHello.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SHello
     * @static
     * @param {IC2SHello} message C2SHello message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SHello.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SHello message from the specified reader or buffer.
     * @function decode
     * @memberof C2SHello
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SHello} C2SHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SHello.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SHello();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.hello = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SHello message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SHello
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SHello} C2SHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SHello.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SHello message.
     * @function verify
     * @memberof C2SHello
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SHello.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hello != null && message.hasOwnProperty("hello"))
            if (!$util.isString(message.hello))
                return "hello: string expected";
        return null;
    };

    /**
     * Creates a C2SHello message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SHello
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SHello} C2SHello
     */
    C2SHello.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SHello)
            return object;
        var message = new $root.C2SHello();
        if (object.hello != null)
            message.hello = String(object.hello);
        return message;
    };

    /**
     * Creates a plain object from a C2SHello message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SHello
     * @static
     * @param {C2SHello} message C2SHello
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SHello.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.hello = "";
        if (message.hello != null && message.hasOwnProperty("hello"))
            object.hello = message.hello;
        return object;
    };

    /**
     * Converts this C2SHello to JSON.
     * @function toJSON
     * @memberof C2SHello
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SHello.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SHello
     * @function getTypeUrl
     * @memberof C2SHello
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SHello.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SHello";
    };

    return C2SHello;
})();

$root.S2CWorld = (function() {

    /**
     * Properties of a S2CWorld.
     * @exports IS2CWorld
     * @interface IS2CWorld
     * @property {string|null} [world] S2CWorld world
     */

    /**
     * Constructs a new S2CWorld.
     * @exports S2CWorld
     * @classdesc Represents a S2CWorld.
     * @implements IS2CWorld
     * @constructor
     * @param {IS2CWorld=} [properties] Properties to set
     */
    function S2CWorld(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CWorld world.
     * @member {string} world
     * @memberof S2CWorld
     * @instance
     */
    S2CWorld.prototype.world = "";

    /**
     * Creates a new S2CWorld instance using the specified properties.
     * @function create
     * @memberof S2CWorld
     * @static
     * @param {IS2CWorld=} [properties] Properties to set
     * @returns {S2CWorld} S2CWorld instance
     */
    S2CWorld.create = function create(properties) {
        return new S2CWorld(properties);
    };

    /**
     * Encodes the specified S2CWorld message. Does not implicitly {@link S2CWorld.verify|verify} messages.
     * @function encode
     * @memberof S2CWorld
     * @static
     * @param {IS2CWorld} message S2CWorld message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CWorld.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.world != null && Object.hasOwnProperty.call(message, "world"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.world);
        return writer;
    };

    /**
     * Encodes the specified S2CWorld message, length delimited. Does not implicitly {@link S2CWorld.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CWorld
     * @static
     * @param {IS2CWorld} message S2CWorld message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CWorld.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CWorld message from the specified reader or buffer.
     * @function decode
     * @memberof S2CWorld
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CWorld} S2CWorld
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CWorld.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CWorld();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.world = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CWorld message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CWorld
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CWorld} S2CWorld
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CWorld.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CWorld message.
     * @function verify
     * @memberof S2CWorld
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CWorld.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.world != null && message.hasOwnProperty("world"))
            if (!$util.isString(message.world))
                return "world: string expected";
        return null;
    };

    /**
     * Creates a S2CWorld message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CWorld
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CWorld} S2CWorld
     */
    S2CWorld.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CWorld)
            return object;
        var message = new $root.S2CWorld();
        if (object.world != null)
            message.world = String(object.world);
        return message;
    };

    /**
     * Creates a plain object from a S2CWorld message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CWorld
     * @static
     * @param {S2CWorld} message S2CWorld
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CWorld.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.world = "";
        if (message.world != null && message.hasOwnProperty("world"))
            object.world = message.world;
        return object;
    };

    /**
     * Converts this S2CWorld to JSON.
     * @function toJSON
     * @memberof S2CWorld
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CWorld.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CWorld
     * @function getTypeUrl
     * @memberof S2CWorld
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CWorld.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CWorld";
    };

    return S2CWorld;
})();

$root.C2SStartGameLevel = (function() {

    /**
     * Properties of a C2SStartGameLevel.
     * @exports IC2SStartGameLevel
     * @interface IC2SStartGameLevel
     * @property {number|null} [levelid] C2SStartGameLevel levelid
     */

    /**
     * Constructs a new C2SStartGameLevel.
     * @exports C2SStartGameLevel
     * @classdesc Represents a C2SStartGameLevel.
     * @implements IC2SStartGameLevel
     * @constructor
     * @param {IC2SStartGameLevel=} [properties] Properties to set
     */
    function C2SStartGameLevel(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SStartGameLevel levelid.
     * @member {number} levelid
     * @memberof C2SStartGameLevel
     * @instance
     */
    C2SStartGameLevel.prototype.levelid = 0;

    /**
     * Creates a new C2SStartGameLevel instance using the specified properties.
     * @function create
     * @memberof C2SStartGameLevel
     * @static
     * @param {IC2SStartGameLevel=} [properties] Properties to set
     * @returns {C2SStartGameLevel} C2SStartGameLevel instance
     */
    C2SStartGameLevel.create = function create(properties) {
        return new C2SStartGameLevel(properties);
    };

    /**
     * Encodes the specified C2SStartGameLevel message. Does not implicitly {@link C2SStartGameLevel.verify|verify} messages.
     * @function encode
     * @memberof C2SStartGameLevel
     * @static
     * @param {IC2SStartGameLevel} message C2SStartGameLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SStartGameLevel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.levelid != null && Object.hasOwnProperty.call(message, "levelid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.levelid);
        return writer;
    };

    /**
     * Encodes the specified C2SStartGameLevel message, length delimited. Does not implicitly {@link C2SStartGameLevel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SStartGameLevel
     * @static
     * @param {IC2SStartGameLevel} message C2SStartGameLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SStartGameLevel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SStartGameLevel message from the specified reader or buffer.
     * @function decode
     * @memberof C2SStartGameLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SStartGameLevel} C2SStartGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SStartGameLevel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SStartGameLevel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.levelid = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SStartGameLevel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SStartGameLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SStartGameLevel} C2SStartGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SStartGameLevel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SStartGameLevel message.
     * @function verify
     * @memberof C2SStartGameLevel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SStartGameLevel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.levelid != null && message.hasOwnProperty("levelid"))
            if (!$util.isInteger(message.levelid))
                return "levelid: integer expected";
        return null;
    };

    /**
     * Creates a C2SStartGameLevel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SStartGameLevel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SStartGameLevel} C2SStartGameLevel
     */
    C2SStartGameLevel.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SStartGameLevel)
            return object;
        var message = new $root.C2SStartGameLevel();
        if (object.levelid != null)
            message.levelid = object.levelid | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SStartGameLevel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SStartGameLevel
     * @static
     * @param {C2SStartGameLevel} message C2SStartGameLevel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SStartGameLevel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.levelid = 0;
        if (message.levelid != null && message.hasOwnProperty("levelid"))
            object.levelid = message.levelid;
        return object;
    };

    /**
     * Converts this C2SStartGameLevel to JSON.
     * @function toJSON
     * @memberof C2SStartGameLevel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SStartGameLevel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SStartGameLevel
     * @function getTypeUrl
     * @memberof C2SStartGameLevel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SStartGameLevel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SStartGameLevel";
    };

    return C2SStartGameLevel;
})();

$root.S2CStartGameLevel = (function() {

    /**
     * Properties of a S2CStartGameLevel.
     * @exports IS2CStartGameLevel
     * @interface IS2CStartGameLevel
     */

    /**
     * Constructs a new S2CStartGameLevel.
     * @exports S2CStartGameLevel
     * @classdesc Represents a S2CStartGameLevel.
     * @implements IS2CStartGameLevel
     * @constructor
     * @param {IS2CStartGameLevel=} [properties] Properties to set
     */
    function S2CStartGameLevel(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new S2CStartGameLevel instance using the specified properties.
     * @function create
     * @memberof S2CStartGameLevel
     * @static
     * @param {IS2CStartGameLevel=} [properties] Properties to set
     * @returns {S2CStartGameLevel} S2CStartGameLevel instance
     */
    S2CStartGameLevel.create = function create(properties) {
        return new S2CStartGameLevel(properties);
    };

    /**
     * Encodes the specified S2CStartGameLevel message. Does not implicitly {@link S2CStartGameLevel.verify|verify} messages.
     * @function encode
     * @memberof S2CStartGameLevel
     * @static
     * @param {IS2CStartGameLevel} message S2CStartGameLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CStartGameLevel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified S2CStartGameLevel message, length delimited. Does not implicitly {@link S2CStartGameLevel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CStartGameLevel
     * @static
     * @param {IS2CStartGameLevel} message S2CStartGameLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CStartGameLevel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CStartGameLevel message from the specified reader or buffer.
     * @function decode
     * @memberof S2CStartGameLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CStartGameLevel} S2CStartGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CStartGameLevel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CStartGameLevel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CStartGameLevel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CStartGameLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CStartGameLevel} S2CStartGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CStartGameLevel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CStartGameLevel message.
     * @function verify
     * @memberof S2CStartGameLevel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CStartGameLevel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a S2CStartGameLevel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CStartGameLevel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CStartGameLevel} S2CStartGameLevel
     */
    S2CStartGameLevel.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CStartGameLevel)
            return object;
        return new $root.S2CStartGameLevel();
    };

    /**
     * Creates a plain object from a S2CStartGameLevel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CStartGameLevel
     * @static
     * @param {S2CStartGameLevel} message S2CStartGameLevel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CStartGameLevel.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this S2CStartGameLevel to JSON.
     * @function toJSON
     * @memberof S2CStartGameLevel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CStartGameLevel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CStartGameLevel
     * @function getTypeUrl
     * @memberof S2CStartGameLevel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CStartGameLevel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CStartGameLevel";
    };

    return S2CStartGameLevel;
})();

$root.C2SEndGameLevel = (function() {

    /**
     * Properties of a C2SEndGameLevel.
     * @exports IC2SEndGameLevel
     * @interface IC2SEndGameLevel
     * @property {number|null} [levelid] C2SEndGameLevel levelid
     */

    /**
     * Constructs a new C2SEndGameLevel.
     * @exports C2SEndGameLevel
     * @classdesc Represents a C2SEndGameLevel.
     * @implements IC2SEndGameLevel
     * @constructor
     * @param {IC2SEndGameLevel=} [properties] Properties to set
     */
    function C2SEndGameLevel(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SEndGameLevel levelid.
     * @member {number} levelid
     * @memberof C2SEndGameLevel
     * @instance
     */
    C2SEndGameLevel.prototype.levelid = 0;

    /**
     * Creates a new C2SEndGameLevel instance using the specified properties.
     * @function create
     * @memberof C2SEndGameLevel
     * @static
     * @param {IC2SEndGameLevel=} [properties] Properties to set
     * @returns {C2SEndGameLevel} C2SEndGameLevel instance
     */
    C2SEndGameLevel.create = function create(properties) {
        return new C2SEndGameLevel(properties);
    };

    /**
     * Encodes the specified C2SEndGameLevel message. Does not implicitly {@link C2SEndGameLevel.verify|verify} messages.
     * @function encode
     * @memberof C2SEndGameLevel
     * @static
     * @param {IC2SEndGameLevel} message C2SEndGameLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SEndGameLevel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.levelid != null && Object.hasOwnProperty.call(message, "levelid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.levelid);
        return writer;
    };

    /**
     * Encodes the specified C2SEndGameLevel message, length delimited. Does not implicitly {@link C2SEndGameLevel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SEndGameLevel
     * @static
     * @param {IC2SEndGameLevel} message C2SEndGameLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SEndGameLevel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SEndGameLevel message from the specified reader or buffer.
     * @function decode
     * @memberof C2SEndGameLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SEndGameLevel} C2SEndGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SEndGameLevel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SEndGameLevel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.levelid = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SEndGameLevel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SEndGameLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SEndGameLevel} C2SEndGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SEndGameLevel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SEndGameLevel message.
     * @function verify
     * @memberof C2SEndGameLevel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SEndGameLevel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.levelid != null && message.hasOwnProperty("levelid"))
            if (!$util.isInteger(message.levelid))
                return "levelid: integer expected";
        return null;
    };

    /**
     * Creates a C2SEndGameLevel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SEndGameLevel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SEndGameLevel} C2SEndGameLevel
     */
    C2SEndGameLevel.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SEndGameLevel)
            return object;
        var message = new $root.C2SEndGameLevel();
        if (object.levelid != null)
            message.levelid = object.levelid | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SEndGameLevel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SEndGameLevel
     * @static
     * @param {C2SEndGameLevel} message C2SEndGameLevel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SEndGameLevel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.levelid = 0;
        if (message.levelid != null && message.hasOwnProperty("levelid"))
            object.levelid = message.levelid;
        return object;
    };

    /**
     * Converts this C2SEndGameLevel to JSON.
     * @function toJSON
     * @memberof C2SEndGameLevel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SEndGameLevel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SEndGameLevel
     * @function getTypeUrl
     * @memberof C2SEndGameLevel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SEndGameLevel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SEndGameLevel";
    };

    return C2SEndGameLevel;
})();

$root.S2CEndGameLevel = (function() {

    /**
     * Properties of a S2CEndGameLevel.
     * @exports IS2CEndGameLevel
     * @interface IS2CEndGameLevel
     * @property {number|null} [round] S2CEndGameLevel round
     * @property {number|null} [battleresult] S2CEndGameLevel battleresult
     */

    /**
     * Constructs a new S2CEndGameLevel.
     * @exports S2CEndGameLevel
     * @classdesc Represents a S2CEndGameLevel.
     * @implements IS2CEndGameLevel
     * @constructor
     * @param {IS2CEndGameLevel=} [properties] Properties to set
     */
    function S2CEndGameLevel(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CEndGameLevel round.
     * @member {number} round
     * @memberof S2CEndGameLevel
     * @instance
     */
    S2CEndGameLevel.prototype.round = 0;

    /**
     * S2CEndGameLevel battleresult.
     * @member {number} battleresult
     * @memberof S2CEndGameLevel
     * @instance
     */
    S2CEndGameLevel.prototype.battleresult = 0;

    /**
     * Creates a new S2CEndGameLevel instance using the specified properties.
     * @function create
     * @memberof S2CEndGameLevel
     * @static
     * @param {IS2CEndGameLevel=} [properties] Properties to set
     * @returns {S2CEndGameLevel} S2CEndGameLevel instance
     */
    S2CEndGameLevel.create = function create(properties) {
        return new S2CEndGameLevel(properties);
    };

    /**
     * Encodes the specified S2CEndGameLevel message. Does not implicitly {@link S2CEndGameLevel.verify|verify} messages.
     * @function encode
     * @memberof S2CEndGameLevel
     * @static
     * @param {IS2CEndGameLevel} message S2CEndGameLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEndGameLevel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.round != null && Object.hasOwnProperty.call(message, "round"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.round);
        if (message.battleresult != null && Object.hasOwnProperty.call(message, "battleresult"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.battleresult);
        return writer;
    };

    /**
     * Encodes the specified S2CEndGameLevel message, length delimited. Does not implicitly {@link S2CEndGameLevel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CEndGameLevel
     * @static
     * @param {IS2CEndGameLevel} message S2CEndGameLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEndGameLevel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CEndGameLevel message from the specified reader or buffer.
     * @function decode
     * @memberof S2CEndGameLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CEndGameLevel} S2CEndGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEndGameLevel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CEndGameLevel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.round = reader.int32();
                    break;
                }
            case 2: {
                    message.battleresult = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CEndGameLevel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CEndGameLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CEndGameLevel} S2CEndGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEndGameLevel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CEndGameLevel message.
     * @function verify
     * @memberof S2CEndGameLevel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CEndGameLevel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.round != null && message.hasOwnProperty("round"))
            if (!$util.isInteger(message.round))
                return "round: integer expected";
        if (message.battleresult != null && message.hasOwnProperty("battleresult"))
            if (!$util.isInteger(message.battleresult))
                return "battleresult: integer expected";
        return null;
    };

    /**
     * Creates a S2CEndGameLevel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CEndGameLevel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CEndGameLevel} S2CEndGameLevel
     */
    S2CEndGameLevel.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CEndGameLevel)
            return object;
        var message = new $root.S2CEndGameLevel();
        if (object.round != null)
            message.round = object.round | 0;
        if (object.battleresult != null)
            message.battleresult = object.battleresult | 0;
        return message;
    };

    /**
     * Creates a plain object from a S2CEndGameLevel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CEndGameLevel
     * @static
     * @param {S2CEndGameLevel} message S2CEndGameLevel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CEndGameLevel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.round = 0;
            object.battleresult = 0;
        }
        if (message.round != null && message.hasOwnProperty("round"))
            object.round = message.round;
        if (message.battleresult != null && message.hasOwnProperty("battleresult"))
            object.battleresult = message.battleresult;
        return object;
    };

    /**
     * Converts this S2CEndGameLevel to JSON.
     * @function toJSON
     * @memberof S2CEndGameLevel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CEndGameLevel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CEndGameLevel
     * @function getTypeUrl
     * @memberof S2CEndGameLevel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CEndGameLevel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CEndGameLevel";
    };

    return S2CEndGameLevel;
})();

$root.C2SUpRoleLevel = (function() {

    /**
     * Properties of a C2SUpRoleLevel.
     * @exports IC2SUpRoleLevel
     * @interface IC2SUpRoleLevel
     */

    /**
     * Constructs a new C2SUpRoleLevel.
     * @exports C2SUpRoleLevel
     * @classdesc Represents a C2SUpRoleLevel.
     * @implements IC2SUpRoleLevel
     * @constructor
     * @param {IC2SUpRoleLevel=} [properties] Properties to set
     */
    function C2SUpRoleLevel(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2SUpRoleLevel instance using the specified properties.
     * @function create
     * @memberof C2SUpRoleLevel
     * @static
     * @param {IC2SUpRoleLevel=} [properties] Properties to set
     * @returns {C2SUpRoleLevel} C2SUpRoleLevel instance
     */
    C2SUpRoleLevel.create = function create(properties) {
        return new C2SUpRoleLevel(properties);
    };

    /**
     * Encodes the specified C2SUpRoleLevel message. Does not implicitly {@link C2SUpRoleLevel.verify|verify} messages.
     * @function encode
     * @memberof C2SUpRoleLevel
     * @static
     * @param {IC2SUpRoleLevel} message C2SUpRoleLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SUpRoleLevel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2SUpRoleLevel message, length delimited. Does not implicitly {@link C2SUpRoleLevel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SUpRoleLevel
     * @static
     * @param {IC2SUpRoleLevel} message C2SUpRoleLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SUpRoleLevel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SUpRoleLevel message from the specified reader or buffer.
     * @function decode
     * @memberof C2SUpRoleLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SUpRoleLevel} C2SUpRoleLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SUpRoleLevel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SUpRoleLevel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SUpRoleLevel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SUpRoleLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SUpRoleLevel} C2SUpRoleLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SUpRoleLevel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SUpRoleLevel message.
     * @function verify
     * @memberof C2SUpRoleLevel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SUpRoleLevel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2SUpRoleLevel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SUpRoleLevel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SUpRoleLevel} C2SUpRoleLevel
     */
    C2SUpRoleLevel.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SUpRoleLevel)
            return object;
        return new $root.C2SUpRoleLevel();
    };

    /**
     * Creates a plain object from a C2SUpRoleLevel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SUpRoleLevel
     * @static
     * @param {C2SUpRoleLevel} message C2SUpRoleLevel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SUpRoleLevel.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2SUpRoleLevel to JSON.
     * @function toJSON
     * @memberof C2SUpRoleLevel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SUpRoleLevel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SUpRoleLevel
     * @function getTypeUrl
     * @memberof C2SUpRoleLevel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SUpRoleLevel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SUpRoleLevel";
    };

    return C2SUpRoleLevel;
})();

$root.S2CUpRoleLevel = (function() {

    /**
     * Properties of a S2CUpRoleLevel.
     * @exports IS2CUpRoleLevel
     * @interface IS2CUpRoleLevel
     */

    /**
     * Constructs a new S2CUpRoleLevel.
     * @exports S2CUpRoleLevel
     * @classdesc Represents a S2CUpRoleLevel.
     * @implements IS2CUpRoleLevel
     * @constructor
     * @param {IS2CUpRoleLevel=} [properties] Properties to set
     */
    function S2CUpRoleLevel(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new S2CUpRoleLevel instance using the specified properties.
     * @function create
     * @memberof S2CUpRoleLevel
     * @static
     * @param {IS2CUpRoleLevel=} [properties] Properties to set
     * @returns {S2CUpRoleLevel} S2CUpRoleLevel instance
     */
    S2CUpRoleLevel.create = function create(properties) {
        return new S2CUpRoleLevel(properties);
    };

    /**
     * Encodes the specified S2CUpRoleLevel message. Does not implicitly {@link S2CUpRoleLevel.verify|verify} messages.
     * @function encode
     * @memberof S2CUpRoleLevel
     * @static
     * @param {IS2CUpRoleLevel} message S2CUpRoleLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUpRoleLevel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified S2CUpRoleLevel message, length delimited. Does not implicitly {@link S2CUpRoleLevel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUpRoleLevel
     * @static
     * @param {IS2CUpRoleLevel} message S2CUpRoleLevel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUpRoleLevel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUpRoleLevel message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUpRoleLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUpRoleLevel} S2CUpRoleLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUpRoleLevel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUpRoleLevel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUpRoleLevel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUpRoleLevel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUpRoleLevel} S2CUpRoleLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUpRoleLevel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUpRoleLevel message.
     * @function verify
     * @memberof S2CUpRoleLevel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUpRoleLevel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a S2CUpRoleLevel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUpRoleLevel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUpRoleLevel} S2CUpRoleLevel
     */
    S2CUpRoleLevel.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUpRoleLevel)
            return object;
        return new $root.S2CUpRoleLevel();
    };

    /**
     * Creates a plain object from a S2CUpRoleLevel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUpRoleLevel
     * @static
     * @param {S2CUpRoleLevel} message S2CUpRoleLevel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUpRoleLevel.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this S2CUpRoleLevel to JSON.
     * @function toJSON
     * @memberof S2CUpRoleLevel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUpRoleLevel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CUpRoleLevel
     * @function getTypeUrl
     * @memberof S2CUpRoleLevel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CUpRoleLevel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CUpRoleLevel";
    };

    return S2CUpRoleLevel;
})();

$root.C2SAddAttributePoint = (function() {

    /**
     * Properties of a C2SAddAttributePoint.
     * @exports IC2SAddAttributePoint
     * @interface IC2SAddAttributePoint
     * @property {number|null} [numerictype] C2SAddAttributePoint numerictype
     */

    /**
     * Constructs a new C2SAddAttributePoint.
     * @exports C2SAddAttributePoint
     * @classdesc Represents a C2SAddAttributePoint.
     * @implements IC2SAddAttributePoint
     * @constructor
     * @param {IC2SAddAttributePoint=} [properties] Properties to set
     */
    function C2SAddAttributePoint(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SAddAttributePoint numerictype.
     * @member {number} numerictype
     * @memberof C2SAddAttributePoint
     * @instance
     */
    C2SAddAttributePoint.prototype.numerictype = 0;

    /**
     * Creates a new C2SAddAttributePoint instance using the specified properties.
     * @function create
     * @memberof C2SAddAttributePoint
     * @static
     * @param {IC2SAddAttributePoint=} [properties] Properties to set
     * @returns {C2SAddAttributePoint} C2SAddAttributePoint instance
     */
    C2SAddAttributePoint.create = function create(properties) {
        return new C2SAddAttributePoint(properties);
    };

    /**
     * Encodes the specified C2SAddAttributePoint message. Does not implicitly {@link C2SAddAttributePoint.verify|verify} messages.
     * @function encode
     * @memberof C2SAddAttributePoint
     * @static
     * @param {IC2SAddAttributePoint} message C2SAddAttributePoint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SAddAttributePoint.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.numerictype != null && Object.hasOwnProperty.call(message, "numerictype"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.numerictype);
        return writer;
    };

    /**
     * Encodes the specified C2SAddAttributePoint message, length delimited. Does not implicitly {@link C2SAddAttributePoint.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SAddAttributePoint
     * @static
     * @param {IC2SAddAttributePoint} message C2SAddAttributePoint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SAddAttributePoint.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SAddAttributePoint message from the specified reader or buffer.
     * @function decode
     * @memberof C2SAddAttributePoint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SAddAttributePoint} C2SAddAttributePoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SAddAttributePoint.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SAddAttributePoint();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.numerictype = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SAddAttributePoint message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SAddAttributePoint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SAddAttributePoint} C2SAddAttributePoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SAddAttributePoint.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SAddAttributePoint message.
     * @function verify
     * @memberof C2SAddAttributePoint
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SAddAttributePoint.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.numerictype != null && message.hasOwnProperty("numerictype"))
            if (!$util.isInteger(message.numerictype))
                return "numerictype: integer expected";
        return null;
    };

    /**
     * Creates a C2SAddAttributePoint message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SAddAttributePoint
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SAddAttributePoint} C2SAddAttributePoint
     */
    C2SAddAttributePoint.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SAddAttributePoint)
            return object;
        var message = new $root.C2SAddAttributePoint();
        if (object.numerictype != null)
            message.numerictype = object.numerictype | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SAddAttributePoint message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SAddAttributePoint
     * @static
     * @param {C2SAddAttributePoint} message C2SAddAttributePoint
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SAddAttributePoint.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.numerictype = 0;
        if (message.numerictype != null && message.hasOwnProperty("numerictype"))
            object.numerictype = message.numerictype;
        return object;
    };

    /**
     * Converts this C2SAddAttributePoint to JSON.
     * @function toJSON
     * @memberof C2SAddAttributePoint
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SAddAttributePoint.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SAddAttributePoint
     * @function getTypeUrl
     * @memberof C2SAddAttributePoint
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SAddAttributePoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SAddAttributePoint";
    };

    return C2SAddAttributePoint;
})();

$root.S2CAddAttributePoint = (function() {

    /**
     * Properties of a S2CAddAttributePoint.
     * @exports IS2CAddAttributePoint
     * @interface IS2CAddAttributePoint
     */

    /**
     * Constructs a new S2CAddAttributePoint.
     * @exports S2CAddAttributePoint
     * @classdesc Represents a S2CAddAttributePoint.
     * @implements IS2CAddAttributePoint
     * @constructor
     * @param {IS2CAddAttributePoint=} [properties] Properties to set
     */
    function S2CAddAttributePoint(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new S2CAddAttributePoint instance using the specified properties.
     * @function create
     * @memberof S2CAddAttributePoint
     * @static
     * @param {IS2CAddAttributePoint=} [properties] Properties to set
     * @returns {S2CAddAttributePoint} S2CAddAttributePoint instance
     */
    S2CAddAttributePoint.create = function create(properties) {
        return new S2CAddAttributePoint(properties);
    };

    /**
     * Encodes the specified S2CAddAttributePoint message. Does not implicitly {@link S2CAddAttributePoint.verify|verify} messages.
     * @function encode
     * @memberof S2CAddAttributePoint
     * @static
     * @param {IS2CAddAttributePoint} message S2CAddAttributePoint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CAddAttributePoint.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified S2CAddAttributePoint message, length delimited. Does not implicitly {@link S2CAddAttributePoint.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CAddAttributePoint
     * @static
     * @param {IS2CAddAttributePoint} message S2CAddAttributePoint message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CAddAttributePoint.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CAddAttributePoint message from the specified reader or buffer.
     * @function decode
     * @memberof S2CAddAttributePoint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CAddAttributePoint} S2CAddAttributePoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CAddAttributePoint.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CAddAttributePoint();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CAddAttributePoint message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CAddAttributePoint
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CAddAttributePoint} S2CAddAttributePoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CAddAttributePoint.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CAddAttributePoint message.
     * @function verify
     * @memberof S2CAddAttributePoint
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CAddAttributePoint.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a S2CAddAttributePoint message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CAddAttributePoint
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CAddAttributePoint} S2CAddAttributePoint
     */
    S2CAddAttributePoint.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CAddAttributePoint)
            return object;
        return new $root.S2CAddAttributePoint();
    };

    /**
     * Creates a plain object from a S2CAddAttributePoint message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CAddAttributePoint
     * @static
     * @param {S2CAddAttributePoint} message S2CAddAttributePoint
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CAddAttributePoint.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this S2CAddAttributePoint to JSON.
     * @function toJSON
     * @memberof S2CAddAttributePoint
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CAddAttributePoint.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CAddAttributePoint
     * @function getTypeUrl
     * @memberof S2CAddAttributePoint
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CAddAttributePoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CAddAttributePoint";
    };

    return S2CAddAttributePoint;
})();

$root.C2SSellItem = (function() {

    /**
     * Properties of a C2SSellItem.
     * @exports IC2SSellItem
     * @interface IC2SSellItem
     * @property {number|null} [itemid] C2SSellItem itemid
     */

    /**
     * Constructs a new C2SSellItem.
     * @exports C2SSellItem
     * @classdesc Represents a C2SSellItem.
     * @implements IC2SSellItem
     * @constructor
     * @param {IC2SSellItem=} [properties] Properties to set
     */
    function C2SSellItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SSellItem itemid.
     * @member {number} itemid
     * @memberof C2SSellItem
     * @instance
     */
    C2SSellItem.prototype.itemid = 0;

    /**
     * Creates a new C2SSellItem instance using the specified properties.
     * @function create
     * @memberof C2SSellItem
     * @static
     * @param {IC2SSellItem=} [properties] Properties to set
     * @returns {C2SSellItem} C2SSellItem instance
     */
    C2SSellItem.create = function create(properties) {
        return new C2SSellItem(properties);
    };

    /**
     * Encodes the specified C2SSellItem message. Does not implicitly {@link C2SSellItem.verify|verify} messages.
     * @function encode
     * @memberof C2SSellItem
     * @static
     * @param {IC2SSellItem} message C2SSellItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SSellItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.itemid != null && Object.hasOwnProperty.call(message, "itemid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemid);
        return writer;
    };

    /**
     * Encodes the specified C2SSellItem message, length delimited. Does not implicitly {@link C2SSellItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SSellItem
     * @static
     * @param {IC2SSellItem} message C2SSellItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SSellItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SSellItem message from the specified reader or buffer.
     * @function decode
     * @memberof C2SSellItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SSellItem} C2SSellItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SSellItem.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SSellItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.itemid = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SSellItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SSellItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SSellItem} C2SSellItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SSellItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SSellItem message.
     * @function verify
     * @memberof C2SSellItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SSellItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.itemid != null && message.hasOwnProperty("itemid"))
            if (!$util.isInteger(message.itemid))
                return "itemid: integer expected";
        return null;
    };

    /**
     * Creates a C2SSellItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SSellItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SSellItem} C2SSellItem
     */
    C2SSellItem.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SSellItem)
            return object;
        var message = new $root.C2SSellItem();
        if (object.itemid != null)
            message.itemid = object.itemid | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SSellItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SSellItem
     * @static
     * @param {C2SSellItem} message C2SSellItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SSellItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.itemid = 0;
        if (message.itemid != null && message.hasOwnProperty("itemid"))
            object.itemid = message.itemid;
        return object;
    };

    /**
     * Converts this C2SSellItem to JSON.
     * @function toJSON
     * @memberof C2SSellItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SSellItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SSellItem
     * @function getTypeUrl
     * @memberof C2SSellItem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SSellItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SSellItem";
    };

    return C2SSellItem;
})();

$root.S2CSellItem = (function() {

    /**
     * Properties of a S2CSellItem.
     * @exports IS2CSellItem
     * @interface IS2CSellItem
     */

    /**
     * Constructs a new S2CSellItem.
     * @exports S2CSellItem
     * @classdesc Represents a S2CSellItem.
     * @implements IS2CSellItem
     * @constructor
     * @param {IS2CSellItem=} [properties] Properties to set
     */
    function S2CSellItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new S2CSellItem instance using the specified properties.
     * @function create
     * @memberof S2CSellItem
     * @static
     * @param {IS2CSellItem=} [properties] Properties to set
     * @returns {S2CSellItem} S2CSellItem instance
     */
    S2CSellItem.create = function create(properties) {
        return new S2CSellItem(properties);
    };

    /**
     * Encodes the specified S2CSellItem message. Does not implicitly {@link S2CSellItem.verify|verify} messages.
     * @function encode
     * @memberof S2CSellItem
     * @static
     * @param {IS2CSellItem} message S2CSellItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CSellItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified S2CSellItem message, length delimited. Does not implicitly {@link S2CSellItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CSellItem
     * @static
     * @param {IS2CSellItem} message S2CSellItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CSellItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CSellItem message from the specified reader or buffer.
     * @function decode
     * @memberof S2CSellItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CSellItem} S2CSellItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CSellItem.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CSellItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CSellItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CSellItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CSellItem} S2CSellItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CSellItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CSellItem message.
     * @function verify
     * @memberof S2CSellItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CSellItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a S2CSellItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CSellItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CSellItem} S2CSellItem
     */
    S2CSellItem.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CSellItem)
            return object;
        return new $root.S2CSellItem();
    };

    /**
     * Creates a plain object from a S2CSellItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CSellItem
     * @static
     * @param {S2CSellItem} message S2CSellItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CSellItem.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this S2CSellItem to JSON.
     * @function toJSON
     * @memberof S2CSellItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CSellItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CSellItem
     * @function getTypeUrl
     * @memberof S2CSellItem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CSellItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CSellItem";
    };

    return S2CSellItem;
})();

$root.C2SEquipItem = (function() {

    /**
     * Properties of a C2SEquipItem.
     * @exports IC2SEquipItem
     * @interface IC2SEquipItem
     * @property {number|null} [itemid] C2SEquipItem itemid
     */

    /**
     * Constructs a new C2SEquipItem.
     * @exports C2SEquipItem
     * @classdesc Represents a C2SEquipItem.
     * @implements IC2SEquipItem
     * @constructor
     * @param {IC2SEquipItem=} [properties] Properties to set
     */
    function C2SEquipItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SEquipItem itemid.
     * @member {number} itemid
     * @memberof C2SEquipItem
     * @instance
     */
    C2SEquipItem.prototype.itemid = 0;

    /**
     * Creates a new C2SEquipItem instance using the specified properties.
     * @function create
     * @memberof C2SEquipItem
     * @static
     * @param {IC2SEquipItem=} [properties] Properties to set
     * @returns {C2SEquipItem} C2SEquipItem instance
     */
    C2SEquipItem.create = function create(properties) {
        return new C2SEquipItem(properties);
    };

    /**
     * Encodes the specified C2SEquipItem message. Does not implicitly {@link C2SEquipItem.verify|verify} messages.
     * @function encode
     * @memberof C2SEquipItem
     * @static
     * @param {IC2SEquipItem} message C2SEquipItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SEquipItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.itemid != null && Object.hasOwnProperty.call(message, "itemid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemid);
        return writer;
    };

    /**
     * Encodes the specified C2SEquipItem message, length delimited. Does not implicitly {@link C2SEquipItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SEquipItem
     * @static
     * @param {IC2SEquipItem} message C2SEquipItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SEquipItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SEquipItem message from the specified reader or buffer.
     * @function decode
     * @memberof C2SEquipItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SEquipItem} C2SEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SEquipItem.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SEquipItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.itemid = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SEquipItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SEquipItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SEquipItem} C2SEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SEquipItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SEquipItem message.
     * @function verify
     * @memberof C2SEquipItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SEquipItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.itemid != null && message.hasOwnProperty("itemid"))
            if (!$util.isInteger(message.itemid))
                return "itemid: integer expected";
        return null;
    };

    /**
     * Creates a C2SEquipItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SEquipItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SEquipItem} C2SEquipItem
     */
    C2SEquipItem.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SEquipItem)
            return object;
        var message = new $root.C2SEquipItem();
        if (object.itemid != null)
            message.itemid = object.itemid | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SEquipItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SEquipItem
     * @static
     * @param {C2SEquipItem} message C2SEquipItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SEquipItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.itemid = 0;
        if (message.itemid != null && message.hasOwnProperty("itemid"))
            object.itemid = message.itemid;
        return object;
    };

    /**
     * Converts this C2SEquipItem to JSON.
     * @function toJSON
     * @memberof C2SEquipItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SEquipItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SEquipItem
     * @function getTypeUrl
     * @memberof C2SEquipItem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SEquipItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SEquipItem";
    };

    return C2SEquipItem;
})();

$root.S2CEquipItem = (function() {

    /**
     * Properties of a S2CEquipItem.
     * @exports IS2CEquipItem
     * @interface IS2CEquipItem
     */

    /**
     * Constructs a new S2CEquipItem.
     * @exports S2CEquipItem
     * @classdesc Represents a S2CEquipItem.
     * @implements IS2CEquipItem
     * @constructor
     * @param {IS2CEquipItem=} [properties] Properties to set
     */
    function S2CEquipItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new S2CEquipItem instance using the specified properties.
     * @function create
     * @memberof S2CEquipItem
     * @static
     * @param {IS2CEquipItem=} [properties] Properties to set
     * @returns {S2CEquipItem} S2CEquipItem instance
     */
    S2CEquipItem.create = function create(properties) {
        return new S2CEquipItem(properties);
    };

    /**
     * Encodes the specified S2CEquipItem message. Does not implicitly {@link S2CEquipItem.verify|verify} messages.
     * @function encode
     * @memberof S2CEquipItem
     * @static
     * @param {IS2CEquipItem} message S2CEquipItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEquipItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified S2CEquipItem message, length delimited. Does not implicitly {@link S2CEquipItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CEquipItem
     * @static
     * @param {IS2CEquipItem} message S2CEquipItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEquipItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CEquipItem message from the specified reader or buffer.
     * @function decode
     * @memberof S2CEquipItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CEquipItem} S2CEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEquipItem.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CEquipItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CEquipItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CEquipItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CEquipItem} S2CEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEquipItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CEquipItem message.
     * @function verify
     * @memberof S2CEquipItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CEquipItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a S2CEquipItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CEquipItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CEquipItem} S2CEquipItem
     */
    S2CEquipItem.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CEquipItem)
            return object;
        return new $root.S2CEquipItem();
    };

    /**
     * Creates a plain object from a S2CEquipItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CEquipItem
     * @static
     * @param {S2CEquipItem} message S2CEquipItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CEquipItem.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this S2CEquipItem to JSON.
     * @function toJSON
     * @memberof S2CEquipItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CEquipItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CEquipItem
     * @function getTypeUrl
     * @memberof S2CEquipItem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CEquipItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CEquipItem";
    };

    return S2CEquipItem;
})();

$root.C2SUnLoadEquipItem = (function() {

    /**
     * Properties of a C2SUnLoadEquipItem.
     * @exports IC2SUnLoadEquipItem
     * @interface IC2SUnLoadEquipItem
     * @property {number|null} [equipposition] C2SUnLoadEquipItem equipposition
     */

    /**
     * Constructs a new C2SUnLoadEquipItem.
     * @exports C2SUnLoadEquipItem
     * @classdesc Represents a C2SUnLoadEquipItem.
     * @implements IC2SUnLoadEquipItem
     * @constructor
     * @param {IC2SUnLoadEquipItem=} [properties] Properties to set
     */
    function C2SUnLoadEquipItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SUnLoadEquipItem equipposition.
     * @member {number} equipposition
     * @memberof C2SUnLoadEquipItem
     * @instance
     */
    C2SUnLoadEquipItem.prototype.equipposition = 0;

    /**
     * Creates a new C2SUnLoadEquipItem instance using the specified properties.
     * @function create
     * @memberof C2SUnLoadEquipItem
     * @static
     * @param {IC2SUnLoadEquipItem=} [properties] Properties to set
     * @returns {C2SUnLoadEquipItem} C2SUnLoadEquipItem instance
     */
    C2SUnLoadEquipItem.create = function create(properties) {
        return new C2SUnLoadEquipItem(properties);
    };

    /**
     * Encodes the specified C2SUnLoadEquipItem message. Does not implicitly {@link C2SUnLoadEquipItem.verify|verify} messages.
     * @function encode
     * @memberof C2SUnLoadEquipItem
     * @static
     * @param {IC2SUnLoadEquipItem} message C2SUnLoadEquipItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SUnLoadEquipItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.equipposition != null && Object.hasOwnProperty.call(message, "equipposition"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.equipposition);
        return writer;
    };

    /**
     * Encodes the specified C2SUnLoadEquipItem message, length delimited. Does not implicitly {@link C2SUnLoadEquipItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SUnLoadEquipItem
     * @static
     * @param {IC2SUnLoadEquipItem} message C2SUnLoadEquipItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SUnLoadEquipItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SUnLoadEquipItem message from the specified reader or buffer.
     * @function decode
     * @memberof C2SUnLoadEquipItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SUnLoadEquipItem} C2SUnLoadEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SUnLoadEquipItem.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SUnLoadEquipItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.equipposition = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SUnLoadEquipItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SUnLoadEquipItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SUnLoadEquipItem} C2SUnLoadEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SUnLoadEquipItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SUnLoadEquipItem message.
     * @function verify
     * @memberof C2SUnLoadEquipItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SUnLoadEquipItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.equipposition != null && message.hasOwnProperty("equipposition"))
            if (!$util.isInteger(message.equipposition))
                return "equipposition: integer expected";
        return null;
    };

    /**
     * Creates a C2SUnLoadEquipItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SUnLoadEquipItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SUnLoadEquipItem} C2SUnLoadEquipItem
     */
    C2SUnLoadEquipItem.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SUnLoadEquipItem)
            return object;
        var message = new $root.C2SUnLoadEquipItem();
        if (object.equipposition != null)
            message.equipposition = object.equipposition | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SUnLoadEquipItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SUnLoadEquipItem
     * @static
     * @param {C2SUnLoadEquipItem} message C2SUnLoadEquipItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SUnLoadEquipItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.equipposition = 0;
        if (message.equipposition != null && message.hasOwnProperty("equipposition"))
            object.equipposition = message.equipposition;
        return object;
    };

    /**
     * Converts this C2SUnLoadEquipItem to JSON.
     * @function toJSON
     * @memberof C2SUnLoadEquipItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SUnLoadEquipItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SUnLoadEquipItem
     * @function getTypeUrl
     * @memberof C2SUnLoadEquipItem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SUnLoadEquipItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SUnLoadEquipItem";
    };

    return C2SUnLoadEquipItem;
})();

$root.S2CUnLoadEquipItem = (function() {

    /**
     * Properties of a S2CUnLoadEquipItem.
     * @exports IS2CUnLoadEquipItem
     * @interface IS2CUnLoadEquipItem
     */

    /**
     * Constructs a new S2CUnLoadEquipItem.
     * @exports S2CUnLoadEquipItem
     * @classdesc Represents a S2CUnLoadEquipItem.
     * @implements IS2CUnLoadEquipItem
     * @constructor
     * @param {IS2CUnLoadEquipItem=} [properties] Properties to set
     */
    function S2CUnLoadEquipItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new S2CUnLoadEquipItem instance using the specified properties.
     * @function create
     * @memberof S2CUnLoadEquipItem
     * @static
     * @param {IS2CUnLoadEquipItem=} [properties] Properties to set
     * @returns {S2CUnLoadEquipItem} S2CUnLoadEquipItem instance
     */
    S2CUnLoadEquipItem.create = function create(properties) {
        return new S2CUnLoadEquipItem(properties);
    };

    /**
     * Encodes the specified S2CUnLoadEquipItem message. Does not implicitly {@link S2CUnLoadEquipItem.verify|verify} messages.
     * @function encode
     * @memberof S2CUnLoadEquipItem
     * @static
     * @param {IS2CUnLoadEquipItem} message S2CUnLoadEquipItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUnLoadEquipItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified S2CUnLoadEquipItem message, length delimited. Does not implicitly {@link S2CUnLoadEquipItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUnLoadEquipItem
     * @static
     * @param {IS2CUnLoadEquipItem} message S2CUnLoadEquipItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUnLoadEquipItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUnLoadEquipItem message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUnLoadEquipItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUnLoadEquipItem} S2CUnLoadEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUnLoadEquipItem.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUnLoadEquipItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUnLoadEquipItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUnLoadEquipItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUnLoadEquipItem} S2CUnLoadEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUnLoadEquipItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUnLoadEquipItem message.
     * @function verify
     * @memberof S2CUnLoadEquipItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUnLoadEquipItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a S2CUnLoadEquipItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUnLoadEquipItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUnLoadEquipItem} S2CUnLoadEquipItem
     */
    S2CUnLoadEquipItem.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUnLoadEquipItem)
            return object;
        return new $root.S2CUnLoadEquipItem();
    };

    /**
     * Creates a plain object from a S2CUnLoadEquipItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUnLoadEquipItem
     * @static
     * @param {S2CUnLoadEquipItem} message S2CUnLoadEquipItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUnLoadEquipItem.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this S2CUnLoadEquipItem to JSON.
     * @function toJSON
     * @memberof S2CUnLoadEquipItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUnLoadEquipItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CUnLoadEquipItem
     * @function getTypeUrl
     * @memberof S2CUnLoadEquipItem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CUnLoadEquipItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CUnLoadEquipItem";
    };

    return S2CUnLoadEquipItem;
})();

$root.C2SSendChat = (function() {

    /**
     * Properties of a C2SSendChat.
     * @exports IC2SSendChat
     * @interface IC2SSendChat
     * @property {string|null} [msg] C2SSendChat msg
     */

    /**
     * Constructs a new C2SSendChat.
     * @exports C2SSendChat
     * @classdesc Represents a C2SSendChat.
     * @implements IC2SSendChat
     * @constructor
     * @param {IC2SSendChat=} [properties] Properties to set
     */
    function C2SSendChat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SSendChat msg.
     * @member {string} msg
     * @memberof C2SSendChat
     * @instance
     */
    C2SSendChat.prototype.msg = "";

    /**
     * Creates a new C2SSendChat instance using the specified properties.
     * @function create
     * @memberof C2SSendChat
     * @static
     * @param {IC2SSendChat=} [properties] Properties to set
     * @returns {C2SSendChat} C2SSendChat instance
     */
    C2SSendChat.create = function create(properties) {
        return new C2SSendChat(properties);
    };

    /**
     * Encodes the specified C2SSendChat message. Does not implicitly {@link C2SSendChat.verify|verify} messages.
     * @function encode
     * @memberof C2SSendChat
     * @static
     * @param {IC2SSendChat} message C2SSendChat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SSendChat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified C2SSendChat message, length delimited. Does not implicitly {@link C2SSendChat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SSendChat
     * @static
     * @param {IC2SSendChat} message C2SSendChat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SSendChat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SSendChat message from the specified reader or buffer.
     * @function decode
     * @memberof C2SSendChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SSendChat} C2SSendChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SSendChat.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SSendChat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.msg = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SSendChat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SSendChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SSendChat} C2SSendChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SSendChat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SSendChat message.
     * @function verify
     * @memberof C2SSendChat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SSendChat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        return null;
    };

    /**
     * Creates a C2SSendChat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SSendChat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SSendChat} C2SSendChat
     */
    C2SSendChat.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SSendChat)
            return object;
        var message = new $root.C2SSendChat();
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a C2SSendChat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SSendChat
     * @static
     * @param {C2SSendChat} message C2SSendChat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SSendChat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.msg = "";
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this C2SSendChat to JSON.
     * @function toJSON
     * @memberof C2SSendChat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SSendChat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SSendChat
     * @function getTypeUrl
     * @memberof C2SSendChat
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SSendChat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SSendChat";
    };

    return C2SSendChat;
})();

$root.S2CNoticeChat = (function() {

    /**
     * Properties of a S2CNoticeChat.
     * @exports IS2CNoticeChat
     * @interface IS2CNoticeChat
     * @property {string|null} [nickname] S2CNoticeChat nickname
     * @property {string|null} [msg] S2CNoticeChat msg
     */

    /**
     * Constructs a new S2CNoticeChat.
     * @exports S2CNoticeChat
     * @classdesc Represents a S2CNoticeChat.
     * @implements IS2CNoticeChat
     * @constructor
     * @param {IS2CNoticeChat=} [properties] Properties to set
     */
    function S2CNoticeChat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CNoticeChat nickname.
     * @member {string} nickname
     * @memberof S2CNoticeChat
     * @instance
     */
    S2CNoticeChat.prototype.nickname = "";

    /**
     * S2CNoticeChat msg.
     * @member {string} msg
     * @memberof S2CNoticeChat
     * @instance
     */
    S2CNoticeChat.prototype.msg = "";

    /**
     * Creates a new S2CNoticeChat instance using the specified properties.
     * @function create
     * @memberof S2CNoticeChat
     * @static
     * @param {IS2CNoticeChat=} [properties] Properties to set
     * @returns {S2CNoticeChat} S2CNoticeChat instance
     */
    S2CNoticeChat.create = function create(properties) {
        return new S2CNoticeChat(properties);
    };

    /**
     * Encodes the specified S2CNoticeChat message. Does not implicitly {@link S2CNoticeChat.verify|verify} messages.
     * @function encode
     * @memberof S2CNoticeChat
     * @static
     * @param {IS2CNoticeChat} message S2CNoticeChat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CNoticeChat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
        if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified S2CNoticeChat message, length delimited. Does not implicitly {@link S2CNoticeChat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CNoticeChat
     * @static
     * @param {IS2CNoticeChat} message S2CNoticeChat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CNoticeChat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CNoticeChat message from the specified reader or buffer.
     * @function decode
     * @memberof S2CNoticeChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CNoticeChat} S2CNoticeChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CNoticeChat.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CNoticeChat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.nickname = reader.string();
                    break;
                }
            case 2: {
                    message.msg = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CNoticeChat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CNoticeChat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CNoticeChat} S2CNoticeChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CNoticeChat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CNoticeChat message.
     * @function verify
     * @memberof S2CNoticeChat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CNoticeChat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.nickname != null && message.hasOwnProperty("nickname"))
            if (!$util.isString(message.nickname))
                return "nickname: string expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        return null;
    };

    /**
     * Creates a S2CNoticeChat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CNoticeChat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CNoticeChat} S2CNoticeChat
     */
    S2CNoticeChat.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CNoticeChat)
            return object;
        var message = new $root.S2CNoticeChat();
        if (object.nickname != null)
            message.nickname = String(object.nickname);
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a S2CNoticeChat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CNoticeChat
     * @static
     * @param {S2CNoticeChat} message S2CNoticeChat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CNoticeChat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nickname = "";
            object.msg = "";
        }
        if (message.nickname != null && message.hasOwnProperty("nickname"))
            object.nickname = message.nickname;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this S2CNoticeChat to JSON.
     * @function toJSON
     * @memberof S2CNoticeChat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CNoticeChat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CNoticeChat
     * @function getTypeUrl
     * @memberof S2CNoticeChat
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CNoticeChat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CNoticeChat";
    };

    return S2CNoticeChat;
})();

$root.C2SStartProduction = (function() {

    /**
     * Properties of a C2SStartProduction.
     * @exports IC2SStartProduction
     * @interface IC2SStartProduction
     * @property {number|null} [configid] C2SStartProduction configid
     */

    /**
     * Constructs a new C2SStartProduction.
     * @exports C2SStartProduction
     * @classdesc Represents a C2SStartProduction.
     * @implements IC2SStartProduction
     * @constructor
     * @param {IC2SStartProduction=} [properties] Properties to set
     */
    function C2SStartProduction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SStartProduction configid.
     * @member {number} configid
     * @memberof C2SStartProduction
     * @instance
     */
    C2SStartProduction.prototype.configid = 0;

    /**
     * Creates a new C2SStartProduction instance using the specified properties.
     * @function create
     * @memberof C2SStartProduction
     * @static
     * @param {IC2SStartProduction=} [properties] Properties to set
     * @returns {C2SStartProduction} C2SStartProduction instance
     */
    C2SStartProduction.create = function create(properties) {
        return new C2SStartProduction(properties);
    };

    /**
     * Encodes the specified C2SStartProduction message. Does not implicitly {@link C2SStartProduction.verify|verify} messages.
     * @function encode
     * @memberof C2SStartProduction
     * @static
     * @param {IC2SStartProduction} message C2SStartProduction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SStartProduction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.configid != null && Object.hasOwnProperty.call(message, "configid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.configid);
        return writer;
    };

    /**
     * Encodes the specified C2SStartProduction message, length delimited. Does not implicitly {@link C2SStartProduction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SStartProduction
     * @static
     * @param {IC2SStartProduction} message C2SStartProduction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SStartProduction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SStartProduction message from the specified reader or buffer.
     * @function decode
     * @memberof C2SStartProduction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SStartProduction} C2SStartProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SStartProduction.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SStartProduction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.configid = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SStartProduction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SStartProduction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SStartProduction} C2SStartProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SStartProduction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SStartProduction message.
     * @function verify
     * @memberof C2SStartProduction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SStartProduction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.configid != null && message.hasOwnProperty("configid"))
            if (!$util.isInteger(message.configid))
                return "configid: integer expected";
        return null;
    };

    /**
     * Creates a C2SStartProduction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SStartProduction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SStartProduction} C2SStartProduction
     */
    C2SStartProduction.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SStartProduction)
            return object;
        var message = new $root.C2SStartProduction();
        if (object.configid != null)
            message.configid = object.configid | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SStartProduction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SStartProduction
     * @static
     * @param {C2SStartProduction} message C2SStartProduction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SStartProduction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.configid = 0;
        if (message.configid != null && message.hasOwnProperty("configid"))
            object.configid = message.configid;
        return object;
    };

    /**
     * Converts this C2SStartProduction to JSON.
     * @function toJSON
     * @memberof C2SStartProduction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SStartProduction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SStartProduction
     * @function getTypeUrl
     * @memberof C2SStartProduction
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SStartProduction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SStartProduction";
    };

    return C2SStartProduction;
})();

$root.S2CStartProduction = (function() {

    /**
     * Properties of a S2CStartProduction.
     * @exports IS2CStartProduction
     * @interface IS2CStartProduction
     * @property {IProductionData|null} [productiondata] S2CStartProduction productiondata
     */

    /**
     * Constructs a new S2CStartProduction.
     * @exports S2CStartProduction
     * @classdesc Represents a S2CStartProduction.
     * @implements IS2CStartProduction
     * @constructor
     * @param {IS2CStartProduction=} [properties] Properties to set
     */
    function S2CStartProduction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CStartProduction productiondata.
     * @member {IProductionData|null|undefined} productiondata
     * @memberof S2CStartProduction
     * @instance
     */
    S2CStartProduction.prototype.productiondata = null;

    /**
     * Creates a new S2CStartProduction instance using the specified properties.
     * @function create
     * @memberof S2CStartProduction
     * @static
     * @param {IS2CStartProduction=} [properties] Properties to set
     * @returns {S2CStartProduction} S2CStartProduction instance
     */
    S2CStartProduction.create = function create(properties) {
        return new S2CStartProduction(properties);
    };

    /**
     * Encodes the specified S2CStartProduction message. Does not implicitly {@link S2CStartProduction.verify|verify} messages.
     * @function encode
     * @memberof S2CStartProduction
     * @static
     * @param {IS2CStartProduction} message S2CStartProduction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CStartProduction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.productiondata != null && Object.hasOwnProperty.call(message, "productiondata"))
            $root.ProductionData.encode(message.productiondata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CStartProduction message, length delimited. Does not implicitly {@link S2CStartProduction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CStartProduction
     * @static
     * @param {IS2CStartProduction} message S2CStartProduction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CStartProduction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CStartProduction message from the specified reader or buffer.
     * @function decode
     * @memberof S2CStartProduction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CStartProduction} S2CStartProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CStartProduction.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CStartProduction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.productiondata = $root.ProductionData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CStartProduction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CStartProduction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CStartProduction} S2CStartProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CStartProduction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CStartProduction message.
     * @function verify
     * @memberof S2CStartProduction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CStartProduction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.productiondata != null && message.hasOwnProperty("productiondata")) {
            var error = $root.ProductionData.verify(message.productiondata);
            if (error)
                return "productiondata." + error;
        }
        return null;
    };

    /**
     * Creates a S2CStartProduction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CStartProduction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CStartProduction} S2CStartProduction
     */
    S2CStartProduction.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CStartProduction)
            return object;
        var message = new $root.S2CStartProduction();
        if (object.productiondata != null) {
            if (typeof object.productiondata !== "object")
                throw TypeError(".S2CStartProduction.productiondata: object expected");
            message.productiondata = $root.ProductionData.fromObject(object.productiondata);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CStartProduction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CStartProduction
     * @static
     * @param {S2CStartProduction} message S2CStartProduction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CStartProduction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.productiondata = null;
        if (message.productiondata != null && message.hasOwnProperty("productiondata"))
            object.productiondata = $root.ProductionData.toObject(message.productiondata, options);
        return object;
    };

    /**
     * Converts this S2CStartProduction to JSON.
     * @function toJSON
     * @memberof S2CStartProduction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CStartProduction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CStartProduction
     * @function getTypeUrl
     * @memberof S2CStartProduction
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CStartProduction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CStartProduction";
    };

    return S2CStartProduction;
})();

$root.C2SReceiveProduction = (function() {

    /**
     * Properties of a C2SReceiveProduction.
     * @exports IC2SReceiveProduction
     * @interface IC2SReceiveProduction
     * @property {number|null} [configid] C2SReceiveProduction configid
     */

    /**
     * Constructs a new C2SReceiveProduction.
     * @exports C2SReceiveProduction
     * @classdesc Represents a C2SReceiveProduction.
     * @implements IC2SReceiveProduction
     * @constructor
     * @param {IC2SReceiveProduction=} [properties] Properties to set
     */
    function C2SReceiveProduction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SReceiveProduction configid.
     * @member {number} configid
     * @memberof C2SReceiveProduction
     * @instance
     */
    C2SReceiveProduction.prototype.configid = 0;

    /**
     * Creates a new C2SReceiveProduction instance using the specified properties.
     * @function create
     * @memberof C2SReceiveProduction
     * @static
     * @param {IC2SReceiveProduction=} [properties] Properties to set
     * @returns {C2SReceiveProduction} C2SReceiveProduction instance
     */
    C2SReceiveProduction.create = function create(properties) {
        return new C2SReceiveProduction(properties);
    };

    /**
     * Encodes the specified C2SReceiveProduction message. Does not implicitly {@link C2SReceiveProduction.verify|verify} messages.
     * @function encode
     * @memberof C2SReceiveProduction
     * @static
     * @param {IC2SReceiveProduction} message C2SReceiveProduction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SReceiveProduction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.configid != null && Object.hasOwnProperty.call(message, "configid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.configid);
        return writer;
    };

    /**
     * Encodes the specified C2SReceiveProduction message, length delimited. Does not implicitly {@link C2SReceiveProduction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SReceiveProduction
     * @static
     * @param {IC2SReceiveProduction} message C2SReceiveProduction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SReceiveProduction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SReceiveProduction message from the specified reader or buffer.
     * @function decode
     * @memberof C2SReceiveProduction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SReceiveProduction} C2SReceiveProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SReceiveProduction.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SReceiveProduction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.configid = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SReceiveProduction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SReceiveProduction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SReceiveProduction} C2SReceiveProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SReceiveProduction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SReceiveProduction message.
     * @function verify
     * @memberof C2SReceiveProduction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SReceiveProduction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.configid != null && message.hasOwnProperty("configid"))
            if (!$util.isInteger(message.configid))
                return "configid: integer expected";
        return null;
    };

    /**
     * Creates a C2SReceiveProduction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SReceiveProduction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SReceiveProduction} C2SReceiveProduction
     */
    C2SReceiveProduction.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SReceiveProduction)
            return object;
        var message = new $root.C2SReceiveProduction();
        if (object.configid != null)
            message.configid = object.configid | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SReceiveProduction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SReceiveProduction
     * @static
     * @param {C2SReceiveProduction} message C2SReceiveProduction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SReceiveProduction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.configid = 0;
        if (message.configid != null && message.hasOwnProperty("configid"))
            object.configid = message.configid;
        return object;
    };

    /**
     * Converts this C2SReceiveProduction to JSON.
     * @function toJSON
     * @memberof C2SReceiveProduction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SReceiveProduction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SReceiveProduction
     * @function getTypeUrl
     * @memberof C2SReceiveProduction
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SReceiveProduction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SReceiveProduction";
    };

    return C2SReceiveProduction;
})();

$root.S2CReceiveProduction = (function() {

    /**
     * Properties of a S2CReceiveProduction.
     * @exports IS2CReceiveProduction
     * @interface IS2CReceiveProduction
     * @property {IProductionData|null} [productiondata] S2CReceiveProduction productiondata
     */

    /**
     * Constructs a new S2CReceiveProduction.
     * @exports S2CReceiveProduction
     * @classdesc Represents a S2CReceiveProduction.
     * @implements IS2CReceiveProduction
     * @constructor
     * @param {IS2CReceiveProduction=} [properties] Properties to set
     */
    function S2CReceiveProduction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CReceiveProduction productiondata.
     * @member {IProductionData|null|undefined} productiondata
     * @memberof S2CReceiveProduction
     * @instance
     */
    S2CReceiveProduction.prototype.productiondata = null;

    /**
     * Creates a new S2CReceiveProduction instance using the specified properties.
     * @function create
     * @memberof S2CReceiveProduction
     * @static
     * @param {IS2CReceiveProduction=} [properties] Properties to set
     * @returns {S2CReceiveProduction} S2CReceiveProduction instance
     */
    S2CReceiveProduction.create = function create(properties) {
        return new S2CReceiveProduction(properties);
    };

    /**
     * Encodes the specified S2CReceiveProduction message. Does not implicitly {@link S2CReceiveProduction.verify|verify} messages.
     * @function encode
     * @memberof S2CReceiveProduction
     * @static
     * @param {IS2CReceiveProduction} message S2CReceiveProduction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CReceiveProduction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.productiondata != null && Object.hasOwnProperty.call(message, "productiondata"))
            $root.ProductionData.encode(message.productiondata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CReceiveProduction message, length delimited. Does not implicitly {@link S2CReceiveProduction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CReceiveProduction
     * @static
     * @param {IS2CReceiveProduction} message S2CReceiveProduction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CReceiveProduction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CReceiveProduction message from the specified reader or buffer.
     * @function decode
     * @memberof S2CReceiveProduction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CReceiveProduction} S2CReceiveProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CReceiveProduction.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CReceiveProduction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.productiondata = $root.ProductionData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CReceiveProduction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CReceiveProduction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CReceiveProduction} S2CReceiveProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CReceiveProduction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CReceiveProduction message.
     * @function verify
     * @memberof S2CReceiveProduction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CReceiveProduction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.productiondata != null && message.hasOwnProperty("productiondata")) {
            var error = $root.ProductionData.verify(message.productiondata);
            if (error)
                return "productiondata." + error;
        }
        return null;
    };

    /**
     * Creates a S2CReceiveProduction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CReceiveProduction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CReceiveProduction} S2CReceiveProduction
     */
    S2CReceiveProduction.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CReceiveProduction)
            return object;
        var message = new $root.S2CReceiveProduction();
        if (object.productiondata != null) {
            if (typeof object.productiondata !== "object")
                throw TypeError(".S2CReceiveProduction.productiondata: object expected");
            message.productiondata = $root.ProductionData.fromObject(object.productiondata);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CReceiveProduction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CReceiveProduction
     * @static
     * @param {S2CReceiveProduction} message S2CReceiveProduction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CReceiveProduction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.productiondata = null;
        if (message.productiondata != null && message.hasOwnProperty("productiondata"))
            object.productiondata = $root.ProductionData.toObject(message.productiondata, options);
        return object;
    };

    /**
     * Converts this S2CReceiveProduction to JSON.
     * @function toJSON
     * @memberof S2CReceiveProduction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CReceiveProduction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CReceiveProduction
     * @function getTypeUrl
     * @memberof S2CReceiveProduction
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CReceiveProduction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CReceiveProduction";
    };

    return S2CReceiveProduction;
})();

$root.C2SReceiveTaskReward = (function() {

    /**
     * Properties of a C2SReceiveTaskReward.
     * @exports IC2SReceiveTaskReward
     * @interface IC2SReceiveTaskReward
     * @property {number|null} [configid] C2SReceiveTaskReward configid
     */

    /**
     * Constructs a new C2SReceiveTaskReward.
     * @exports C2SReceiveTaskReward
     * @classdesc Represents a C2SReceiveTaskReward.
     * @implements IC2SReceiveTaskReward
     * @constructor
     * @param {IC2SReceiveTaskReward=} [properties] Properties to set
     */
    function C2SReceiveTaskReward(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SReceiveTaskReward configid.
     * @member {number} configid
     * @memberof C2SReceiveTaskReward
     * @instance
     */
    C2SReceiveTaskReward.prototype.configid = 0;

    /**
     * Creates a new C2SReceiveTaskReward instance using the specified properties.
     * @function create
     * @memberof C2SReceiveTaskReward
     * @static
     * @param {IC2SReceiveTaskReward=} [properties] Properties to set
     * @returns {C2SReceiveTaskReward} C2SReceiveTaskReward instance
     */
    C2SReceiveTaskReward.create = function create(properties) {
        return new C2SReceiveTaskReward(properties);
    };

    /**
     * Encodes the specified C2SReceiveTaskReward message. Does not implicitly {@link C2SReceiveTaskReward.verify|verify} messages.
     * @function encode
     * @memberof C2SReceiveTaskReward
     * @static
     * @param {IC2SReceiveTaskReward} message C2SReceiveTaskReward message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SReceiveTaskReward.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.configid != null && Object.hasOwnProperty.call(message, "configid"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.configid);
        return writer;
    };

    /**
     * Encodes the specified C2SReceiveTaskReward message, length delimited. Does not implicitly {@link C2SReceiveTaskReward.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SReceiveTaskReward
     * @static
     * @param {IC2SReceiveTaskReward} message C2SReceiveTaskReward message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SReceiveTaskReward.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SReceiveTaskReward message from the specified reader or buffer.
     * @function decode
     * @memberof C2SReceiveTaskReward
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SReceiveTaskReward} C2SReceiveTaskReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SReceiveTaskReward.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SReceiveTaskReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.configid = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SReceiveTaskReward message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SReceiveTaskReward
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SReceiveTaskReward} C2SReceiveTaskReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SReceiveTaskReward.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SReceiveTaskReward message.
     * @function verify
     * @memberof C2SReceiveTaskReward
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SReceiveTaskReward.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.configid != null && message.hasOwnProperty("configid"))
            if (!$util.isInteger(message.configid))
                return "configid: integer expected";
        return null;
    };

    /**
     * Creates a C2SReceiveTaskReward message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SReceiveTaskReward
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SReceiveTaskReward} C2SReceiveTaskReward
     */
    C2SReceiveTaskReward.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SReceiveTaskReward)
            return object;
        var message = new $root.C2SReceiveTaskReward();
        if (object.configid != null)
            message.configid = object.configid | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SReceiveTaskReward message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SReceiveTaskReward
     * @static
     * @param {C2SReceiveTaskReward} message C2SReceiveTaskReward
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SReceiveTaskReward.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.configid = 0;
        if (message.configid != null && message.hasOwnProperty("configid"))
            object.configid = message.configid;
        return object;
    };

    /**
     * Converts this C2SReceiveTaskReward to JSON.
     * @function toJSON
     * @memberof C2SReceiveTaskReward
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SReceiveTaskReward.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SReceiveTaskReward
     * @function getTypeUrl
     * @memberof C2SReceiveTaskReward
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SReceiveTaskReward.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SReceiveTaskReward";
    };

    return C2SReceiveTaskReward;
})();

$root.S2CReceiveTaskReward = (function() {

    /**
     * Properties of a S2CReceiveTaskReward.
     * @exports IS2CReceiveTaskReward
     * @interface IS2CReceiveTaskReward
     * @property {IProductionData|null} [productiondata] S2CReceiveTaskReward productiondata
     */

    /**
     * Constructs a new S2CReceiveTaskReward.
     * @exports S2CReceiveTaskReward
     * @classdesc Represents a S2CReceiveTaskReward.
     * @implements IS2CReceiveTaskReward
     * @constructor
     * @param {IS2CReceiveTaskReward=} [properties] Properties to set
     */
    function S2CReceiveTaskReward(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CReceiveTaskReward productiondata.
     * @member {IProductionData|null|undefined} productiondata
     * @memberof S2CReceiveTaskReward
     * @instance
     */
    S2CReceiveTaskReward.prototype.productiondata = null;

    /**
     * Creates a new S2CReceiveTaskReward instance using the specified properties.
     * @function create
     * @memberof S2CReceiveTaskReward
     * @static
     * @param {IS2CReceiveTaskReward=} [properties] Properties to set
     * @returns {S2CReceiveTaskReward} S2CReceiveTaskReward instance
     */
    S2CReceiveTaskReward.create = function create(properties) {
        return new S2CReceiveTaskReward(properties);
    };

    /**
     * Encodes the specified S2CReceiveTaskReward message. Does not implicitly {@link S2CReceiveTaskReward.verify|verify} messages.
     * @function encode
     * @memberof S2CReceiveTaskReward
     * @static
     * @param {IS2CReceiveTaskReward} message S2CReceiveTaskReward message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CReceiveTaskReward.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.productiondata != null && Object.hasOwnProperty.call(message, "productiondata"))
            $root.ProductionData.encode(message.productiondata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CReceiveTaskReward message, length delimited. Does not implicitly {@link S2CReceiveTaskReward.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CReceiveTaskReward
     * @static
     * @param {IS2CReceiveTaskReward} message S2CReceiveTaskReward message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CReceiveTaskReward.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CReceiveTaskReward message from the specified reader or buffer.
     * @function decode
     * @memberof S2CReceiveTaskReward
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CReceiveTaskReward} S2CReceiveTaskReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CReceiveTaskReward.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CReceiveTaskReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.productiondata = $root.ProductionData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CReceiveTaskReward message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CReceiveTaskReward
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CReceiveTaskReward} S2CReceiveTaskReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CReceiveTaskReward.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CReceiveTaskReward message.
     * @function verify
     * @memberof S2CReceiveTaskReward
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CReceiveTaskReward.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.productiondata != null && message.hasOwnProperty("productiondata")) {
            var error = $root.ProductionData.verify(message.productiondata);
            if (error)
                return "productiondata." + error;
        }
        return null;
    };

    /**
     * Creates a S2CReceiveTaskReward message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CReceiveTaskReward
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CReceiveTaskReward} S2CReceiveTaskReward
     */
    S2CReceiveTaskReward.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CReceiveTaskReward)
            return object;
        var message = new $root.S2CReceiveTaskReward();
        if (object.productiondata != null) {
            if (typeof object.productiondata !== "object")
                throw TypeError(".S2CReceiveTaskReward.productiondata: object expected");
            message.productiondata = $root.ProductionData.fromObject(object.productiondata);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CReceiveTaskReward message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CReceiveTaskReward
     * @static
     * @param {S2CReceiveTaskReward} message S2CReceiveTaskReward
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CReceiveTaskReward.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.productiondata = null;
        if (message.productiondata != null && message.hasOwnProperty("productiondata"))
            object.productiondata = $root.ProductionData.toObject(message.productiondata, options);
        return object;
    };

    /**
     * Converts this S2CReceiveTaskReward to JSON.
     * @function toJSON
     * @memberof S2CReceiveTaskReward
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CReceiveTaskReward.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CReceiveTaskReward
     * @function getTypeUrl
     * @memberof S2CReceiveTaskReward
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CReceiveTaskReward.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CReceiveTaskReward";
    };

    return S2CReceiveTaskReward;
})();

$root.S2CUpdateTaskInfo = (function() {

    /**
     * Properties of a S2CUpdateTaskInfo.
     * @exports IS2CUpdateTaskInfo
     * @interface IS2CUpdateTaskInfo
     * @property {ITaskData|null} [taskdata] S2CUpdateTaskInfo taskdata
     */

    /**
     * Constructs a new S2CUpdateTaskInfo.
     * @exports S2CUpdateTaskInfo
     * @classdesc Represents a S2CUpdateTaskInfo.
     * @implements IS2CUpdateTaskInfo
     * @constructor
     * @param {IS2CUpdateTaskInfo=} [properties] Properties to set
     */
    function S2CUpdateTaskInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUpdateTaskInfo taskdata.
     * @member {ITaskData|null|undefined} taskdata
     * @memberof S2CUpdateTaskInfo
     * @instance
     */
    S2CUpdateTaskInfo.prototype.taskdata = null;

    /**
     * Creates a new S2CUpdateTaskInfo instance using the specified properties.
     * @function create
     * @memberof S2CUpdateTaskInfo
     * @static
     * @param {IS2CUpdateTaskInfo=} [properties] Properties to set
     * @returns {S2CUpdateTaskInfo} S2CUpdateTaskInfo instance
     */
    S2CUpdateTaskInfo.create = function create(properties) {
        return new S2CUpdateTaskInfo(properties);
    };

    /**
     * Encodes the specified S2CUpdateTaskInfo message. Does not implicitly {@link S2CUpdateTaskInfo.verify|verify} messages.
     * @function encode
     * @memberof S2CUpdateTaskInfo
     * @static
     * @param {IS2CUpdateTaskInfo} message S2CUpdateTaskInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUpdateTaskInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.taskdata != null && Object.hasOwnProperty.call(message, "taskdata"))
            $root.TaskData.encode(message.taskdata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CUpdateTaskInfo message, length delimited. Does not implicitly {@link S2CUpdateTaskInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUpdateTaskInfo
     * @static
     * @param {IS2CUpdateTaskInfo} message S2CUpdateTaskInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUpdateTaskInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUpdateTaskInfo message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUpdateTaskInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUpdateTaskInfo} S2CUpdateTaskInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUpdateTaskInfo.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUpdateTaskInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.taskdata = $root.TaskData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUpdateTaskInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUpdateTaskInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUpdateTaskInfo} S2CUpdateTaskInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUpdateTaskInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUpdateTaskInfo message.
     * @function verify
     * @memberof S2CUpdateTaskInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUpdateTaskInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.taskdata != null && message.hasOwnProperty("taskdata")) {
            var error = $root.TaskData.verify(message.taskdata);
            if (error)
                return "taskdata." + error;
        }
        return null;
    };

    /**
     * Creates a S2CUpdateTaskInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUpdateTaskInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUpdateTaskInfo} S2CUpdateTaskInfo
     */
    S2CUpdateTaskInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUpdateTaskInfo)
            return object;
        var message = new $root.S2CUpdateTaskInfo();
        if (object.taskdata != null) {
            if (typeof object.taskdata !== "object")
                throw TypeError(".S2CUpdateTaskInfo.taskdata: object expected");
            message.taskdata = $root.TaskData.fromObject(object.taskdata);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CUpdateTaskInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUpdateTaskInfo
     * @static
     * @param {S2CUpdateTaskInfo} message S2CUpdateTaskInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUpdateTaskInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.taskdata = null;
        if (message.taskdata != null && message.hasOwnProperty("taskdata"))
            object.taskdata = $root.TaskData.toObject(message.taskdata, options);
        return object;
    };

    /**
     * Converts this S2CUpdateTaskInfo to JSON.
     * @function toJSON
     * @memberof S2CUpdateTaskInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUpdateTaskInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CUpdateTaskInfo
     * @function getTypeUrl
     * @memberof S2CUpdateTaskInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CUpdateTaskInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CUpdateTaskInfo";
    };

    return S2CUpdateTaskInfo;
})();

$root.C2SGetRanks = (function() {

    /**
     * Properties of a C2SGetRanks.
     * @exports IC2SGetRanks
     * @interface IC2SGetRanks
     */

    /**
     * Constructs a new C2SGetRanks.
     * @exports C2SGetRanks
     * @classdesc Represents a C2SGetRanks.
     * @implements IC2SGetRanks
     * @constructor
     * @param {IC2SGetRanks=} [properties] Properties to set
     */
    function C2SGetRanks(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2SGetRanks instance using the specified properties.
     * @function create
     * @memberof C2SGetRanks
     * @static
     * @param {IC2SGetRanks=} [properties] Properties to set
     * @returns {C2SGetRanks} C2SGetRanks instance
     */
    C2SGetRanks.create = function create(properties) {
        return new C2SGetRanks(properties);
    };

    /**
     * Encodes the specified C2SGetRanks message. Does not implicitly {@link C2SGetRanks.verify|verify} messages.
     * @function encode
     * @memberof C2SGetRanks
     * @static
     * @param {IC2SGetRanks} message C2SGetRanks message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SGetRanks.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2SGetRanks message, length delimited. Does not implicitly {@link C2SGetRanks.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SGetRanks
     * @static
     * @param {IC2SGetRanks} message C2SGetRanks message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SGetRanks.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SGetRanks message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetRanks
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SGetRanks} C2SGetRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetRanks.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SGetRanks();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SGetRanks message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SGetRanks
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SGetRanks} C2SGetRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetRanks.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SGetRanks message.
     * @function verify
     * @memberof C2SGetRanks
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SGetRanks.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2SGetRanks message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SGetRanks
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SGetRanks} C2SGetRanks
     */
    C2SGetRanks.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SGetRanks)
            return object;
        return new $root.C2SGetRanks();
    };

    /**
     * Creates a plain object from a C2SGetRanks message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SGetRanks
     * @static
     * @param {C2SGetRanks} message C2SGetRanks
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SGetRanks.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2SGetRanks to JSON.
     * @function toJSON
     * @memberof C2SGetRanks
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SGetRanks.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SGetRanks
     * @function getTypeUrl
     * @memberof C2SGetRanks
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SGetRanks.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SGetRanks";
    };

    return C2SGetRanks;
})();

$root.S2CGetRanks = (function() {

    /**
     * Properties of a S2CGetRanks.
     * @exports IS2CGetRanks
     * @interface IS2CGetRanks
     * @property {Array.<IRankData>|null} [rankdatas] S2CGetRanks rankdatas
     */

    /**
     * Constructs a new S2CGetRanks.
     * @exports S2CGetRanks
     * @classdesc Represents a S2CGetRanks.
     * @implements IS2CGetRanks
     * @constructor
     * @param {IS2CGetRanks=} [properties] Properties to set
     */
    function S2CGetRanks(properties) {
        this.rankdatas = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CGetRanks rankdatas.
     * @member {Array.<IRankData>} rankdatas
     * @memberof S2CGetRanks
     * @instance
     */
    S2CGetRanks.prototype.rankdatas = $util.emptyArray;

    /**
     * Creates a new S2CGetRanks instance using the specified properties.
     * @function create
     * @memberof S2CGetRanks
     * @static
     * @param {IS2CGetRanks=} [properties] Properties to set
     * @returns {S2CGetRanks} S2CGetRanks instance
     */
    S2CGetRanks.create = function create(properties) {
        return new S2CGetRanks(properties);
    };

    /**
     * Encodes the specified S2CGetRanks message. Does not implicitly {@link S2CGetRanks.verify|verify} messages.
     * @function encode
     * @memberof S2CGetRanks
     * @static
     * @param {IS2CGetRanks} message S2CGetRanks message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGetRanks.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rankdatas != null && message.rankdatas.length)
            for (var i = 0; i < message.rankdatas.length; ++i)
                $root.RankData.encode(message.rankdatas[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CGetRanks message, length delimited. Does not implicitly {@link S2CGetRanks.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CGetRanks
     * @static
     * @param {IS2CGetRanks} message S2CGetRanks message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGetRanks.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CGetRanks message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGetRanks
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CGetRanks} S2CGetRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGetRanks.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CGetRanks();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.rankdatas && message.rankdatas.length))
                        message.rankdatas = [];
                    message.rankdatas.push($root.RankData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CGetRanks message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CGetRanks
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CGetRanks} S2CGetRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGetRanks.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CGetRanks message.
     * @function verify
     * @memberof S2CGetRanks
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CGetRanks.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rankdatas != null && message.hasOwnProperty("rankdatas")) {
            if (!Array.isArray(message.rankdatas))
                return "rankdatas: array expected";
            for (var i = 0; i < message.rankdatas.length; ++i) {
                var error = $root.RankData.verify(message.rankdatas[i]);
                if (error)
                    return "rankdatas." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2CGetRanks message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CGetRanks
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CGetRanks} S2CGetRanks
     */
    S2CGetRanks.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CGetRanks)
            return object;
        var message = new $root.S2CGetRanks();
        if (object.rankdatas) {
            if (!Array.isArray(object.rankdatas))
                throw TypeError(".S2CGetRanks.rankdatas: array expected");
            message.rankdatas = [];
            for (var i = 0; i < object.rankdatas.length; ++i) {
                if (typeof object.rankdatas[i] !== "object")
                    throw TypeError(".S2CGetRanks.rankdatas: object expected");
                message.rankdatas[i] = $root.RankData.fromObject(object.rankdatas[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CGetRanks message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CGetRanks
     * @static
     * @param {S2CGetRanks} message S2CGetRanks
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CGetRanks.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.rankdatas = [];
        if (message.rankdatas && message.rankdatas.length) {
            object.rankdatas = [];
            for (var j = 0; j < message.rankdatas.length; ++j)
                object.rankdatas[j] = $root.RankData.toObject(message.rankdatas[j], options);
        }
        return object;
    };

    /**
     * Converts this S2CGetRanks to JSON.
     * @function toJSON
     * @memberof S2CGetRanks
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CGetRanks.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CGetRanks
     * @function getTypeUrl
     * @memberof S2CGetRanks
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CGetRanks.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CGetRanks";
    };

    return S2CGetRanks;
})();

module.exports = $root;
