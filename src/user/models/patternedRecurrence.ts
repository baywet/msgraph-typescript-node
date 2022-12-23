import {createRecurrencePatternFromDiscriminatorValue} from './createRecurrencePatternFromDiscriminatorValue';
import {createRecurrenceRangeFromDiscriminatorValue} from './createRecurrenceRangeFromDiscriminatorValue';
import {RecurrencePattern, RecurrenceRange} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PatternedRecurrence implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The pattern property */
    private _pattern?: RecurrencePattern | undefined;
    /** The range property */
    private _range?: RecurrenceRange | undefined;
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
     * Instantiates a new patternedRecurrence and sets the default values.
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
            "pattern": n => { this.pattern = n.getObjectValue<RecurrencePattern>(createRecurrencePatternFromDiscriminatorValue); },
            "range": n => { this.range = n.getObjectValue<RecurrenceRange>(createRecurrenceRangeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the pattern property value. The pattern property
     * @returns a recurrencePattern
     */
    public get pattern() {
        return this._pattern;
    };
    /**
     * Sets the pattern property value. The pattern property
     * @param value Value to set for the pattern property.
     */
    public set pattern(value: RecurrencePattern | undefined) {
        this._pattern = value;
    };
    /**
     * Gets the range property value. The range property
     * @returns a recurrenceRange
     */
    public get range() {
        return this._range;
    };
    /**
     * Sets the range property value. The range property
     * @param value Value to set for the range property.
     */
    public set range(value: RecurrenceRange | undefined) {
        this._range = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<RecurrencePattern>("pattern", this.pattern);
        writer.writeObjectValue<RecurrenceRange>("range", this.range);
        writer.writeAdditionalData(this.additionalData);
    };
}
