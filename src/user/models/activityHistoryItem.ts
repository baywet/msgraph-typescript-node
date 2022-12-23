import {createUserActivityFromDiscriminatorValue} from './createUserActivityFromDiscriminatorValue';
import {Entity, UserActivity} from './index';
import {Status} from './status';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ActivityHistoryItem extends Entity implements Parsable {
    /** The activeDurationSeconds property */
    private _activeDurationSeconds?: number | undefined;
    /** The activity property */
    private _activity?: UserActivity | undefined;
    /** The createdDateTime property */
    private _createdDateTime?: Date | undefined;
    /** The expirationDateTime property */
    private _expirationDateTime?: Date | undefined;
    /** The lastActiveDateTime property */
    private _lastActiveDateTime?: Date | undefined;
    /** The lastModifiedDateTime property */
    private _lastModifiedDateTime?: Date | undefined;
    /** The startedDateTime property */
    private _startedDateTime?: Date | undefined;
    /** The status property */
    private _status?: Status | undefined;
    /** The userTimezone property */
    private _userTimezone?: string | undefined;
    /**
     * Gets the activeDurationSeconds property value. The activeDurationSeconds property
     * @returns a integer
     */
    public get activeDurationSeconds() {
        return this._activeDurationSeconds;
    };
    /**
     * Sets the activeDurationSeconds property value. The activeDurationSeconds property
     * @param value Value to set for the activeDurationSeconds property.
     */
    public set activeDurationSeconds(value: number | undefined) {
        this._activeDurationSeconds = value;
    };
    /**
     * Gets the activity property value. The activity property
     * @returns a userActivity
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. The activity property
     * @param value Value to set for the activity property.
     */
    public set activity(value: UserActivity | undefined) {
        this._activity = value;
    };
    /**
     * Instantiates a new activityHistoryItem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The createdDateTime property
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The createdDateTime property
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the expirationDateTime property value. The expirationDateTime property
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The expirationDateTime property
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activeDurationSeconds": n => { this.activeDurationSeconds = n.getNumberValue(); },
            "activity": n => { this.activity = n.getObjectValue<UserActivity>(createUserActivityFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "lastActiveDateTime": n => { this.lastActiveDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "startedDateTime": n => { this.startedDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<Status>(Status); },
            "userTimezone": n => { this.userTimezone = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastActiveDateTime property value. The lastActiveDateTime property
     * @returns a Date
     */
    public get lastActiveDateTime() {
        return this._lastActiveDateTime;
    };
    /**
     * Sets the lastActiveDateTime property value. The lastActiveDateTime property
     * @param value Value to set for the lastActiveDateTime property.
     */
    public set lastActiveDateTime(value: Date | undefined) {
        this._lastActiveDateTime = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The lastModifiedDateTime property
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The lastModifiedDateTime property
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("activeDurationSeconds", this.activeDurationSeconds);
        writer.writeObjectValue<UserActivity>("activity", this.activity);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeDateValue("lastActiveDateTime", this.lastActiveDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeDateValue("startedDateTime", this.startedDateTime);
        writer.writeEnumValue<Status>("status", this.status);
        writer.writeStringValue("userTimezone", this.userTimezone);
    };
    /**
     * Gets the startedDateTime property value. The startedDateTime property
     * @returns a Date
     */
    public get startedDateTime() {
        return this._startedDateTime;
    };
    /**
     * Sets the startedDateTime property value. The startedDateTime property
     * @param value Value to set for the startedDateTime property.
     */
    public set startedDateTime(value: Date | undefined) {
        this._startedDateTime = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a status
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: Status | undefined) {
        this._status = value;
    };
    /**
     * Gets the userTimezone property value. The userTimezone property
     * @returns a string
     */
    public get userTimezone() {
        return this._userTimezone;
    };
    /**
     * Sets the userTimezone property value. The userTimezone property
     * @param value Value to set for the userTimezone property.
     */
    public set userTimezone(value: string | undefined) {
        this._userTimezone = value;
    };
}
