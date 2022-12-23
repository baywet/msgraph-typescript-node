import {AutomaticRepliesStatus} from './automaticRepliesStatus';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {ExternalAudienceScope} from './externalAudienceScope';
import {DateTimeTimeZone} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AutomaticRepliesSetting implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The externalAudience property */
    private _externalAudience?: ExternalAudienceScope | undefined;
    /** The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled. */
    private _externalReplyMessage?: string | undefined;
    /** The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled or Scheduled. */
    private _internalReplyMessage?: string | undefined;
    /** The scheduledEndDateTime property */
    private _scheduledEndDateTime?: DateTimeTimeZone | undefined;
    /** The scheduledStartDateTime property */
    private _scheduledStartDateTime?: DateTimeTimeZone | undefined;
    /** The status property */
    private _status?: AutomaticRepliesStatus | undefined;
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
     * Instantiates a new automaticRepliesSetting and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the externalAudience property value. The externalAudience property
     * @returns a externalAudienceScope
     */
    public get externalAudience() {
        return this._externalAudience;
    };
    /**
     * Sets the externalAudience property value. The externalAudience property
     * @param value Value to set for the externalAudience property.
     */
    public set externalAudience(value: ExternalAudienceScope | undefined) {
        this._externalAudience = value;
    };
    /**
     * Gets the externalReplyMessage property value. The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled.
     * @returns a string
     */
    public get externalReplyMessage() {
        return this._externalReplyMessage;
    };
    /**
     * Sets the externalReplyMessage property value. The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled.
     * @param value Value to set for the externalReplyMessage property.
     */
    public set externalReplyMessage(value: string | undefined) {
        this._externalReplyMessage = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "externalAudience": n => { this.externalAudience = n.getEnumValue<ExternalAudienceScope>(ExternalAudienceScope); },
            "externalReplyMessage": n => { this.externalReplyMessage = n.getStringValue(); },
            "internalReplyMessage": n => { this.internalReplyMessage = n.getStringValue(); },
            "scheduledEndDateTime": n => { this.scheduledEndDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "scheduledStartDateTime": n => { this.scheduledStartDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<AutomaticRepliesStatus>(AutomaticRepliesStatus); },
        };
    };
    /**
     * Gets the internalReplyMessage property value. The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled or Scheduled.
     * @returns a string
     */
    public get internalReplyMessage() {
        return this._internalReplyMessage;
    };
    /**
     * Sets the internalReplyMessage property value. The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled or Scheduled.
     * @param value Value to set for the internalReplyMessage property.
     */
    public set internalReplyMessage(value: string | undefined) {
        this._internalReplyMessage = value;
    };
    /**
     * Gets the scheduledEndDateTime property value. The scheduledEndDateTime property
     * @returns a dateTimeTimeZone
     */
    public get scheduledEndDateTime() {
        return this._scheduledEndDateTime;
    };
    /**
     * Sets the scheduledEndDateTime property value. The scheduledEndDateTime property
     * @param value Value to set for the scheduledEndDateTime property.
     */
    public set scheduledEndDateTime(value: DateTimeTimeZone | undefined) {
        this._scheduledEndDateTime = value;
    };
    /**
     * Gets the scheduledStartDateTime property value. The scheduledStartDateTime property
     * @returns a dateTimeTimeZone
     */
    public get scheduledStartDateTime() {
        return this._scheduledStartDateTime;
    };
    /**
     * Sets the scheduledStartDateTime property value. The scheduledStartDateTime property
     * @param value Value to set for the scheduledStartDateTime property.
     */
    public set scheduledStartDateTime(value: DateTimeTimeZone | undefined) {
        this._scheduledStartDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ExternalAudienceScope>("externalAudience", this.externalAudience);
        writer.writeStringValue("externalReplyMessage", this.externalReplyMessage);
        writer.writeStringValue("internalReplyMessage", this.internalReplyMessage);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledEndDateTime", this.scheduledEndDateTime);
        writer.writeObjectValue<DateTimeTimeZone>("scheduledStartDateTime", this.scheduledStartDateTime);
        writer.writeEnumValue<AutomaticRepliesStatus>("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. The status property
     * @returns a automaticRepliesStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: AutomaticRepliesStatus | undefined) {
        this._status = value;
    };
}
