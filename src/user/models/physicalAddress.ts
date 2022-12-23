import {PhysicalAddressType} from './physicalAddressType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PhysicalAddress implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The city. */
    private _city?: string | undefined;
    /** The country or region. It's a free-format string value, for example, 'United States'. */
    private _countryOrRegion?: string | undefined;
    /** The postal code. */
    private _postalCode?: string | undefined;
    /** The post office box number. */
    private _postOfficeBox?: string | undefined;
    /** The state. */
    private _state?: string | undefined;
    /** The street. */
    private _street?: string | undefined;
    /** The type property */
    private _type?: PhysicalAddressType | undefined;
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
     * Gets the city property value. The city.
     * @returns a string
     */
    public get city() {
        return this._city;
    };
    /**
     * Sets the city property value. The city.
     * @param value Value to set for the city property.
     */
    public set city(value: string | undefined) {
        this._city = value;
    };
    /**
     * Instantiates a new physicalAddress and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the countryOrRegion property value. The country or region. It's a free-format string value, for example, 'United States'.
     * @returns a string
     */
    public get countryOrRegion() {
        return this._countryOrRegion;
    };
    /**
     * Sets the countryOrRegion property value. The country or region. It's a free-format string value, for example, 'United States'.
     * @param value Value to set for the countryOrRegion property.
     */
    public set countryOrRegion(value: string | undefined) {
        this._countryOrRegion = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "city": n => { this.city = n.getStringValue(); },
            "countryOrRegion": n => { this.countryOrRegion = n.getStringValue(); },
            "postalCode": n => { this.postalCode = n.getStringValue(); },
            "postOfficeBox": n => { this.postOfficeBox = n.getStringValue(); },
            "state": n => { this.state = n.getStringValue(); },
            "street": n => { this.street = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<PhysicalAddressType>(PhysicalAddressType); },
        };
    };
    /**
     * Gets the postalCode property value. The postal code.
     * @returns a string
     */
    public get postalCode() {
        return this._postalCode;
    };
    /**
     * Sets the postalCode property value. The postal code.
     * @param value Value to set for the postalCode property.
     */
    public set postalCode(value: string | undefined) {
        this._postalCode = value;
    };
    /**
     * Gets the postOfficeBox property value. The post office box number.
     * @returns a string
     */
    public get postOfficeBox() {
        return this._postOfficeBox;
    };
    /**
     * Sets the postOfficeBox property value. The post office box number.
     * @param value Value to set for the postOfficeBox property.
     */
    public set postOfficeBox(value: string | undefined) {
        this._postOfficeBox = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("city", this.city);
        writer.writeStringValue("countryOrRegion", this.countryOrRegion);
        writer.writeStringValue("postalCode", this.postalCode);
        writer.writeStringValue("postOfficeBox", this.postOfficeBox);
        writer.writeStringValue("state", this.state);
        writer.writeStringValue("street", this.street);
        writer.writeEnumValue<PhysicalAddressType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The state.
     * @returns a string
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state.
     * @param value Value to set for the state property.
     */
    public set state(value: string | undefined) {
        this._state = value;
    };
    /**
     * Gets the street property value. The street.
     * @returns a string
     */
    public get street() {
        return this._street;
    };
    /**
     * Sets the street property value. The street.
     * @param value Value to set for the street property.
     */
    public set street(value: string | undefined) {
        this._street = value;
    };
    /**
     * Gets the type property value. The type property
     * @returns a physicalAddressType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: PhysicalAddressType | undefined) {
        this._type = value;
    };
}
