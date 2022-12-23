import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PasswordCredential implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Do not use. */
    private _customKeyIdentifier?: string | undefined;
    /** Friendly name for the password. Optional. */
    private _displayName?: string | undefined;
    /** The date and time at which the password expires represented using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional. */
    private _endDateTime?: Date | undefined;
    /** Contains the first three characters of the password. Read-only. */
    private _hint?: string | undefined;
    /** The unique identifier for the password. */
    private _keyId?: string | undefined;
    /** Read-only; Contains the strong passwords generated by Azure AD that are 16-64 characters in length. The generated password value is only returned during the initial POST request to addPassword. There is no way to retrieve this password in the future. */
    private _secretText?: string | undefined;
    /** The date and time at which the password becomes valid. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional. */
    private _startDateTime?: Date | undefined;
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
     * Instantiates a new passwordCredential and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the customKeyIdentifier property value. Do not use.
     * @returns a binary
     */
    public get customKeyIdentifier() {
        return this._customKeyIdentifier;
    };
    /**
     * Sets the customKeyIdentifier property value. Do not use.
     * @param value Value to set for the customKeyIdentifier property.
     */
    public set customKeyIdentifier(value: string | undefined) {
        this._customKeyIdentifier = value;
    };
    /**
     * Gets the displayName property value. Friendly name for the password. Optional.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Friendly name for the password. Optional.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the endDateTime property value. The date and time at which the password expires represented using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The date and time at which the password expires represented using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "customKeyIdentifier": n => { this.customKeyIdentifier = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "hint": n => { this.hint = n.getStringValue(); },
            "keyId": n => { this.keyId = n.getStringValue(); },
            "secretText": n => { this.secretText = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the hint property value. Contains the first three characters of the password. Read-only.
     * @returns a string
     */
    public get hint() {
        return this._hint;
    };
    /**
     * Sets the hint property value. Contains the first three characters of the password. Read-only.
     * @param value Value to set for the hint property.
     */
    public set hint(value: string | undefined) {
        this._hint = value;
    };
    /**
     * Gets the keyId property value. The unique identifier for the password.
     * @returns a string
     */
    public get keyId() {
        return this._keyId;
    };
    /**
     * Sets the keyId property value. The unique identifier for the password.
     * @param value Value to set for the keyId property.
     */
    public set keyId(value: string | undefined) {
        this._keyId = value;
    };
    /**
     * Gets the secretText property value. Read-only; Contains the strong passwords generated by Azure AD that are 16-64 characters in length. The generated password value is only returned during the initial POST request to addPassword. There is no way to retrieve this password in the future.
     * @returns a string
     */
    public get secretText() {
        return this._secretText;
    };
    /**
     * Sets the secretText property value. Read-only; Contains the strong passwords generated by Azure AD that are 16-64 characters in length. The generated password value is only returned during the initial POST request to addPassword. There is no way to retrieve this password in the future.
     * @param value Value to set for the secretText property.
     */
    public set secretText(value: string | undefined) {
        this._secretText = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("customKeyIdentifier", this.customKeyIdentifier);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("hint", this.hint);
        writer.writeStringValue("keyId", this.keyId);
        writer.writeStringValue("secretText", this.secretText);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDateTime property value. The date and time at which the password becomes valid. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The date and time at which the password becomes valid. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
}
