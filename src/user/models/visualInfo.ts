import {createImageInfoFromDiscriminatorValue} from './createImageInfoFromDiscriminatorValue';
import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {ImageInfo, Json} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VisualInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The attribution property */
    private _attribution?: ImageInfo | undefined;
    /** Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color */
    private _backgroundColor?: string | undefined;
    /** The content property */
    private _content?: Json | undefined;
    /** Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata) */
    private _description?: string | undefined;
    /** Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation) */
    private _displayText?: string | undefined;
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
     * Gets the attribution property value. The attribution property
     * @returns a imageInfo
     */
    public get attribution() {
        return this._attribution;
    };
    /**
     * Sets the attribution property value. The attribution property
     * @param value Value to set for the attribution property.
     */
    public set attribution(value: ImageInfo | undefined) {
        this._attribution = value;
    };
    /**
     * Gets the backgroundColor property value. Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color
     * @returns a string
     */
    public get backgroundColor() {
        return this._backgroundColor;
    };
    /**
     * Sets the backgroundColor property value. Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color
     * @param value Value to set for the backgroundColor property.
     */
    public set backgroundColor(value: string | undefined) {
        this._backgroundColor = value;
    };
    /**
     * Instantiates a new visualInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the content property value. The content property
     * @returns a Json
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content property
     * @param value Value to set for the content property.
     */
    public set content(value: Json | undefined) {
        this._content = value;
    };
    /**
     * Gets the description property value. Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata)
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata)
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayText property value. Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation)
     * @returns a string
     */
    public get displayText() {
        return this._displayText;
    };
    /**
     * Sets the displayText property value. Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation)
     * @param value Value to set for the displayText property.
     */
    public set displayText(value: string | undefined) {
        this._displayText = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attribution": n => { this.attribution = n.getObjectValue<ImageInfo>(createImageInfoFromDiscriminatorValue); },
            "backgroundColor": n => { this.backgroundColor = n.getStringValue(); },
            "content": n => { this.content = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayText": n => { this.displayText = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ImageInfo>("attribution", this.attribution);
        writer.writeStringValue("backgroundColor", this.backgroundColor);
        writer.writeObjectValue<Json>("content", this.content);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayText", this.displayText);
        writer.writeAdditionalData(this.additionalData);
    };
}
