import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReactionsFacet implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Count of comments. */
    private _commentCount?: number | undefined;
    /** Count of likes. */
    private _likeCount?: number | undefined;
    /** Count of shares. */
    private _shareCount?: number | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the commentCount property value. Count of comments.
     * @returns a integer
     */
    public get commentCount() {
        return this._commentCount;
    };
    /**
     * Sets the commentCount property value. Count of comments.
     * @param value Value to set for the commentCount property.
     */
    public set commentCount(value: number | undefined) {
        this._commentCount = value;
    };
    /**
     * Instantiates a new reactionsFacet and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "commentCount": n => { this.commentCount = n.getNumberValue(); },
            "likeCount": n => { this.likeCount = n.getNumberValue(); },
            "shareCount": n => { this.shareCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the likeCount property value. Count of likes.
     * @returns a integer
     */
    public get likeCount() {
        return this._likeCount;
    };
    /**
     * Sets the likeCount property value. Count of likes.
     * @param value Value to set for the likeCount property.
     */
    public set likeCount(value: number | undefined) {
        this._likeCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("commentCount", this.commentCount);
        writer.writeNumberValue("likeCount", this.likeCount);
        writer.writeNumberValue("shareCount", this.shareCount);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the shareCount property value. Count of shares.
     * @returns a integer
     */
    public get shareCount() {
        return this._shareCount;
    };
    /**
     * Sets the shareCount property value. Count of shares.
     * @param value Value to set for the shareCount property.
     */
    public set shareCount(value: number | undefined) {
        this._shareCount = value;
    };
}
