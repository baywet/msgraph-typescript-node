import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {DateTimeTimeZone, ItemBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PresenceStatusMessage implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The expiryDateTime property */
    private _expiryDateTime?: DateTimeTimeZone | undefined;
    /** The message property */
    private _message?: ItemBody | undefined;
    /** The publishedDateTime property */
    private _publishedDateTime?: Date | undefined;
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
     * Instantiates a new presenceStatusMessage and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the expiryDateTime property value. The expiryDateTime property
     * @returns a dateTimeTimeZone
     */
    public get expiryDateTime() {
        return this._expiryDateTime;
    };
    /**
     * Sets the expiryDateTime property value. The expiryDateTime property
     * @param value Value to set for the expiryDateTime property.
     */
    public set expiryDateTime(value: DateTimeTimeZone | undefined) {
        this._expiryDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expiryDateTime": n => { this.expiryDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "message": n => { this.message = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "publishedDateTime": n => { this.publishedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the message property value. The message property
     * @returns a itemBody
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message property
     * @param value Value to set for the message property.
     */
    public set message(value: ItemBody | undefined) {
        this._message = value;
    };
    /**
     * Gets the publishedDateTime property value. The publishedDateTime property
     * @returns a Date
     */
    public get publishedDateTime() {
        return this._publishedDateTime;
    };
    /**
     * Sets the publishedDateTime property value. The publishedDateTime property
     * @param value Value to set for the publishedDateTime property.
     */
    public set publishedDateTime(value: Date | undefined) {
        this._publishedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DateTimeTimeZone>("expiryDateTime", this.expiryDateTime);
        writer.writeObjectValue<ItemBody>("message", this.message);
        writer.writeDateValue("publishedDateTime", this.publishedDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
}
