// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Properties of a C2SMatch. */
export interface IC2SMatch {
}

/** Represents a C2SMatch. */
export class C2SMatch implements IC2SMatch {

    /**
     * Constructs a new C2SMatch.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SMatch);

    /**
     * Creates a new C2SMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SMatch instance
     */
    public static create(properties?: IC2SMatch): C2SMatch;

    /**
     * Encodes the specified C2SMatch message. Does not implicitly {@link C2SMatch.verify|verify} messages.
     * @param message C2SMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SMatch message, length delimited. Does not implicitly {@link C2SMatch.verify|verify} messages.
     * @param message C2SMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SMatch message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SMatch;

    /**
     * Decodes a C2SMatch message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SMatch;

    /**
     * Verifies a C2SMatch message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SMatch message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SMatch
     */
    public static fromObject(object: { [k: string]: any }): C2SMatch;

    /**
     * Creates a plain object from a C2SMatch message. Also converts values to other types if specified.
     * @param message C2SMatch
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SMatch to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SMatch
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CMatch. */
export interface IS2CMatch {

    /** S2CMatch res */
    res?: (boolean|null);
}

/** Represents a S2CMatch. */
export class S2CMatch implements IS2CMatch {

    /**
     * Constructs a new S2CMatch.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CMatch);

    /** S2CMatch res. */
    public res: boolean;

    /**
     * Creates a new S2CMatch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CMatch instance
     */
    public static create(properties?: IS2CMatch): S2CMatch;

    /**
     * Encodes the specified S2CMatch message. Does not implicitly {@link S2CMatch.verify|verify} messages.
     * @param message S2CMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CMatch message, length delimited. Does not implicitly {@link S2CMatch.verify|verify} messages.
     * @param message S2CMatch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CMatch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CMatch message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CMatch;

    /**
     * Decodes a S2CMatch message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CMatch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CMatch;

    /**
     * Verifies a S2CMatch message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CMatch message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CMatch
     */
    public static fromObject(object: { [k: string]: any }): S2CMatch;

    /**
     * Creates a plain object from a S2CMatch message. Also converts values to other types if specified.
     * @param message S2CMatch
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CMatch to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CMatch
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CMatchSuccess. */
export interface IS2CMatchSuccess {
}

/** Represents a S2CMatchSuccess. */
export class S2CMatchSuccess implements IS2CMatchSuccess {

    /**
     * Constructs a new S2CMatchSuccess.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CMatchSuccess);

    /**
     * Creates a new S2CMatchSuccess instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CMatchSuccess instance
     */
    public static create(properties?: IS2CMatchSuccess): S2CMatchSuccess;

    /**
     * Encodes the specified S2CMatchSuccess message. Does not implicitly {@link S2CMatchSuccess.verify|verify} messages.
     * @param message S2CMatchSuccess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CMatchSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CMatchSuccess message, length delimited. Does not implicitly {@link S2CMatchSuccess.verify|verify} messages.
     * @param message S2CMatchSuccess message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CMatchSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CMatchSuccess message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CMatchSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CMatchSuccess;

    /**
     * Decodes a S2CMatchSuccess message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CMatchSuccess
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CMatchSuccess;

    /**
     * Verifies a S2CMatchSuccess message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CMatchSuccess message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CMatchSuccess
     */
    public static fromObject(object: { [k: string]: any }): S2CMatchSuccess;

    /**
     * Creates a plain object from a S2CMatchSuccess message. Also converts values to other types if specified.
     * @param message S2CMatchSuccess
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CMatchSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CMatchSuccess to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CMatchSuccess
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CGameOver. */
export interface IS2CGameOver {

    /** S2CGameOver score */
    score?: (number|Long|null);
}

/** Represents a S2CGameOver. */
export class S2CGameOver implements IS2CGameOver {

    /**
     * Constructs a new S2CGameOver.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CGameOver);

    /** S2CGameOver score. */
    public score: (number|Long);

    /**
     * Creates a new S2CGameOver instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CGameOver instance
     */
    public static create(properties?: IS2CGameOver): S2CGameOver;

    /**
     * Encodes the specified S2CGameOver message. Does not implicitly {@link S2CGameOver.verify|verify} messages.
     * @param message S2CGameOver message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CGameOver, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CGameOver message, length delimited. Does not implicitly {@link S2CGameOver.verify|verify} messages.
     * @param message S2CGameOver message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CGameOver, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CGameOver message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CGameOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CGameOver;

    /**
     * Decodes a S2CGameOver message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CGameOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CGameOver;

    /**
     * Verifies a S2CGameOver message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CGameOver message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CGameOver
     */
    public static fromObject(object: { [k: string]: any }): S2CGameOver;

    /**
     * Creates a plain object from a S2CGameOver message. Also converts values to other types if specified.
     * @param message S2CGameOver
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CGameOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CGameOver to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CGameOver
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Vector2. */
export interface IVector2 {

    /** Vector2 x */
    x?: (number|null);

    /** Vector2 y */
    y?: (number|null);
}

/** Represents a Vector2. */
export class Vector2 implements IVector2 {

    /**
     * Constructs a new Vector2.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVector2);

    /** Vector2 x. */
    public x: number;

    /** Vector2 y. */
    public y: number;

    /**
     * Creates a new Vector2 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Vector2 instance
     */
    public static create(properties?: IVector2): Vector2;

    /**
     * Encodes the specified Vector2 message. Does not implicitly {@link Vector2.verify|verify} messages.
     * @param message Vector2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVector2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Vector2 message, length delimited. Does not implicitly {@link Vector2.verify|verify} messages.
     * @param message Vector2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVector2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Vector2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Vector2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Vector2;

    /**
     * Decodes a Vector2 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Vector2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Vector2;

    /**
     * Verifies a Vector2 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Vector2 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Vector2
     */
    public static fromObject(object: { [k: string]: any }): Vector2;

    /**
     * Creates a plain object from a Vector2 message. Also converts values to other types if specified.
     * @param message Vector2
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Vector2, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Vector2 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Vector2
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an ItemData. */
export interface IItemData {

    /** ItemData id */
    id?: (number|null);

    /** ItemData count */
    count?: (number|Long|null);
}

/** Represents an ItemData. */
export class ItemData implements IItemData {

    /**
     * Constructs a new ItemData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IItemData);

    /** ItemData id. */
    public id: number;

    /** ItemData count. */
    public count: (number|Long);

    /**
     * Creates a new ItemData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ItemData instance
     */
    public static create(properties?: IItemData): ItemData;

    /**
     * Encodes the specified ItemData message. Does not implicitly {@link ItemData.verify|verify} messages.
     * @param message ItemData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IItemData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ItemData message, length delimited. Does not implicitly {@link ItemData.verify|verify} messages.
     * @param message ItemData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IItemData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ItemData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ItemData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemData;

    /**
     * Decodes an ItemData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ItemData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemData;

    /**
     * Verifies an ItemData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ItemData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ItemData
     */
    public static fromObject(object: { [k: string]: any }): ItemData;

    /**
     * Creates a plain object from an ItemData message. Also converts values to other types if specified.
     * @param message ItemData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ItemData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ItemData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ItemData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MailData. */
export interface IMailData {

    /** MailData id */
    id?: (number|Long|null);

    /** MailData mailKey */
    mailKey?: (string|null);

    /** MailData ctime */
    ctime?: (number|Long|null);

    /** MailData flag */
    flag?: (number|null);

    /** MailData rewards */
    rewards?: (IItemData[]|null);

    /** MailData trace */
    trace?: (number|null);

    /** MailData parmas */
    parmas?: (string|null);
}

/** Represents a MailData. */
export class MailData implements IMailData {

    /**
     * Constructs a new MailData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMailData);

    /** MailData id. */
    public id: (number|Long);

    /** MailData mailKey. */
    public mailKey: string;

    /** MailData ctime. */
    public ctime: (number|Long);

    /** MailData flag. */
    public flag: number;

    /** MailData rewards. */
    public rewards: IItemData[];

    /** MailData trace. */
    public trace: number;

    /** MailData parmas. */
    public parmas: string;

    /**
     * Creates a new MailData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MailData instance
     */
    public static create(properties?: IMailData): MailData;

    /**
     * Encodes the specified MailData message. Does not implicitly {@link MailData.verify|verify} messages.
     * @param message MailData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMailData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MailData message, length delimited. Does not implicitly {@link MailData.verify|verify} messages.
     * @param message MailData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMailData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MailData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MailData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MailData;

    /**
     * Decodes a MailData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MailData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MailData;

    /**
     * Verifies a MailData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MailData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MailData
     */
    public static fromObject(object: { [k: string]: any }): MailData;

    /**
     * Creates a plain object from a MailData message. Also converts values to other types if specified.
     * @param message MailData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MailData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MailData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MailData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProductionData. */
export interface IProductionData {

    /** ProductionData configid */
    configid?: (number|null);

    /** ProductionData targettime */
    targettime?: (number|Long|null);

    /** ProductionData starttime */
    starttime?: (number|Long|null);

    /** ProductionData productionstate */
    productionstate?: (number|null);
}

/** Represents a ProductionData. */
export class ProductionData implements IProductionData {

    /**
     * Constructs a new ProductionData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProductionData);

    /** ProductionData configid. */
    public configid: number;

    /** ProductionData targettime. */
    public targettime: (number|Long);

    /** ProductionData starttime. */
    public starttime: (number|Long);

    /** ProductionData productionstate. */
    public productionstate: number;

    /**
     * Creates a new ProductionData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProductionData instance
     */
    public static create(properties?: IProductionData): ProductionData;

    /**
     * Encodes the specified ProductionData message. Does not implicitly {@link ProductionData.verify|verify} messages.
     * @param message ProductionData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProductionData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProductionData message, length delimited. Does not implicitly {@link ProductionData.verify|verify} messages.
     * @param message ProductionData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProductionData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProductionData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProductionData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProductionData;

    /**
     * Decodes a ProductionData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProductionData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProductionData;

    /**
     * Verifies a ProductionData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProductionData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProductionData
     */
    public static fromObject(object: { [k: string]: any }): ProductionData;

    /**
     * Creates a plain object from a ProductionData message. Also converts values to other types if specified.
     * @param message ProductionData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProductionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProductionData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProductionData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an AttributeEntryData. */
export interface IAttributeEntryData {

    /** AttributeEntryData id */
    id?: (number|Long|null);

    /** AttributeEntryData key */
    key?: (number|null);

    /** AttributeEntryData value */
    value?: (number|Long|null);

    /** AttributeEntryData entrytype */
    entrytype?: (number|null);
}

/** Represents an AttributeEntryData. */
export class AttributeEntryData implements IAttributeEntryData {

    /**
     * Constructs a new AttributeEntryData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAttributeEntryData);

    /** AttributeEntryData id. */
    public id: (number|Long);

    /** AttributeEntryData key. */
    public key: number;

    /** AttributeEntryData value. */
    public value: (number|Long);

    /** AttributeEntryData entrytype. */
    public entrytype: number;

    /**
     * Creates a new AttributeEntryData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AttributeEntryData instance
     */
    public static create(properties?: IAttributeEntryData): AttributeEntryData;

    /**
     * Encodes the specified AttributeEntryData message. Does not implicitly {@link AttributeEntryData.verify|verify} messages.
     * @param message AttributeEntryData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAttributeEntryData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AttributeEntryData message, length delimited. Does not implicitly {@link AttributeEntryData.verify|verify} messages.
     * @param message AttributeEntryData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAttributeEntryData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AttributeEntryData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AttributeEntryData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AttributeEntryData;

    /**
     * Decodes an AttributeEntryData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AttributeEntryData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AttributeEntryData;

    /**
     * Verifies an AttributeEntryData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AttributeEntryData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AttributeEntryData
     */
    public static fromObject(object: { [k: string]: any }): AttributeEntryData;

    /**
     * Creates a plain object from an AttributeEntryData message. Also converts values to other types if specified.
     * @param message AttributeEntryData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AttributeEntryData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AttributeEntryData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AttributeEntryData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TaskData. */
export interface ITaskData {

    /** TaskData configid */
    configid?: (number|null);

    /** TaskData taskstate */
    taskstate?: (number|null);

    /** TaskData taskpogress */
    taskpogress?: (number|null);
}

/** Represents a TaskData. */
export class TaskData implements ITaskData {

    /**
     * Constructs a new TaskData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITaskData);

    /** TaskData configid. */
    public configid: number;

    /** TaskData taskstate. */
    public taskstate: number;

    /** TaskData taskpogress. */
    public taskpogress: number;

    /**
     * Creates a new TaskData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TaskData instance
     */
    public static create(properties?: ITaskData): TaskData;

    /**
     * Encodes the specified TaskData message. Does not implicitly {@link TaskData.verify|verify} messages.
     * @param message TaskData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITaskData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TaskData message, length delimited. Does not implicitly {@link TaskData.verify|verify} messages.
     * @param message TaskData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITaskData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TaskData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TaskData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TaskData;

    /**
     * Decodes a TaskData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TaskData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TaskData;

    /**
     * Verifies a TaskData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TaskData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TaskData
     */
    public static fromObject(object: { [k: string]: any }): TaskData;

    /**
     * Creates a plain object from a TaskData message. Also converts values to other types if specified.
     * @param message TaskData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TaskData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TaskData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TaskData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RankData. */
export interface IRankData {

    /** RankData id */
    id?: (number|Long|null);

    /** RankData unitid */
    unitid?: (number|Long|null);

    /** RankData name */
    name?: (string|null);

    /** RankData count */
    count?: (number|null);
}

/** Represents a RankData. */
export class RankData implements IRankData {

    /**
     * Constructs a new RankData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRankData);

    /** RankData id. */
    public id: (number|Long);

    /** RankData unitid. */
    public unitid: (number|Long);

    /** RankData name. */
    public name: string;

    /** RankData count. */
    public count: number;

    /**
     * Creates a new RankData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RankData instance
     */
    public static create(properties?: IRankData): RankData;

    /**
     * Encodes the specified RankData message. Does not implicitly {@link RankData.verify|verify} messages.
     * @param message RankData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRankData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RankData message, length delimited. Does not implicitly {@link RankData.verify|verify} messages.
     * @param message RankData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRankData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RankData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RankData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RankData;

    /**
     * Decodes a RankData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RankData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RankData;

    /**
     * Verifies a RankData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RankData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RankData
     */
    public static fromObject(object: { [k: string]: any }): RankData;

    /**
     * Creates a plain object from a RankData message. Also converts values to other types if specified.
     * @param message RankData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RankData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RankData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RankData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SEnterDesk. */
export interface IC2SEnterDesk {
}

/** Represents a C2SEnterDesk. */
export class C2SEnterDesk implements IC2SEnterDesk {

    /**
     * Constructs a new C2SEnterDesk.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SEnterDesk);

    /**
     * Creates a new C2SEnterDesk instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SEnterDesk instance
     */
    public static create(properties?: IC2SEnterDesk): C2SEnterDesk;

    /**
     * Encodes the specified C2SEnterDesk message. Does not implicitly {@link C2SEnterDesk.verify|verify} messages.
     * @param message C2SEnterDesk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SEnterDesk, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SEnterDesk message, length delimited. Does not implicitly {@link C2SEnterDesk.verify|verify} messages.
     * @param message C2SEnterDesk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SEnterDesk, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SEnterDesk message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SEnterDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SEnterDesk;

    /**
     * Decodes a C2SEnterDesk message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SEnterDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SEnterDesk;

    /**
     * Verifies a C2SEnterDesk message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SEnterDesk message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SEnterDesk
     */
    public static fromObject(object: { [k: string]: any }): C2SEnterDesk;

    /**
     * Creates a plain object from a C2SEnterDesk message. Also converts values to other types if specified.
     * @param message C2SEnterDesk
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SEnterDesk, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SEnterDesk to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SEnterDesk
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CEnterDesk. */
export interface IS2CEnterDesk {
}

/** Represents a S2CEnterDesk. */
export class S2CEnterDesk implements IS2CEnterDesk {

    /**
     * Constructs a new S2CEnterDesk.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CEnterDesk);

    /**
     * Creates a new S2CEnterDesk instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CEnterDesk instance
     */
    public static create(properties?: IS2CEnterDesk): S2CEnterDesk;

    /**
     * Encodes the specified S2CEnterDesk message. Does not implicitly {@link S2CEnterDesk.verify|verify} messages.
     * @param message S2CEnterDesk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CEnterDesk, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CEnterDesk message, length delimited. Does not implicitly {@link S2CEnterDesk.verify|verify} messages.
     * @param message S2CEnterDesk message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CEnterDesk, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CEnterDesk message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CEnterDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CEnterDesk;

    /**
     * Decodes a S2CEnterDesk message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CEnterDesk
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CEnterDesk;

    /**
     * Verifies a S2CEnterDesk message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CEnterDesk message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CEnterDesk
     */
    public static fromObject(object: { [k: string]: any }): S2CEnterDesk;

    /**
     * Creates a plain object from a S2CEnterDesk message. Also converts values to other types if specified.
     * @param message S2CEnterDesk
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CEnterDesk, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CEnterDesk to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CEnterDesk
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SMailList. */
export interface IC2SMailList {
}

/** Represents a C2SMailList. */
export class C2SMailList implements IC2SMailList {

    /**
     * Constructs a new C2SMailList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SMailList);

    /**
     * Creates a new C2SMailList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SMailList instance
     */
    public static create(properties?: IC2SMailList): C2SMailList;

    /**
     * Encodes the specified C2SMailList message. Does not implicitly {@link C2SMailList.verify|verify} messages.
     * @param message C2SMailList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SMailList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SMailList message, length delimited. Does not implicitly {@link C2SMailList.verify|verify} messages.
     * @param message C2SMailList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SMailList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SMailList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SMailList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SMailList;

    /**
     * Decodes a C2SMailList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SMailList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SMailList;

    /**
     * Verifies a C2SMailList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SMailList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SMailList
     */
    public static fromObject(object: { [k: string]: any }): C2SMailList;

    /**
     * Creates a plain object from a C2SMailList message. Also converts values to other types if specified.
     * @param message C2SMailList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SMailList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SMailList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SMailList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CMailList. */
export interface IS2CMailList {

    /** S2CMailList mailList */
    mailList?: ({ [k: string]: IMailData }|null);
}

/** Represents a S2CMailList. */
export class S2CMailList implements IS2CMailList {

    /**
     * Constructs a new S2CMailList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CMailList);

    /** S2CMailList mailList. */
    public mailList: { [k: string]: IMailData };

    /**
     * Creates a new S2CMailList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CMailList instance
     */
    public static create(properties?: IS2CMailList): S2CMailList;

    /**
     * Encodes the specified S2CMailList message. Does not implicitly {@link S2CMailList.verify|verify} messages.
     * @param message S2CMailList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CMailList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CMailList message, length delimited. Does not implicitly {@link S2CMailList.verify|verify} messages.
     * @param message S2CMailList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CMailList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CMailList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CMailList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CMailList;

    /**
     * Decodes a S2CMailList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CMailList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CMailList;

    /**
     * Verifies a S2CMailList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CMailList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CMailList
     */
    public static fromObject(object: { [k: string]: any }): S2CMailList;

    /**
     * Creates a plain object from a S2CMailList message. Also converts values to other types if specified.
     * @param message S2CMailList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CMailList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CMailList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CMailList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CUpdateMail. */
export interface IS2CUpdateMail {

    /** S2CUpdateMail mailList */
    mailList?: (IMailData[]|null);
}

/** Represents a S2CUpdateMail. */
export class S2CUpdateMail implements IS2CUpdateMail {

    /**
     * Constructs a new S2CUpdateMail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CUpdateMail);

    /** S2CUpdateMail mailList. */
    public mailList: IMailData[];

    /**
     * Creates a new S2CUpdateMail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CUpdateMail instance
     */
    public static create(properties?: IS2CUpdateMail): S2CUpdateMail;

    /**
     * Encodes the specified S2CUpdateMail message. Does not implicitly {@link S2CUpdateMail.verify|verify} messages.
     * @param message S2CUpdateMail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CUpdateMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CUpdateMail message, length delimited. Does not implicitly {@link S2CUpdateMail.verify|verify} messages.
     * @param message S2CUpdateMail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CUpdateMail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CUpdateMail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CUpdateMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CUpdateMail;

    /**
     * Decodes a S2CUpdateMail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CUpdateMail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CUpdateMail;

    /**
     * Verifies a S2CUpdateMail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CUpdateMail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CUpdateMail
     */
    public static fromObject(object: { [k: string]: any }): S2CUpdateMail;

    /**
     * Creates a plain object from a S2CUpdateMail message. Also converts values to other types if specified.
     * @param message S2CUpdateMail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CUpdateMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CUpdateMail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CUpdateMail
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SMailRead. */
export interface IC2SMailRead {

    /** C2SMailRead id */
    id?: (number|Long|null);
}

/** Represents a C2SMailRead. */
export class C2SMailRead implements IC2SMailRead {

    /**
     * Constructs a new C2SMailRead.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SMailRead);

    /** C2SMailRead id. */
    public id: (number|Long);

    /**
     * Creates a new C2SMailRead instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SMailRead instance
     */
    public static create(properties?: IC2SMailRead): C2SMailRead;

    /**
     * Encodes the specified C2SMailRead message. Does not implicitly {@link C2SMailRead.verify|verify} messages.
     * @param message C2SMailRead message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SMailRead, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SMailRead message, length delimited. Does not implicitly {@link C2SMailRead.verify|verify} messages.
     * @param message C2SMailRead message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SMailRead, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SMailRead message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SMailRead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SMailRead;

    /**
     * Decodes a C2SMailRead message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SMailRead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SMailRead;

    /**
     * Verifies a C2SMailRead message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SMailRead message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SMailRead
     */
    public static fromObject(object: { [k: string]: any }): C2SMailRead;

    /**
     * Creates a plain object from a C2SMailRead message. Also converts values to other types if specified.
     * @param message C2SMailRead
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SMailRead, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SMailRead to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SMailRead
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SMailLock. */
export interface IC2SMailLock {

    /** C2SMailLock id */
    id?: (number|Long|null);
}

/** Represents a C2SMailLock. */
export class C2SMailLock implements IC2SMailLock {

    /**
     * Constructs a new C2SMailLock.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SMailLock);

    /** C2SMailLock id. */
    public id: (number|Long);

    /**
     * Creates a new C2SMailLock instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SMailLock instance
     */
    public static create(properties?: IC2SMailLock): C2SMailLock;

    /**
     * Encodes the specified C2SMailLock message. Does not implicitly {@link C2SMailLock.verify|verify} messages.
     * @param message C2SMailLock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SMailLock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SMailLock message, length delimited. Does not implicitly {@link C2SMailLock.verify|verify} messages.
     * @param message C2SMailLock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SMailLock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SMailLock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SMailLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SMailLock;

    /**
     * Decodes a C2SMailLock message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SMailLock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SMailLock;

    /**
     * Verifies a C2SMailLock message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SMailLock message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SMailLock
     */
    public static fromObject(object: { [k: string]: any }): C2SMailLock;

    /**
     * Creates a plain object from a C2SMailLock message. Also converts values to other types if specified.
     * @param message C2SMailLock
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SMailLock, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SMailLock to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SMailLock
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SMailReward. */
export interface IC2SMailReward {

    /** C2SMailReward mailIdList */
    mailIdList?: ((number|Long)[]|null);
}

/** Represents a C2SMailReward. */
export class C2SMailReward implements IC2SMailReward {

    /**
     * Constructs a new C2SMailReward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SMailReward);

    /** C2SMailReward mailIdList. */
    public mailIdList: (number|Long)[];

    /**
     * Creates a new C2SMailReward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SMailReward instance
     */
    public static create(properties?: IC2SMailReward): C2SMailReward;

    /**
     * Encodes the specified C2SMailReward message. Does not implicitly {@link C2SMailReward.verify|verify} messages.
     * @param message C2SMailReward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SMailReward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SMailReward message, length delimited. Does not implicitly {@link C2SMailReward.verify|verify} messages.
     * @param message C2SMailReward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SMailReward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SMailReward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SMailReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SMailReward;

    /**
     * Decodes a C2SMailReward message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SMailReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SMailReward;

    /**
     * Verifies a C2SMailReward message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SMailReward message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SMailReward
     */
    public static fromObject(object: { [k: string]: any }): C2SMailReward;

    /**
     * Creates a plain object from a C2SMailReward message. Also converts values to other types if specified.
     * @param message C2SMailReward
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SMailReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SMailReward to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SMailReward
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SMailMark. */
export interface IC2SMailMark {

    /** C2SMailMark id */
    id?: (number|Long|null);
}

/** Represents a C2SMailMark. */
export class C2SMailMark implements IC2SMailMark {

    /**
     * Constructs a new C2SMailMark.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SMailMark);

    /** C2SMailMark id. */
    public id: (number|Long);

    /**
     * Creates a new C2SMailMark instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SMailMark instance
     */
    public static create(properties?: IC2SMailMark): C2SMailMark;

    /**
     * Encodes the specified C2SMailMark message. Does not implicitly {@link C2SMailMark.verify|verify} messages.
     * @param message C2SMailMark message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SMailMark, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SMailMark message, length delimited. Does not implicitly {@link C2SMailMark.verify|verify} messages.
     * @param message C2SMailMark message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SMailMark, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SMailMark message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SMailMark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SMailMark;

    /**
     * Decodes a C2SMailMark message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SMailMark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SMailMark;

    /**
     * Verifies a C2SMailMark message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SMailMark message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SMailMark
     */
    public static fromObject(object: { [k: string]: any }): C2SMailMark;

    /**
     * Creates a plain object from a C2SMailMark message. Also converts values to other types if specified.
     * @param message C2SMailMark
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SMailMark, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SMailMark to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SMailMark
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SMailDel. */
export interface IC2SMailDel {

    /** C2SMailDel mailIdList */
    mailIdList?: ((number|Long)[]|null);
}

/** Represents a C2SMailDel. */
export class C2SMailDel implements IC2SMailDel {

    /**
     * Constructs a new C2SMailDel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SMailDel);

    /** C2SMailDel mailIdList. */
    public mailIdList: (number|Long)[];

    /**
     * Creates a new C2SMailDel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SMailDel instance
     */
    public static create(properties?: IC2SMailDel): C2SMailDel;

    /**
     * Encodes the specified C2SMailDel message. Does not implicitly {@link C2SMailDel.verify|verify} messages.
     * @param message C2SMailDel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SMailDel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SMailDel message, length delimited. Does not implicitly {@link C2SMailDel.verify|verify} messages.
     * @param message C2SMailDel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SMailDel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SMailDel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SMailDel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SMailDel;

    /**
     * Decodes a C2SMailDel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SMailDel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SMailDel;

    /**
     * Verifies a C2SMailDel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SMailDel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SMailDel
     */
    public static fromObject(object: { [k: string]: any }): C2SMailDel;

    /**
     * Creates a plain object from a C2SMailDel message. Also converts values to other types if specified.
     * @param message C2SMailDel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SMailDel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SMailDel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SMailDel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CMailDel. */
export interface IS2CMailDel {

    /** S2CMailDel mailIdList */
    mailIdList?: ((number|Long)[]|null);
}

/** Represents a S2CMailDel. */
export class S2CMailDel implements IS2CMailDel {

    /**
     * Constructs a new S2CMailDel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CMailDel);

    /** S2CMailDel mailIdList. */
    public mailIdList: (number|Long)[];

    /**
     * Creates a new S2CMailDel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CMailDel instance
     */
    public static create(properties?: IS2CMailDel): S2CMailDel;

    /**
     * Encodes the specified S2CMailDel message. Does not implicitly {@link S2CMailDel.verify|verify} messages.
     * @param message S2CMailDel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CMailDel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CMailDel message, length delimited. Does not implicitly {@link S2CMailDel.verify|verify} messages.
     * @param message S2CMailDel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CMailDel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CMailDel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CMailDel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CMailDel;

    /**
     * Decodes a S2CMailDel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CMailDel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CMailDel;

    /**
     * Verifies a S2CMailDel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CMailDel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CMailDel
     */
    public static fromObject(object: { [k: string]: any }): S2CMailDel;

    /**
     * Creates a plain object from a S2CMailDel message. Also converts values to other types if specified.
     * @param message S2CMailDel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CMailDel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CMailDel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CMailDel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SEnterRoom. */
export interface IC2SEnterRoom {

    /** C2SEnterRoom name */
    name?: (string|null);
}

/** Represents a C2SEnterRoom. */
export class C2SEnterRoom implements IC2SEnterRoom {

    /**
     * Constructs a new C2SEnterRoom.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SEnterRoom);

    /** C2SEnterRoom name. */
    public name: string;

    /**
     * Creates a new C2SEnterRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SEnterRoom instance
     */
    public static create(properties?: IC2SEnterRoom): C2SEnterRoom;

    /**
     * Encodes the specified C2SEnterRoom message. Does not implicitly {@link C2SEnterRoom.verify|verify} messages.
     * @param message C2SEnterRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SEnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SEnterRoom message, length delimited. Does not implicitly {@link C2SEnterRoom.verify|verify} messages.
     * @param message C2SEnterRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SEnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SEnterRoom message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SEnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SEnterRoom;

    /**
     * Decodes a C2SEnterRoom message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SEnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SEnterRoom;

    /**
     * Verifies a C2SEnterRoom message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SEnterRoom message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SEnterRoom
     */
    public static fromObject(object: { [k: string]: any }): C2SEnterRoom;

    /**
     * Creates a plain object from a C2SEnterRoom message. Also converts values to other types if specified.
     * @param message C2SEnterRoom
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SEnterRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SEnterRoom to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SEnterRoom
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CEnterRoom. */
export interface IS2CEnterRoom {

    /** S2CEnterRoom id */
    id?: (number|Long|null);

    /** S2CEnterRoom time */
    time?: (number|Long|null);
}

/** Represents a S2CEnterRoom. */
export class S2CEnterRoom implements IS2CEnterRoom {

    /**
     * Constructs a new S2CEnterRoom.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CEnterRoom);

    /** S2CEnterRoom id. */
    public id: (number|Long);

    /** S2CEnterRoom time. */
    public time: (number|Long);

    /**
     * Creates a new S2CEnterRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CEnterRoom instance
     */
    public static create(properties?: IS2CEnterRoom): S2CEnterRoom;

    /**
     * Encodes the specified S2CEnterRoom message. Does not implicitly {@link S2CEnterRoom.verify|verify} messages.
     * @param message S2CEnterRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CEnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CEnterRoom message, length delimited. Does not implicitly {@link S2CEnterRoom.verify|verify} messages.
     * @param message S2CEnterRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CEnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CEnterRoom message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CEnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CEnterRoom;

    /**
     * Decodes a S2CEnterRoom message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CEnterRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CEnterRoom;

    /**
     * Verifies a S2CEnterRoom message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CEnterRoom message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CEnterRoom
     */
    public static fromObject(object: { [k: string]: any }): S2CEnterRoom;

    /**
     * Creates a plain object from a S2CEnterRoom message. Also converts values to other types if specified.
     * @param message S2CEnterRoom
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CEnterRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CEnterRoom to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CEnterRoom
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SMove. */
export interface IC2SMove {

    /** C2SMove x */
    x?: (number|null);

    /** C2SMove y */
    y?: (number|null);
}

/** Represents a C2SMove. */
export class C2SMove implements IC2SMove {

    /**
     * Constructs a new C2SMove.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SMove);

    /** C2SMove x. */
    public x: number;

    /** C2SMove y. */
    public y: number;

    /**
     * Creates a new C2SMove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SMove instance
     */
    public static create(properties?: IC2SMove): C2SMove;

    /**
     * Encodes the specified C2SMove message. Does not implicitly {@link C2SMove.verify|verify} messages.
     * @param message C2SMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SMove message, length delimited. Does not implicitly {@link C2SMove.verify|verify} messages.
     * @param message C2SMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SMove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SMove;

    /**
     * Decodes a C2SMove message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SMove;

    /**
     * Verifies a C2SMove message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SMove message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SMove
     */
    public static fromObject(object: { [k: string]: any }): C2SMove;

    /**
     * Creates a plain object from a C2SMove message. Also converts values to other types if specified.
     * @param message C2SMove
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SMove to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SMove
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CMove. */
export interface IS2CMove {

    /** S2CMove id */
    id?: (number|Long|null);

    /** S2CMove x */
    x?: (number|null);

    /** S2CMove y */
    y?: (number|null);

    /** S2CMove dirx */
    dirx?: (number|null);

    /** S2CMove diry */
    diry?: (number|null);

    /** S2CMove movetime */
    movetime?: (number|Long|null);
}

/** Represents a S2CMove. */
export class S2CMove implements IS2CMove {

    /**
     * Constructs a new S2CMove.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CMove);

    /** S2CMove id. */
    public id: (number|Long);

    /** S2CMove x. */
    public x: number;

    /** S2CMove y. */
    public y: number;

    /** S2CMove dirx. */
    public dirx: number;

    /** S2CMove diry. */
    public diry: number;

    /** S2CMove movetime. */
    public movetime: (number|Long);

    /**
     * Creates a new S2CMove instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CMove instance
     */
    public static create(properties?: IS2CMove): S2CMove;

    /**
     * Encodes the specified S2CMove message. Does not implicitly {@link S2CMove.verify|verify} messages.
     * @param message S2CMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CMove message, length delimited. Does not implicitly {@link S2CMove.verify|verify} messages.
     * @param message S2CMove message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CMove, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CMove message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CMove;

    /**
     * Decodes a S2CMove message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CMove
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CMove;

    /**
     * Verifies a S2CMove message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CMove message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CMove
     */
    public static fromObject(object: { [k: string]: any }): S2CMove;

    /**
     * Creates a plain object from a S2CMove message. Also converts values to other types if specified.
     * @param message S2CMove
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CMove to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CMove
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CEnterView. */
export interface IS2CEnterView {

    /** S2CEnterView id */
    id?: (number|Long|null);

    /** S2CEnterView x */
    x?: (number|null);

    /** S2CEnterView y */
    y?: (number|null);

    /** S2CEnterView radius */
    radius?: (number|null);

    /** S2CEnterView spriteid */
    spriteid?: (number|Long|null);

    /** S2CEnterView speed */
    speed?: (number|null);

    /** S2CEnterView dir */
    dir?: (IVector2|null);

    /** S2CEnterView name */
    name?: (string|null);

    /** S2CEnterView movetime */
    movetime?: (number|Long|null);
}

/** Represents a S2CEnterView. */
export class S2CEnterView implements IS2CEnterView {

    /**
     * Constructs a new S2CEnterView.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CEnterView);

    /** S2CEnterView id. */
    public id: (number|Long);

    /** S2CEnterView x. */
    public x: number;

    /** S2CEnterView y. */
    public y: number;

    /** S2CEnterView radius. */
    public radius: number;

    /** S2CEnterView spriteid. */
    public spriteid: (number|Long);

    /** S2CEnterView speed. */
    public speed: number;

    /** S2CEnterView dir. */
    public dir?: (IVector2|null);

    /** S2CEnterView name. */
    public name: string;

    /** S2CEnterView movetime. */
    public movetime: (number|Long);

    /**
     * Creates a new S2CEnterView instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CEnterView instance
     */
    public static create(properties?: IS2CEnterView): S2CEnterView;

    /**
     * Encodes the specified S2CEnterView message. Does not implicitly {@link S2CEnterView.verify|verify} messages.
     * @param message S2CEnterView message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CEnterView, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CEnterView message, length delimited. Does not implicitly {@link S2CEnterView.verify|verify} messages.
     * @param message S2CEnterView message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CEnterView, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CEnterView message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CEnterView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CEnterView;

    /**
     * Decodes a S2CEnterView message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CEnterView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CEnterView;

    /**
     * Verifies a S2CEnterView message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CEnterView message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CEnterView
     */
    public static fromObject(object: { [k: string]: any }): S2CEnterView;

    /**
     * Creates a plain object from a S2CEnterView message. Also converts values to other types if specified.
     * @param message S2CEnterView
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CEnterView, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CEnterView to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CEnterView
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CLeaveView. */
export interface IS2CLeaveView {

    /** S2CLeaveView id */
    id?: (number|Long|null);
}

/** Represents a S2CLeaveView. */
export class S2CLeaveView implements IS2CLeaveView {

    /**
     * Constructs a new S2CLeaveView.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CLeaveView);

    /** S2CLeaveView id. */
    public id: (number|Long);

    /**
     * Creates a new S2CLeaveView instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CLeaveView instance
     */
    public static create(properties?: IS2CLeaveView): S2CLeaveView;

    /**
     * Encodes the specified S2CLeaveView message. Does not implicitly {@link S2CLeaveView.verify|verify} messages.
     * @param message S2CLeaveView message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CLeaveView, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CLeaveView message, length delimited. Does not implicitly {@link S2CLeaveView.verify|verify} messages.
     * @param message S2CLeaveView message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CLeaveView, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CLeaveView message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CLeaveView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CLeaveView;

    /**
     * Decodes a S2CLeaveView message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CLeaveView
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CLeaveView;

    /**
     * Verifies a S2CLeaveView message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CLeaveView message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CLeaveView
     */
    public static fromObject(object: { [k: string]: any }): S2CLeaveView;

    /**
     * Creates a plain object from a S2CLeaveView message. Also converts values to other types if specified.
     * @param message S2CLeaveView
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CLeaveView, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CLeaveView to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CLeaveView
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CUpdateRadius. */
export interface IS2CUpdateRadius {

    /** S2CUpdateRadius id */
    id?: (number|Long|null);

    /** S2CUpdateRadius radius */
    radius?: (number|null);
}

/** Represents a S2CUpdateRadius. */
export class S2CUpdateRadius implements IS2CUpdateRadius {

    /**
     * Constructs a new S2CUpdateRadius.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CUpdateRadius);

    /** S2CUpdateRadius id. */
    public id: (number|Long);

    /** S2CUpdateRadius radius. */
    public radius: number;

    /**
     * Creates a new S2CUpdateRadius instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CUpdateRadius instance
     */
    public static create(properties?: IS2CUpdateRadius): S2CUpdateRadius;

    /**
     * Encodes the specified S2CUpdateRadius message. Does not implicitly {@link S2CUpdateRadius.verify|verify} messages.
     * @param message S2CUpdateRadius message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CUpdateRadius, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CUpdateRadius message, length delimited. Does not implicitly {@link S2CUpdateRadius.verify|verify} messages.
     * @param message S2CUpdateRadius message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CUpdateRadius, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CUpdateRadius message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CUpdateRadius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CUpdateRadius;

    /**
     * Decodes a S2CUpdateRadius message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CUpdateRadius
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CUpdateRadius;

    /**
     * Verifies a S2CUpdateRadius message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CUpdateRadius message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CUpdateRadius
     */
    public static fromObject(object: { [k: string]: any }): S2CUpdateRadius;

    /**
     * Creates a plain object from a S2CUpdateRadius message. Also converts values to other types if specified.
     * @param message S2CUpdateRadius
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CUpdateRadius, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CUpdateRadius to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CUpdateRadius
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CDead. */
export interface IS2CDead {

    /** S2CDead id */
    id?: (number|Long|null);
}

/** Represents a S2CDead. */
export class S2CDead implements IS2CDead {

    /**
     * Constructs a new S2CDead.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CDead);

    /** S2CDead id. */
    public id: (number|Long);

    /**
     * Creates a new S2CDead instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CDead instance
     */
    public static create(properties?: IS2CDead): S2CDead;

    /**
     * Encodes the specified S2CDead message. Does not implicitly {@link S2CDead.verify|verify} messages.
     * @param message S2CDead message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CDead, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CDead message, length delimited. Does not implicitly {@link S2CDead.verify|verify} messages.
     * @param message S2CDead message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CDead, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CDead message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CDead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CDead;

    /**
     * Decodes a S2CDead message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CDead
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CDead;

    /**
     * Verifies a S2CDead message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CDead message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CDead
     */
    public static fromObject(object: { [k: string]: any }): S2CDead;

    /**
     * Creates a plain object from a S2CDead message. Also converts values to other types if specified.
     * @param message S2CDead
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CDead, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CDead to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CDead
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CErrorCode. */
export interface IS2CErrorCode {

    /** S2CErrorCode code */
    code?: (number|null);
}

/** Represents a S2CErrorCode. */
export class S2CErrorCode implements IS2CErrorCode {

    /**
     * Constructs a new S2CErrorCode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CErrorCode);

    /** S2CErrorCode code. */
    public code: number;

    /**
     * Creates a new S2CErrorCode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CErrorCode instance
     */
    public static create(properties?: IS2CErrorCode): S2CErrorCode;

    /**
     * Encodes the specified S2CErrorCode message. Does not implicitly {@link S2CErrorCode.verify|verify} messages.
     * @param message S2CErrorCode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CErrorCode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CErrorCode message, length delimited. Does not implicitly {@link S2CErrorCode.verify|verify} messages.
     * @param message S2CErrorCode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CErrorCode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CErrorCode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CErrorCode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CErrorCode;

    /**
     * Decodes a S2CErrorCode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CErrorCode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CErrorCode;

    /**
     * Verifies a S2CErrorCode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CErrorCode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CErrorCode
     */
    public static fromObject(object: { [k: string]: any }): S2CErrorCode;

    /**
     * Creates a plain object from a S2CErrorCode message. Also converts values to other types if specified.
     * @param message S2CErrorCode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CErrorCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CErrorCode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CErrorCode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SLogin. */
export interface IC2SLogin {

    /** C2SLogin openid */
    openid?: (string|null);
}

/** Represents a C2SLogin. */
export class C2SLogin implements IC2SLogin {

    /**
     * Constructs a new C2SLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SLogin);

    /** C2SLogin openid. */
    public openid: string;

    /**
     * Creates a new C2SLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SLogin instance
     */
    public static create(properties?: IC2SLogin): C2SLogin;

    /**
     * Encodes the specified C2SLogin message. Does not implicitly {@link C2SLogin.verify|verify} messages.
     * @param message C2SLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SLogin message, length delimited. Does not implicitly {@link C2SLogin.verify|verify} messages.
     * @param message C2SLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SLogin;

    /**
     * Decodes a C2SLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SLogin;

    /**
     * Verifies a C2SLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SLogin
     */
    public static fromObject(object: { [k: string]: any }): C2SLogin;

    /**
     * Creates a plain object from a C2SLogin message. Also converts values to other types if specified.
     * @param message C2SLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SLogin
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CLogin. */
export interface IS2CLogin {

    /** S2CLogin ok */
    ok?: (boolean|null);

    /** S2CLogin time */
    time?: (number|Long|null);

    /** S2CLogin timezone */
    timezone?: (number|Long|null);
}

/** Represents a S2CLogin. */
export class S2CLogin implements IS2CLogin {

    /**
     * Constructs a new S2CLogin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CLogin);

    /** S2CLogin ok. */
    public ok: boolean;

    /** S2CLogin time. */
    public time: (number|Long);

    /** S2CLogin timezone. */
    public timezone: (number|Long);

    /**
     * Creates a new S2CLogin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CLogin instance
     */
    public static create(properties?: IS2CLogin): S2CLogin;

    /**
     * Encodes the specified S2CLogin message. Does not implicitly {@link S2CLogin.verify|verify} messages.
     * @param message S2CLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CLogin message, length delimited. Does not implicitly {@link S2CLogin.verify|verify} messages.
     * @param message S2CLogin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CLogin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CLogin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CLogin;

    /**
     * Decodes a S2CLogin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CLogin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CLogin;

    /**
     * Verifies a S2CLogin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CLogin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CLogin
     */
    public static fromObject(object: { [k: string]: any }): S2CLogin;

    /**
     * Creates a plain object from a S2CLogin message. Also converts values to other types if specified.
     * @param message S2CLogin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CLogin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CLogin
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SItemList. */
export interface IC2SItemList {
}

/** Represents a C2SItemList. */
export class C2SItemList implements IC2SItemList {

    /**
     * Constructs a new C2SItemList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SItemList);

    /**
     * Creates a new C2SItemList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SItemList instance
     */
    public static create(properties?: IC2SItemList): C2SItemList;

    /**
     * Encodes the specified C2SItemList message. Does not implicitly {@link C2SItemList.verify|verify} messages.
     * @param message C2SItemList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SItemList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SItemList message, length delimited. Does not implicitly {@link C2SItemList.verify|verify} messages.
     * @param message C2SItemList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SItemList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SItemList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SItemList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SItemList;

    /**
     * Decodes a C2SItemList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SItemList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SItemList;

    /**
     * Verifies a C2SItemList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SItemList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SItemList
     */
    public static fromObject(object: { [k: string]: any }): C2SItemList;

    /**
     * Creates a plain object from a C2SItemList message. Also converts values to other types if specified.
     * @param message C2SItemList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SItemList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SItemList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SItemList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CItemList. */
export interface IS2CItemList {

    /** S2CItemList list */
    list?: ({ [k: string]: IItemData }|null);
}

/** Represents a S2CItemList. */
export class S2CItemList implements IS2CItemList {

    /**
     * Constructs a new S2CItemList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CItemList);

    /** S2CItemList list. */
    public list: { [k: string]: IItemData };

    /**
     * Creates a new S2CItemList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CItemList instance
     */
    public static create(properties?: IS2CItemList): S2CItemList;

    /**
     * Encodes the specified S2CItemList message. Does not implicitly {@link S2CItemList.verify|verify} messages.
     * @param message S2CItemList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CItemList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CItemList message, length delimited. Does not implicitly {@link S2CItemList.verify|verify} messages.
     * @param message S2CItemList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CItemList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CItemList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CItemList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CItemList;

    /**
     * Decodes a S2CItemList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CItemList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CItemList;

    /**
     * Verifies a S2CItemList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CItemList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CItemList
     */
    public static fromObject(object: { [k: string]: any }): S2CItemList;

    /**
     * Creates a plain object from a S2CItemList message. Also converts values to other types if specified.
     * @param message S2CItemList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CItemList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CItemList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CItemList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SUseItem. */
export interface IC2SUseItem {

    /** C2SUseItem id */
    id?: (number|null);

    /** C2SUseItem count */
    count?: (number|Long|null);
}

/** Represents a C2SUseItem. */
export class C2SUseItem implements IC2SUseItem {

    /**
     * Constructs a new C2SUseItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SUseItem);

    /** C2SUseItem id. */
    public id: number;

    /** C2SUseItem count. */
    public count: (number|Long);

    /**
     * Creates a new C2SUseItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SUseItem instance
     */
    public static create(properties?: IC2SUseItem): C2SUseItem;

    /**
     * Encodes the specified C2SUseItem message. Does not implicitly {@link C2SUseItem.verify|verify} messages.
     * @param message C2SUseItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SUseItem message, length delimited. Does not implicitly {@link C2SUseItem.verify|verify} messages.
     * @param message C2SUseItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SUseItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SUseItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SUseItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SUseItem;

    /**
     * Decodes a C2SUseItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SUseItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SUseItem;

    /**
     * Verifies a C2SUseItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SUseItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SUseItem
     */
    public static fromObject(object: { [k: string]: any }): C2SUseItem;

    /**
     * Creates a plain object from a C2SUseItem message. Also converts values to other types if specified.
     * @param message C2SUseItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SUseItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SUseItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SUseItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CUpdateItem. */
export interface IS2CUpdateItem {

    /** S2CUpdateItem list */
    list?: (IItemData[]|null);
}

/** Represents a S2CUpdateItem. */
export class S2CUpdateItem implements IS2CUpdateItem {

    /**
     * Constructs a new S2CUpdateItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CUpdateItem);

    /** S2CUpdateItem list. */
    public list: IItemData[];

    /**
     * Creates a new S2CUpdateItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CUpdateItem instance
     */
    public static create(properties?: IS2CUpdateItem): S2CUpdateItem;

    /**
     * Encodes the specified S2CUpdateItem message. Does not implicitly {@link S2CUpdateItem.verify|verify} messages.
     * @param message S2CUpdateItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CUpdateItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CUpdateItem message, length delimited. Does not implicitly {@link S2CUpdateItem.verify|verify} messages.
     * @param message S2CUpdateItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CUpdateItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CUpdateItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CUpdateItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CUpdateItem;

    /**
     * Decodes a S2CUpdateItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CUpdateItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CUpdateItem;

    /**
     * Verifies a S2CUpdateItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CUpdateItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CUpdateItem
     */
    public static fromObject(object: { [k: string]: any }): S2CUpdateItem;

    /**
     * Creates a plain object from a S2CUpdateItem message. Also converts values to other types if specified.
     * @param message S2CUpdateItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CUpdateItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CUpdateItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CUpdateItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SHello. */
export interface IC2SHello {

    /** C2SHello hello */
    hello?: (string|null);
}

/** Represents a C2SHello. */
export class C2SHello implements IC2SHello {

    /**
     * Constructs a new C2SHello.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SHello);

    /** C2SHello hello. */
    public hello: string;

    /**
     * Creates a new C2SHello instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SHello instance
     */
    public static create(properties?: IC2SHello): C2SHello;

    /**
     * Encodes the specified C2SHello message. Does not implicitly {@link C2SHello.verify|verify} messages.
     * @param message C2SHello message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SHello, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SHello message, length delimited. Does not implicitly {@link C2SHello.verify|verify} messages.
     * @param message C2SHello message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SHello, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SHello message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SHello;

    /**
     * Decodes a C2SHello message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SHello
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SHello;

    /**
     * Verifies a C2SHello message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SHello message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SHello
     */
    public static fromObject(object: { [k: string]: any }): C2SHello;

    /**
     * Creates a plain object from a C2SHello message. Also converts values to other types if specified.
     * @param message C2SHello
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SHello, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SHello to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SHello
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CWorld. */
export interface IS2CWorld {

    /** S2CWorld world */
    world?: (string|null);
}

/** Represents a S2CWorld. */
export class S2CWorld implements IS2CWorld {

    /**
     * Constructs a new S2CWorld.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CWorld);

    /** S2CWorld world. */
    public world: string;

    /**
     * Creates a new S2CWorld instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CWorld instance
     */
    public static create(properties?: IS2CWorld): S2CWorld;

    /**
     * Encodes the specified S2CWorld message. Does not implicitly {@link S2CWorld.verify|verify} messages.
     * @param message S2CWorld message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CWorld, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CWorld message, length delimited. Does not implicitly {@link S2CWorld.verify|verify} messages.
     * @param message S2CWorld message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CWorld, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CWorld message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CWorld
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CWorld;

    /**
     * Decodes a S2CWorld message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CWorld
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CWorld;

    /**
     * Verifies a S2CWorld message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CWorld message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CWorld
     */
    public static fromObject(object: { [k: string]: any }): S2CWorld;

    /**
     * Creates a plain object from a S2CWorld message. Also converts values to other types if specified.
     * @param message S2CWorld
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CWorld, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CWorld to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CWorld
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SStartGameLevel. */
export interface IC2SStartGameLevel {

    /** C2SStartGameLevel levelid */
    levelid?: (number|null);
}

/** Represents a C2SStartGameLevel. */
export class C2SStartGameLevel implements IC2SStartGameLevel {

    /**
     * Constructs a new C2SStartGameLevel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SStartGameLevel);

    /** C2SStartGameLevel levelid. */
    public levelid: number;

    /**
     * Creates a new C2SStartGameLevel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SStartGameLevel instance
     */
    public static create(properties?: IC2SStartGameLevel): C2SStartGameLevel;

    /**
     * Encodes the specified C2SStartGameLevel message. Does not implicitly {@link C2SStartGameLevel.verify|verify} messages.
     * @param message C2SStartGameLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SStartGameLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SStartGameLevel message, length delimited. Does not implicitly {@link C2SStartGameLevel.verify|verify} messages.
     * @param message C2SStartGameLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SStartGameLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SStartGameLevel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SStartGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SStartGameLevel;

    /**
     * Decodes a C2SStartGameLevel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SStartGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SStartGameLevel;

    /**
     * Verifies a C2SStartGameLevel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SStartGameLevel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SStartGameLevel
     */
    public static fromObject(object: { [k: string]: any }): C2SStartGameLevel;

    /**
     * Creates a plain object from a C2SStartGameLevel message. Also converts values to other types if specified.
     * @param message C2SStartGameLevel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SStartGameLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SStartGameLevel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SStartGameLevel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CStartGameLevel. */
export interface IS2CStartGameLevel {
}

/** Represents a S2CStartGameLevel. */
export class S2CStartGameLevel implements IS2CStartGameLevel {

    /**
     * Constructs a new S2CStartGameLevel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CStartGameLevel);

    /**
     * Creates a new S2CStartGameLevel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CStartGameLevel instance
     */
    public static create(properties?: IS2CStartGameLevel): S2CStartGameLevel;

    /**
     * Encodes the specified S2CStartGameLevel message. Does not implicitly {@link S2CStartGameLevel.verify|verify} messages.
     * @param message S2CStartGameLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CStartGameLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CStartGameLevel message, length delimited. Does not implicitly {@link S2CStartGameLevel.verify|verify} messages.
     * @param message S2CStartGameLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CStartGameLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CStartGameLevel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CStartGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CStartGameLevel;

    /**
     * Decodes a S2CStartGameLevel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CStartGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CStartGameLevel;

    /**
     * Verifies a S2CStartGameLevel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CStartGameLevel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CStartGameLevel
     */
    public static fromObject(object: { [k: string]: any }): S2CStartGameLevel;

    /**
     * Creates a plain object from a S2CStartGameLevel message. Also converts values to other types if specified.
     * @param message S2CStartGameLevel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CStartGameLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CStartGameLevel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CStartGameLevel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SEndGameLevel. */
export interface IC2SEndGameLevel {

    /** C2SEndGameLevel levelid */
    levelid?: (number|null);
}

/** Represents a C2SEndGameLevel. */
export class C2SEndGameLevel implements IC2SEndGameLevel {

    /**
     * Constructs a new C2SEndGameLevel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SEndGameLevel);

    /** C2SEndGameLevel levelid. */
    public levelid: number;

    /**
     * Creates a new C2SEndGameLevel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SEndGameLevel instance
     */
    public static create(properties?: IC2SEndGameLevel): C2SEndGameLevel;

    /**
     * Encodes the specified C2SEndGameLevel message. Does not implicitly {@link C2SEndGameLevel.verify|verify} messages.
     * @param message C2SEndGameLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SEndGameLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SEndGameLevel message, length delimited. Does not implicitly {@link C2SEndGameLevel.verify|verify} messages.
     * @param message C2SEndGameLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SEndGameLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SEndGameLevel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SEndGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SEndGameLevel;

    /**
     * Decodes a C2SEndGameLevel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SEndGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SEndGameLevel;

    /**
     * Verifies a C2SEndGameLevel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SEndGameLevel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SEndGameLevel
     */
    public static fromObject(object: { [k: string]: any }): C2SEndGameLevel;

    /**
     * Creates a plain object from a C2SEndGameLevel message. Also converts values to other types if specified.
     * @param message C2SEndGameLevel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SEndGameLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SEndGameLevel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SEndGameLevel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CEndGameLevel. */
export interface IS2CEndGameLevel {

    /** S2CEndGameLevel round */
    round?: (number|null);

    /** S2CEndGameLevel battleresult */
    battleresult?: (number|null);
}

/** Represents a S2CEndGameLevel. */
export class S2CEndGameLevel implements IS2CEndGameLevel {

    /**
     * Constructs a new S2CEndGameLevel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CEndGameLevel);

    /** S2CEndGameLevel round. */
    public round: number;

    /** S2CEndGameLevel battleresult. */
    public battleresult: number;

    /**
     * Creates a new S2CEndGameLevel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CEndGameLevel instance
     */
    public static create(properties?: IS2CEndGameLevel): S2CEndGameLevel;

    /**
     * Encodes the specified S2CEndGameLevel message. Does not implicitly {@link S2CEndGameLevel.verify|verify} messages.
     * @param message S2CEndGameLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CEndGameLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CEndGameLevel message, length delimited. Does not implicitly {@link S2CEndGameLevel.verify|verify} messages.
     * @param message S2CEndGameLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CEndGameLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CEndGameLevel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CEndGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CEndGameLevel;

    /**
     * Decodes a S2CEndGameLevel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CEndGameLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CEndGameLevel;

    /**
     * Verifies a S2CEndGameLevel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CEndGameLevel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CEndGameLevel
     */
    public static fromObject(object: { [k: string]: any }): S2CEndGameLevel;

    /**
     * Creates a plain object from a S2CEndGameLevel message. Also converts values to other types if specified.
     * @param message S2CEndGameLevel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CEndGameLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CEndGameLevel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CEndGameLevel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SUpRoleLevel. */
export interface IC2SUpRoleLevel {
}

/** Represents a C2SUpRoleLevel. */
export class C2SUpRoleLevel implements IC2SUpRoleLevel {

    /**
     * Constructs a new C2SUpRoleLevel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SUpRoleLevel);

    /**
     * Creates a new C2SUpRoleLevel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SUpRoleLevel instance
     */
    public static create(properties?: IC2SUpRoleLevel): C2SUpRoleLevel;

    /**
     * Encodes the specified C2SUpRoleLevel message. Does not implicitly {@link C2SUpRoleLevel.verify|verify} messages.
     * @param message C2SUpRoleLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SUpRoleLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SUpRoleLevel message, length delimited. Does not implicitly {@link C2SUpRoleLevel.verify|verify} messages.
     * @param message C2SUpRoleLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SUpRoleLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SUpRoleLevel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SUpRoleLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SUpRoleLevel;

    /**
     * Decodes a C2SUpRoleLevel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SUpRoleLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SUpRoleLevel;

    /**
     * Verifies a C2SUpRoleLevel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SUpRoleLevel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SUpRoleLevel
     */
    public static fromObject(object: { [k: string]: any }): C2SUpRoleLevel;

    /**
     * Creates a plain object from a C2SUpRoleLevel message. Also converts values to other types if specified.
     * @param message C2SUpRoleLevel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SUpRoleLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SUpRoleLevel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SUpRoleLevel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CUpRoleLevel. */
export interface IS2CUpRoleLevel {
}

/** Represents a S2CUpRoleLevel. */
export class S2CUpRoleLevel implements IS2CUpRoleLevel {

    /**
     * Constructs a new S2CUpRoleLevel.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CUpRoleLevel);

    /**
     * Creates a new S2CUpRoleLevel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CUpRoleLevel instance
     */
    public static create(properties?: IS2CUpRoleLevel): S2CUpRoleLevel;

    /**
     * Encodes the specified S2CUpRoleLevel message. Does not implicitly {@link S2CUpRoleLevel.verify|verify} messages.
     * @param message S2CUpRoleLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CUpRoleLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CUpRoleLevel message, length delimited. Does not implicitly {@link S2CUpRoleLevel.verify|verify} messages.
     * @param message S2CUpRoleLevel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CUpRoleLevel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CUpRoleLevel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CUpRoleLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CUpRoleLevel;

    /**
     * Decodes a S2CUpRoleLevel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CUpRoleLevel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CUpRoleLevel;

    /**
     * Verifies a S2CUpRoleLevel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CUpRoleLevel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CUpRoleLevel
     */
    public static fromObject(object: { [k: string]: any }): S2CUpRoleLevel;

    /**
     * Creates a plain object from a S2CUpRoleLevel message. Also converts values to other types if specified.
     * @param message S2CUpRoleLevel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CUpRoleLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CUpRoleLevel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CUpRoleLevel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SAddAttributePoint. */
export interface IC2SAddAttributePoint {

    /** C2SAddAttributePoint numerictype */
    numerictype?: (number|null);
}

/** Represents a C2SAddAttributePoint. */
export class C2SAddAttributePoint implements IC2SAddAttributePoint {

    /**
     * Constructs a new C2SAddAttributePoint.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SAddAttributePoint);

    /** C2SAddAttributePoint numerictype. */
    public numerictype: number;

    /**
     * Creates a new C2SAddAttributePoint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SAddAttributePoint instance
     */
    public static create(properties?: IC2SAddAttributePoint): C2SAddAttributePoint;

    /**
     * Encodes the specified C2SAddAttributePoint message. Does not implicitly {@link C2SAddAttributePoint.verify|verify} messages.
     * @param message C2SAddAttributePoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SAddAttributePoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SAddAttributePoint message, length delimited. Does not implicitly {@link C2SAddAttributePoint.verify|verify} messages.
     * @param message C2SAddAttributePoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SAddAttributePoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SAddAttributePoint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SAddAttributePoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SAddAttributePoint;

    /**
     * Decodes a C2SAddAttributePoint message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SAddAttributePoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SAddAttributePoint;

    /**
     * Verifies a C2SAddAttributePoint message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SAddAttributePoint message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SAddAttributePoint
     */
    public static fromObject(object: { [k: string]: any }): C2SAddAttributePoint;

    /**
     * Creates a plain object from a C2SAddAttributePoint message. Also converts values to other types if specified.
     * @param message C2SAddAttributePoint
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SAddAttributePoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SAddAttributePoint to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SAddAttributePoint
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CAddAttributePoint. */
export interface IS2CAddAttributePoint {
}

/** Represents a S2CAddAttributePoint. */
export class S2CAddAttributePoint implements IS2CAddAttributePoint {

    /**
     * Constructs a new S2CAddAttributePoint.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CAddAttributePoint);

    /**
     * Creates a new S2CAddAttributePoint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CAddAttributePoint instance
     */
    public static create(properties?: IS2CAddAttributePoint): S2CAddAttributePoint;

    /**
     * Encodes the specified S2CAddAttributePoint message. Does not implicitly {@link S2CAddAttributePoint.verify|verify} messages.
     * @param message S2CAddAttributePoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CAddAttributePoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CAddAttributePoint message, length delimited. Does not implicitly {@link S2CAddAttributePoint.verify|verify} messages.
     * @param message S2CAddAttributePoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CAddAttributePoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CAddAttributePoint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CAddAttributePoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CAddAttributePoint;

    /**
     * Decodes a S2CAddAttributePoint message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CAddAttributePoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CAddAttributePoint;

    /**
     * Verifies a S2CAddAttributePoint message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CAddAttributePoint message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CAddAttributePoint
     */
    public static fromObject(object: { [k: string]: any }): S2CAddAttributePoint;

    /**
     * Creates a plain object from a S2CAddAttributePoint message. Also converts values to other types if specified.
     * @param message S2CAddAttributePoint
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CAddAttributePoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CAddAttributePoint to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CAddAttributePoint
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SSellItem. */
export interface IC2SSellItem {

    /** C2SSellItem itemid */
    itemid?: (number|null);
}

/** Represents a C2SSellItem. */
export class C2SSellItem implements IC2SSellItem {

    /**
     * Constructs a new C2SSellItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SSellItem);

    /** C2SSellItem itemid. */
    public itemid: number;

    /**
     * Creates a new C2SSellItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SSellItem instance
     */
    public static create(properties?: IC2SSellItem): C2SSellItem;

    /**
     * Encodes the specified C2SSellItem message. Does not implicitly {@link C2SSellItem.verify|verify} messages.
     * @param message C2SSellItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SSellItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SSellItem message, length delimited. Does not implicitly {@link C2SSellItem.verify|verify} messages.
     * @param message C2SSellItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SSellItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SSellItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SSellItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SSellItem;

    /**
     * Decodes a C2SSellItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SSellItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SSellItem;

    /**
     * Verifies a C2SSellItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SSellItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SSellItem
     */
    public static fromObject(object: { [k: string]: any }): C2SSellItem;

    /**
     * Creates a plain object from a C2SSellItem message. Also converts values to other types if specified.
     * @param message C2SSellItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SSellItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SSellItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SSellItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CSellItem. */
export interface IS2CSellItem {
}

/** Represents a S2CSellItem. */
export class S2CSellItem implements IS2CSellItem {

    /**
     * Constructs a new S2CSellItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CSellItem);

    /**
     * Creates a new S2CSellItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CSellItem instance
     */
    public static create(properties?: IS2CSellItem): S2CSellItem;

    /**
     * Encodes the specified S2CSellItem message. Does not implicitly {@link S2CSellItem.verify|verify} messages.
     * @param message S2CSellItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CSellItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CSellItem message, length delimited. Does not implicitly {@link S2CSellItem.verify|verify} messages.
     * @param message S2CSellItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CSellItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CSellItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CSellItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CSellItem;

    /**
     * Decodes a S2CSellItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CSellItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CSellItem;

    /**
     * Verifies a S2CSellItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CSellItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CSellItem
     */
    public static fromObject(object: { [k: string]: any }): S2CSellItem;

    /**
     * Creates a plain object from a S2CSellItem message. Also converts values to other types if specified.
     * @param message S2CSellItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CSellItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CSellItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CSellItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SEquipItem. */
export interface IC2SEquipItem {

    /** C2SEquipItem itemid */
    itemid?: (number|null);
}

/** Represents a C2SEquipItem. */
export class C2SEquipItem implements IC2SEquipItem {

    /**
     * Constructs a new C2SEquipItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SEquipItem);

    /** C2SEquipItem itemid. */
    public itemid: number;

    /**
     * Creates a new C2SEquipItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SEquipItem instance
     */
    public static create(properties?: IC2SEquipItem): C2SEquipItem;

    /**
     * Encodes the specified C2SEquipItem message. Does not implicitly {@link C2SEquipItem.verify|verify} messages.
     * @param message C2SEquipItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SEquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SEquipItem message, length delimited. Does not implicitly {@link C2SEquipItem.verify|verify} messages.
     * @param message C2SEquipItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SEquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SEquipItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SEquipItem;

    /**
     * Decodes a C2SEquipItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SEquipItem;

    /**
     * Verifies a C2SEquipItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SEquipItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SEquipItem
     */
    public static fromObject(object: { [k: string]: any }): C2SEquipItem;

    /**
     * Creates a plain object from a C2SEquipItem message. Also converts values to other types if specified.
     * @param message C2SEquipItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SEquipItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SEquipItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SEquipItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CEquipItem. */
export interface IS2CEquipItem {
}

/** Represents a S2CEquipItem. */
export class S2CEquipItem implements IS2CEquipItem {

    /**
     * Constructs a new S2CEquipItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CEquipItem);

    /**
     * Creates a new S2CEquipItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CEquipItem instance
     */
    public static create(properties?: IS2CEquipItem): S2CEquipItem;

    /**
     * Encodes the specified S2CEquipItem message. Does not implicitly {@link S2CEquipItem.verify|verify} messages.
     * @param message S2CEquipItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CEquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CEquipItem message, length delimited. Does not implicitly {@link S2CEquipItem.verify|verify} messages.
     * @param message S2CEquipItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CEquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CEquipItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CEquipItem;

    /**
     * Decodes a S2CEquipItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CEquipItem;

    /**
     * Verifies a S2CEquipItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CEquipItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CEquipItem
     */
    public static fromObject(object: { [k: string]: any }): S2CEquipItem;

    /**
     * Creates a plain object from a S2CEquipItem message. Also converts values to other types if specified.
     * @param message S2CEquipItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CEquipItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CEquipItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CEquipItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SUnLoadEquipItem. */
export interface IC2SUnLoadEquipItem {

    /** C2SUnLoadEquipItem equipposition */
    equipposition?: (number|null);
}

/** Represents a C2SUnLoadEquipItem. */
export class C2SUnLoadEquipItem implements IC2SUnLoadEquipItem {

    /**
     * Constructs a new C2SUnLoadEquipItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SUnLoadEquipItem);

    /** C2SUnLoadEquipItem equipposition. */
    public equipposition: number;

    /**
     * Creates a new C2SUnLoadEquipItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SUnLoadEquipItem instance
     */
    public static create(properties?: IC2SUnLoadEquipItem): C2SUnLoadEquipItem;

    /**
     * Encodes the specified C2SUnLoadEquipItem message. Does not implicitly {@link C2SUnLoadEquipItem.verify|verify} messages.
     * @param message C2SUnLoadEquipItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SUnLoadEquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SUnLoadEquipItem message, length delimited. Does not implicitly {@link C2SUnLoadEquipItem.verify|verify} messages.
     * @param message C2SUnLoadEquipItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SUnLoadEquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SUnLoadEquipItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SUnLoadEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SUnLoadEquipItem;

    /**
     * Decodes a C2SUnLoadEquipItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SUnLoadEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SUnLoadEquipItem;

    /**
     * Verifies a C2SUnLoadEquipItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SUnLoadEquipItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SUnLoadEquipItem
     */
    public static fromObject(object: { [k: string]: any }): C2SUnLoadEquipItem;

    /**
     * Creates a plain object from a C2SUnLoadEquipItem message. Also converts values to other types if specified.
     * @param message C2SUnLoadEquipItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SUnLoadEquipItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SUnLoadEquipItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SUnLoadEquipItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CUnLoadEquipItem. */
export interface IS2CUnLoadEquipItem {
}

/** Represents a S2CUnLoadEquipItem. */
export class S2CUnLoadEquipItem implements IS2CUnLoadEquipItem {

    /**
     * Constructs a new S2CUnLoadEquipItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CUnLoadEquipItem);

    /**
     * Creates a new S2CUnLoadEquipItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CUnLoadEquipItem instance
     */
    public static create(properties?: IS2CUnLoadEquipItem): S2CUnLoadEquipItem;

    /**
     * Encodes the specified S2CUnLoadEquipItem message. Does not implicitly {@link S2CUnLoadEquipItem.verify|verify} messages.
     * @param message S2CUnLoadEquipItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CUnLoadEquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CUnLoadEquipItem message, length delimited. Does not implicitly {@link S2CUnLoadEquipItem.verify|verify} messages.
     * @param message S2CUnLoadEquipItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CUnLoadEquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CUnLoadEquipItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CUnLoadEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CUnLoadEquipItem;

    /**
     * Decodes a S2CUnLoadEquipItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CUnLoadEquipItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CUnLoadEquipItem;

    /**
     * Verifies a S2CUnLoadEquipItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CUnLoadEquipItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CUnLoadEquipItem
     */
    public static fromObject(object: { [k: string]: any }): S2CUnLoadEquipItem;

    /**
     * Creates a plain object from a S2CUnLoadEquipItem message. Also converts values to other types if specified.
     * @param message S2CUnLoadEquipItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CUnLoadEquipItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CUnLoadEquipItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CUnLoadEquipItem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SSendChat. */
export interface IC2SSendChat {

    /** C2SSendChat msg */
    msg?: (string|null);
}

/** Represents a C2SSendChat. */
export class C2SSendChat implements IC2SSendChat {

    /**
     * Constructs a new C2SSendChat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SSendChat);

    /** C2SSendChat msg. */
    public msg: string;

    /**
     * Creates a new C2SSendChat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SSendChat instance
     */
    public static create(properties?: IC2SSendChat): C2SSendChat;

    /**
     * Encodes the specified C2SSendChat message. Does not implicitly {@link C2SSendChat.verify|verify} messages.
     * @param message C2SSendChat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SSendChat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SSendChat message, length delimited. Does not implicitly {@link C2SSendChat.verify|verify} messages.
     * @param message C2SSendChat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SSendChat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SSendChat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SSendChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SSendChat;

    /**
     * Decodes a C2SSendChat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SSendChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SSendChat;

    /**
     * Verifies a C2SSendChat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SSendChat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SSendChat
     */
    public static fromObject(object: { [k: string]: any }): C2SSendChat;

    /**
     * Creates a plain object from a C2SSendChat message. Also converts values to other types if specified.
     * @param message C2SSendChat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SSendChat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SSendChat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SSendChat
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CNoticeChat. */
export interface IS2CNoticeChat {

    /** S2CNoticeChat nickname */
    nickname?: (string|null);

    /** S2CNoticeChat msg */
    msg?: (string|null);
}

/** Represents a S2CNoticeChat. */
export class S2CNoticeChat implements IS2CNoticeChat {

    /**
     * Constructs a new S2CNoticeChat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CNoticeChat);

    /** S2CNoticeChat nickname. */
    public nickname: string;

    /** S2CNoticeChat msg. */
    public msg: string;

    /**
     * Creates a new S2CNoticeChat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CNoticeChat instance
     */
    public static create(properties?: IS2CNoticeChat): S2CNoticeChat;

    /**
     * Encodes the specified S2CNoticeChat message. Does not implicitly {@link S2CNoticeChat.verify|verify} messages.
     * @param message S2CNoticeChat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CNoticeChat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CNoticeChat message, length delimited. Does not implicitly {@link S2CNoticeChat.verify|verify} messages.
     * @param message S2CNoticeChat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CNoticeChat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CNoticeChat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CNoticeChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CNoticeChat;

    /**
     * Decodes a S2CNoticeChat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CNoticeChat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CNoticeChat;

    /**
     * Verifies a S2CNoticeChat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CNoticeChat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CNoticeChat
     */
    public static fromObject(object: { [k: string]: any }): S2CNoticeChat;

    /**
     * Creates a plain object from a S2CNoticeChat message. Also converts values to other types if specified.
     * @param message S2CNoticeChat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CNoticeChat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CNoticeChat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CNoticeChat
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SStartProduction. */
export interface IC2SStartProduction {

    /** C2SStartProduction configid */
    configid?: (number|null);
}

/** Represents a C2SStartProduction. */
export class C2SStartProduction implements IC2SStartProduction {

    /**
     * Constructs a new C2SStartProduction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SStartProduction);

    /** C2SStartProduction configid. */
    public configid: number;

    /**
     * Creates a new C2SStartProduction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SStartProduction instance
     */
    public static create(properties?: IC2SStartProduction): C2SStartProduction;

    /**
     * Encodes the specified C2SStartProduction message. Does not implicitly {@link C2SStartProduction.verify|verify} messages.
     * @param message C2SStartProduction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SStartProduction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SStartProduction message, length delimited. Does not implicitly {@link C2SStartProduction.verify|verify} messages.
     * @param message C2SStartProduction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SStartProduction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SStartProduction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SStartProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SStartProduction;

    /**
     * Decodes a C2SStartProduction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SStartProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SStartProduction;

    /**
     * Verifies a C2SStartProduction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SStartProduction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SStartProduction
     */
    public static fromObject(object: { [k: string]: any }): C2SStartProduction;

    /**
     * Creates a plain object from a C2SStartProduction message. Also converts values to other types if specified.
     * @param message C2SStartProduction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SStartProduction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SStartProduction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SStartProduction
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CStartProduction. */
export interface IS2CStartProduction {

    /** S2CStartProduction productiondata */
    productiondata?: (IProductionData|null);
}

/** Represents a S2CStartProduction. */
export class S2CStartProduction implements IS2CStartProduction {

    /**
     * Constructs a new S2CStartProduction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CStartProduction);

    /** S2CStartProduction productiondata. */
    public productiondata?: (IProductionData|null);

    /**
     * Creates a new S2CStartProduction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CStartProduction instance
     */
    public static create(properties?: IS2CStartProduction): S2CStartProduction;

    /**
     * Encodes the specified S2CStartProduction message. Does not implicitly {@link S2CStartProduction.verify|verify} messages.
     * @param message S2CStartProduction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CStartProduction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CStartProduction message, length delimited. Does not implicitly {@link S2CStartProduction.verify|verify} messages.
     * @param message S2CStartProduction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CStartProduction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CStartProduction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CStartProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CStartProduction;

    /**
     * Decodes a S2CStartProduction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CStartProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CStartProduction;

    /**
     * Verifies a S2CStartProduction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CStartProduction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CStartProduction
     */
    public static fromObject(object: { [k: string]: any }): S2CStartProduction;

    /**
     * Creates a plain object from a S2CStartProduction message. Also converts values to other types if specified.
     * @param message S2CStartProduction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CStartProduction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CStartProduction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CStartProduction
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SReceiveProduction. */
export interface IC2SReceiveProduction {

    /** C2SReceiveProduction configid */
    configid?: (number|null);
}

/** Represents a C2SReceiveProduction. */
export class C2SReceiveProduction implements IC2SReceiveProduction {

    /**
     * Constructs a new C2SReceiveProduction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SReceiveProduction);

    /** C2SReceiveProduction configid. */
    public configid: number;

    /**
     * Creates a new C2SReceiveProduction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SReceiveProduction instance
     */
    public static create(properties?: IC2SReceiveProduction): C2SReceiveProduction;

    /**
     * Encodes the specified C2SReceiveProduction message. Does not implicitly {@link C2SReceiveProduction.verify|verify} messages.
     * @param message C2SReceiveProduction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SReceiveProduction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SReceiveProduction message, length delimited. Does not implicitly {@link C2SReceiveProduction.verify|verify} messages.
     * @param message C2SReceiveProduction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SReceiveProduction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SReceiveProduction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SReceiveProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SReceiveProduction;

    /**
     * Decodes a C2SReceiveProduction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SReceiveProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SReceiveProduction;

    /**
     * Verifies a C2SReceiveProduction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SReceiveProduction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SReceiveProduction
     */
    public static fromObject(object: { [k: string]: any }): C2SReceiveProduction;

    /**
     * Creates a plain object from a C2SReceiveProduction message. Also converts values to other types if specified.
     * @param message C2SReceiveProduction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SReceiveProduction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SReceiveProduction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SReceiveProduction
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CReceiveProduction. */
export interface IS2CReceiveProduction {

    /** S2CReceiveProduction productiondata */
    productiondata?: (IProductionData|null);
}

/** Represents a S2CReceiveProduction. */
export class S2CReceiveProduction implements IS2CReceiveProduction {

    /**
     * Constructs a new S2CReceiveProduction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CReceiveProduction);

    /** S2CReceiveProduction productiondata. */
    public productiondata?: (IProductionData|null);

    /**
     * Creates a new S2CReceiveProduction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CReceiveProduction instance
     */
    public static create(properties?: IS2CReceiveProduction): S2CReceiveProduction;

    /**
     * Encodes the specified S2CReceiveProduction message. Does not implicitly {@link S2CReceiveProduction.verify|verify} messages.
     * @param message S2CReceiveProduction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CReceiveProduction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CReceiveProduction message, length delimited. Does not implicitly {@link S2CReceiveProduction.verify|verify} messages.
     * @param message S2CReceiveProduction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CReceiveProduction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CReceiveProduction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CReceiveProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CReceiveProduction;

    /**
     * Decodes a S2CReceiveProduction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CReceiveProduction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CReceiveProduction;

    /**
     * Verifies a S2CReceiveProduction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CReceiveProduction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CReceiveProduction
     */
    public static fromObject(object: { [k: string]: any }): S2CReceiveProduction;

    /**
     * Creates a plain object from a S2CReceiveProduction message. Also converts values to other types if specified.
     * @param message S2CReceiveProduction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CReceiveProduction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CReceiveProduction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CReceiveProduction
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SReceiveTaskReward. */
export interface IC2SReceiveTaskReward {

    /** C2SReceiveTaskReward configid */
    configid?: (number|null);
}

/** Represents a C2SReceiveTaskReward. */
export class C2SReceiveTaskReward implements IC2SReceiveTaskReward {

    /**
     * Constructs a new C2SReceiveTaskReward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SReceiveTaskReward);

    /** C2SReceiveTaskReward configid. */
    public configid: number;

    /**
     * Creates a new C2SReceiveTaskReward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SReceiveTaskReward instance
     */
    public static create(properties?: IC2SReceiveTaskReward): C2SReceiveTaskReward;

    /**
     * Encodes the specified C2SReceiveTaskReward message. Does not implicitly {@link C2SReceiveTaskReward.verify|verify} messages.
     * @param message C2SReceiveTaskReward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SReceiveTaskReward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SReceiveTaskReward message, length delimited. Does not implicitly {@link C2SReceiveTaskReward.verify|verify} messages.
     * @param message C2SReceiveTaskReward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SReceiveTaskReward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SReceiveTaskReward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SReceiveTaskReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SReceiveTaskReward;

    /**
     * Decodes a C2SReceiveTaskReward message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SReceiveTaskReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SReceiveTaskReward;

    /**
     * Verifies a C2SReceiveTaskReward message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SReceiveTaskReward message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SReceiveTaskReward
     */
    public static fromObject(object: { [k: string]: any }): C2SReceiveTaskReward;

    /**
     * Creates a plain object from a C2SReceiveTaskReward message. Also converts values to other types if specified.
     * @param message C2SReceiveTaskReward
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SReceiveTaskReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SReceiveTaskReward to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SReceiveTaskReward
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CReceiveTaskReward. */
export interface IS2CReceiveTaskReward {

    /** S2CReceiveTaskReward productiondata */
    productiondata?: (IProductionData|null);
}

/** Represents a S2CReceiveTaskReward. */
export class S2CReceiveTaskReward implements IS2CReceiveTaskReward {

    /**
     * Constructs a new S2CReceiveTaskReward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CReceiveTaskReward);

    /** S2CReceiveTaskReward productiondata. */
    public productiondata?: (IProductionData|null);

    /**
     * Creates a new S2CReceiveTaskReward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CReceiveTaskReward instance
     */
    public static create(properties?: IS2CReceiveTaskReward): S2CReceiveTaskReward;

    /**
     * Encodes the specified S2CReceiveTaskReward message. Does not implicitly {@link S2CReceiveTaskReward.verify|verify} messages.
     * @param message S2CReceiveTaskReward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CReceiveTaskReward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CReceiveTaskReward message, length delimited. Does not implicitly {@link S2CReceiveTaskReward.verify|verify} messages.
     * @param message S2CReceiveTaskReward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CReceiveTaskReward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CReceiveTaskReward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CReceiveTaskReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CReceiveTaskReward;

    /**
     * Decodes a S2CReceiveTaskReward message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CReceiveTaskReward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CReceiveTaskReward;

    /**
     * Verifies a S2CReceiveTaskReward message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CReceiveTaskReward message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CReceiveTaskReward
     */
    public static fromObject(object: { [k: string]: any }): S2CReceiveTaskReward;

    /**
     * Creates a plain object from a S2CReceiveTaskReward message. Also converts values to other types if specified.
     * @param message S2CReceiveTaskReward
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CReceiveTaskReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CReceiveTaskReward to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CReceiveTaskReward
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CUpdateTaskInfo. */
export interface IS2CUpdateTaskInfo {

    /** S2CUpdateTaskInfo taskdata */
    taskdata?: (ITaskData|null);
}

/** Represents a S2CUpdateTaskInfo. */
export class S2CUpdateTaskInfo implements IS2CUpdateTaskInfo {

    /**
     * Constructs a new S2CUpdateTaskInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CUpdateTaskInfo);

    /** S2CUpdateTaskInfo taskdata. */
    public taskdata?: (ITaskData|null);

    /**
     * Creates a new S2CUpdateTaskInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CUpdateTaskInfo instance
     */
    public static create(properties?: IS2CUpdateTaskInfo): S2CUpdateTaskInfo;

    /**
     * Encodes the specified S2CUpdateTaskInfo message. Does not implicitly {@link S2CUpdateTaskInfo.verify|verify} messages.
     * @param message S2CUpdateTaskInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CUpdateTaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CUpdateTaskInfo message, length delimited. Does not implicitly {@link S2CUpdateTaskInfo.verify|verify} messages.
     * @param message S2CUpdateTaskInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CUpdateTaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CUpdateTaskInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CUpdateTaskInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CUpdateTaskInfo;

    /**
     * Decodes a S2CUpdateTaskInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CUpdateTaskInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CUpdateTaskInfo;

    /**
     * Verifies a S2CUpdateTaskInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CUpdateTaskInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CUpdateTaskInfo
     */
    public static fromObject(object: { [k: string]: any }): S2CUpdateTaskInfo;

    /**
     * Creates a plain object from a S2CUpdateTaskInfo message. Also converts values to other types if specified.
     * @param message S2CUpdateTaskInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CUpdateTaskInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CUpdateTaskInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CUpdateTaskInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SGetRanks. */
export interface IC2SGetRanks {
}

/** Represents a C2SGetRanks. */
export class C2SGetRanks implements IC2SGetRanks {

    /**
     * Constructs a new C2SGetRanks.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SGetRanks);

    /**
     * Creates a new C2SGetRanks instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SGetRanks instance
     */
    public static create(properties?: IC2SGetRanks): C2SGetRanks;

    /**
     * Encodes the specified C2SGetRanks message. Does not implicitly {@link C2SGetRanks.verify|verify} messages.
     * @param message C2SGetRanks message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SGetRanks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SGetRanks message, length delimited. Does not implicitly {@link C2SGetRanks.verify|verify} messages.
     * @param message C2SGetRanks message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SGetRanks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SGetRanks message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SGetRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SGetRanks;

    /**
     * Decodes a C2SGetRanks message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SGetRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SGetRanks;

    /**
     * Verifies a C2SGetRanks message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SGetRanks message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SGetRanks
     */
    public static fromObject(object: { [k: string]: any }): C2SGetRanks;

    /**
     * Creates a plain object from a C2SGetRanks message. Also converts values to other types if specified.
     * @param message C2SGetRanks
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SGetRanks, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SGetRanks to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SGetRanks
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CGetRanks. */
export interface IS2CGetRanks {

    /** S2CGetRanks rankdatas */
    rankdatas?: (IRankData[]|null);
}

/** Represents a S2CGetRanks. */
export class S2CGetRanks implements IS2CGetRanks {

    /**
     * Constructs a new S2CGetRanks.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CGetRanks);

    /** S2CGetRanks rankdatas. */
    public rankdatas: IRankData[];

    /**
     * Creates a new S2CGetRanks instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CGetRanks instance
     */
    public static create(properties?: IS2CGetRanks): S2CGetRanks;

    /**
     * Encodes the specified S2CGetRanks message. Does not implicitly {@link S2CGetRanks.verify|verify} messages.
     * @param message S2CGetRanks message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CGetRanks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CGetRanks message, length delimited. Does not implicitly {@link S2CGetRanks.verify|verify} messages.
     * @param message S2CGetRanks message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CGetRanks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CGetRanks message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CGetRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CGetRanks;

    /**
     * Decodes a S2CGetRanks message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CGetRanks
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CGetRanks;

    /**
     * Verifies a S2CGetRanks message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CGetRanks message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CGetRanks
     */
    public static fromObject(object: { [k: string]: any }): S2CGetRanks;

    /**
     * Creates a plain object from a S2CGetRanks message. Also converts values to other types if specified.
     * @param message S2CGetRanks
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CGetRanks, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CGetRanks to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CGetRanks
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
