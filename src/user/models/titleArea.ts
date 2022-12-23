import {createServerProcessedContentFromDiscriminatorValue} from './createServerProcessedContentFromDiscriminatorValue';
import {ServerProcessedContent} from './index';
import {TitleAreaLayoutType} from './titleAreaLayoutType';
import {TitleAreaTextAlignmentType} from './titleAreaTextAlignmentType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TitleArea implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Alternative text on the title area. */
    private _alternativeText?: string | undefined;
    /** Indicates whether the title area has a gradient effect enabled. */
    private _enableGradientEffect?: boolean | undefined;
    /** URL of the image in the title area. */
    private _imageWebUrl?: string | undefined;
    /** The layout property */
    private _layout?: TitleAreaLayoutType | undefined;
    /** The serverProcessedContent property */
    private _serverProcessedContent?: ServerProcessedContent | undefined;
    /** Indicates whether the author should be shown in title area. */
    private _showAuthor?: boolean | undefined;
    /** Indicates whether the published date should be shown in title area. */
    private _showPublishedDate?: boolean | undefined;
    /** Indicates whether the text block above title should be shown in title area. */
    private _showTextBlockAboveTitle?: boolean | undefined;
    /** The text above title line. */
    private _textAboveTitle?: string | undefined;
    /** The textAlignment property */
    private _textAlignment?: TitleAreaTextAlignmentType | undefined;
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
     * Gets the alternativeText property value. Alternative text on the title area.
     * @returns a string
     */
    public get alternativeText() {
        return this._alternativeText;
    };
    /**
     * Sets the alternativeText property value. Alternative text on the title area.
     * @param value Value to set for the alternativeText property.
     */
    public set alternativeText(value: string | undefined) {
        this._alternativeText = value;
    };
    /**
     * Instantiates a new titleArea and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enableGradientEffect property value. Indicates whether the title area has a gradient effect enabled.
     * @returns a boolean
     */
    public get enableGradientEffect() {
        return this._enableGradientEffect;
    };
    /**
     * Sets the enableGradientEffect property value. Indicates whether the title area has a gradient effect enabled.
     * @param value Value to set for the enableGradientEffect property.
     */
    public set enableGradientEffect(value: boolean | undefined) {
        this._enableGradientEffect = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "alternativeText": n => { this.alternativeText = n.getStringValue(); },
            "enableGradientEffect": n => { this.enableGradientEffect = n.getBooleanValue(); },
            "imageWebUrl": n => { this.imageWebUrl = n.getStringValue(); },
            "layout": n => { this.layout = n.getEnumValue<TitleAreaLayoutType>(TitleAreaLayoutType); },
            "serverProcessedContent": n => { this.serverProcessedContent = n.getObjectValue<ServerProcessedContent>(createServerProcessedContentFromDiscriminatorValue); },
            "showAuthor": n => { this.showAuthor = n.getBooleanValue(); },
            "showPublishedDate": n => { this.showPublishedDate = n.getBooleanValue(); },
            "showTextBlockAboveTitle": n => { this.showTextBlockAboveTitle = n.getBooleanValue(); },
            "textAboveTitle": n => { this.textAboveTitle = n.getStringValue(); },
            "textAlignment": n => { this.textAlignment = n.getEnumValue<TitleAreaTextAlignmentType>(TitleAreaTextAlignmentType); },
        };
    };
    /**
     * Gets the imageWebUrl property value. URL of the image in the title area.
     * @returns a string
     */
    public get imageWebUrl() {
        return this._imageWebUrl;
    };
    /**
     * Sets the imageWebUrl property value. URL of the image in the title area.
     * @param value Value to set for the imageWebUrl property.
     */
    public set imageWebUrl(value: string | undefined) {
        this._imageWebUrl = value;
    };
    /**
     * Gets the layout property value. The layout property
     * @returns a titleAreaLayoutType
     */
    public get layout() {
        return this._layout;
    };
    /**
     * Sets the layout property value. The layout property
     * @param value Value to set for the layout property.
     */
    public set layout(value: TitleAreaLayoutType | undefined) {
        this._layout = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("alternativeText", this.alternativeText);
        writer.writeBooleanValue("enableGradientEffect", this.enableGradientEffect);
        writer.writeStringValue("imageWebUrl", this.imageWebUrl);
        writer.writeEnumValue<TitleAreaLayoutType>("layout", this.layout);
        writer.writeObjectValue<ServerProcessedContent>("serverProcessedContent", this.serverProcessedContent);
        writer.writeBooleanValue("showAuthor", this.showAuthor);
        writer.writeBooleanValue("showPublishedDate", this.showPublishedDate);
        writer.writeBooleanValue("showTextBlockAboveTitle", this.showTextBlockAboveTitle);
        writer.writeStringValue("textAboveTitle", this.textAboveTitle);
        writer.writeEnumValue<TitleAreaTextAlignmentType>("textAlignment", this.textAlignment);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the serverProcessedContent property value. The serverProcessedContent property
     * @returns a serverProcessedContent
     */
    public get serverProcessedContent() {
        return this._serverProcessedContent;
    };
    /**
     * Sets the serverProcessedContent property value. The serverProcessedContent property
     * @param value Value to set for the serverProcessedContent property.
     */
    public set serverProcessedContent(value: ServerProcessedContent | undefined) {
        this._serverProcessedContent = value;
    };
    /**
     * Gets the showAuthor property value. Indicates whether the author should be shown in title area.
     * @returns a boolean
     */
    public get showAuthor() {
        return this._showAuthor;
    };
    /**
     * Sets the showAuthor property value. Indicates whether the author should be shown in title area.
     * @param value Value to set for the showAuthor property.
     */
    public set showAuthor(value: boolean | undefined) {
        this._showAuthor = value;
    };
    /**
     * Gets the showPublishedDate property value. Indicates whether the published date should be shown in title area.
     * @returns a boolean
     */
    public get showPublishedDate() {
        return this._showPublishedDate;
    };
    /**
     * Sets the showPublishedDate property value. Indicates whether the published date should be shown in title area.
     * @param value Value to set for the showPublishedDate property.
     */
    public set showPublishedDate(value: boolean | undefined) {
        this._showPublishedDate = value;
    };
    /**
     * Gets the showTextBlockAboveTitle property value. Indicates whether the text block above title should be shown in title area.
     * @returns a boolean
     */
    public get showTextBlockAboveTitle() {
        return this._showTextBlockAboveTitle;
    };
    /**
     * Sets the showTextBlockAboveTitle property value. Indicates whether the text block above title should be shown in title area.
     * @param value Value to set for the showTextBlockAboveTitle property.
     */
    public set showTextBlockAboveTitle(value: boolean | undefined) {
        this._showTextBlockAboveTitle = value;
    };
    /**
     * Gets the textAboveTitle property value. The text above title line.
     * @returns a string
     */
    public get textAboveTitle() {
        return this._textAboveTitle;
    };
    /**
     * Sets the textAboveTitle property value. The text above title line.
     * @param value Value to set for the textAboveTitle property.
     */
    public set textAboveTitle(value: string | undefined) {
        this._textAboveTitle = value;
    };
    /**
     * Gets the textAlignment property value. The textAlignment property
     * @returns a titleAreaTextAlignmentType
     */
    public get textAlignment() {
        return this._textAlignment;
    };
    /**
     * Sets the textAlignment property value. The textAlignment property
     * @param value Value to set for the textAlignment property.
     */
    public set textAlignment(value: TitleAreaTextAlignmentType | undefined) {
        this._textAlignment = value;
    };
}
