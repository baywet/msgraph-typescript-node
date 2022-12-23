import {MediaSourceContentCategory} from './mediaSourceContentCategory';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaSource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The contentCategory property */
    private _contentCategory?: MediaSourceContentCategory | undefined;
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
     * Instantiates a new mediaSource and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the contentCategory property value. The contentCategory property
     * @returns a mediaSourceContentCategory
     */
    public get contentCategory() {
        return this._contentCategory;
    };
    /**
     * Sets the contentCategory property value. The contentCategory property
     * @param value Value to set for the contentCategory property.
     */
    public set contentCategory(value: MediaSourceContentCategory | undefined) {
        this._contentCategory = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentCategory": n => { this.contentCategory = n.getEnumValue<MediaSourceContentCategory>(MediaSourceContentCategory); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<MediaSourceContentCategory>("contentCategory", this.contentCategory);
        writer.writeAdditionalData(this.additionalData);
    };
}
