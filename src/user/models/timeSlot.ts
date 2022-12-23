import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeSlot implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The end property */
    private _end?: DateTimeTimeZone | undefined;
    /** The start property */
    private _start?: DateTimeTimeZone | undefined;
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
     * Instantiates a new timeSlot and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the end property value. The end property
     * @returns a dateTimeTimeZone
     */
    public get end() {
        return this._end;
    };
    /**
     * Sets the end property value. The end property
     * @param value Value to set for the end property.
     */
    public set end(value: DateTimeTimeZone | undefined) {
        this._end = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "end": n => { this.end = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "start": n => { this.start = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<DateTimeTimeZone>("end", this.end);
        writer.writeObjectValue<DateTimeTimeZone>("start", this.start);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the start property value. The start property
     * @returns a dateTimeTimeZone
     */
    public get start() {
        return this._start;
    };
    /**
     * Sets the start property value. The start property
     * @param value Value to set for the start property.
     */
    public set start(value: DateTimeTimeZone | undefined) {
        this._start = value;
    };
}
