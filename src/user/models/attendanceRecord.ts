import {createAttendanceIntervalFromDiscriminatorValue} from './createAttendanceIntervalFromDiscriminatorValue';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {AttendanceInterval, Entity, Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttendanceRecord extends Entity implements Parsable {
    /** List of time periods between joining and leaving a meeting. */
    private _attendanceIntervals?: AttendanceInterval[] | undefined;
    /** Email address of the user associated with this atttendance record. */
    private _emailAddress?: string | undefined;
    /** The identity property */
    private _identity?: Identity | undefined;
    /** Unique identifier of a meetingRegistrant. Presents when the participant has registered for the meeting. */
    private _registrantId?: string | undefined;
    /** Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer. */
    private _role?: string | undefined;
    /** Total duration of the attendances in seconds. */
    private _totalAttendanceInSeconds?: number | undefined;
    /**
     * Gets the attendanceIntervals property value. List of time periods between joining and leaving a meeting.
     * @returns a attendanceInterval
     */
    public get attendanceIntervals() {
        return this._attendanceIntervals;
    };
    /**
     * Sets the attendanceIntervals property value. List of time periods between joining and leaving a meeting.
     * @param value Value to set for the attendanceIntervals property.
     */
    public set attendanceIntervals(value: AttendanceInterval[] | undefined) {
        this._attendanceIntervals = value;
    };
    /**
     * Instantiates a new attendanceRecord and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the emailAddress property value. Email address of the user associated with this atttendance record.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. Email address of the user associated with this atttendance record.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "attendanceIntervals": n => { this.attendanceIntervals = n.getCollectionOfObjectValues<AttendanceInterval>(createAttendanceIntervalFromDiscriminatorValue); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "identity": n => { this.identity = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
            "registrantId": n => { this.registrantId = n.getStringValue(); },
            "role": n => { this.role = n.getStringValue(); },
            "totalAttendanceInSeconds": n => { this.totalAttendanceInSeconds = n.getNumberValue(); },
        };
    };
    /**
     * Gets the identity property value. The identity property
     * @returns a identity
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Sets the identity property value. The identity property
     * @param value Value to set for the identity property.
     */
    public set identity(value: Identity | undefined) {
        this._identity = value;
    };
    /**
     * Gets the registrantId property value. Unique identifier of a meetingRegistrant. Presents when the participant has registered for the meeting.
     * @returns a string
     */
    public get registrantId() {
        return this._registrantId;
    };
    /**
     * Sets the registrantId property value. Unique identifier of a meetingRegistrant. Presents when the participant has registered for the meeting.
     * @param value Value to set for the registrantId property.
     */
    public set registrantId(value: string | undefined) {
        this._registrantId = value;
    };
    /**
     * Gets the role property value. Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer.
     * @returns a string
     */
    public get role() {
        return this._role;
    };
    /**
     * Sets the role property value. Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer.
     * @param value Value to set for the role property.
     */
    public set role(value: string | undefined) {
        this._role = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AttendanceInterval>("attendanceIntervals", this.attendanceIntervals);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeObjectValue<Identity>("identity", this.identity);
        writer.writeStringValue("registrantId", this.registrantId);
        writer.writeStringValue("role", this.role);
        writer.writeNumberValue("totalAttendanceInSeconds", this.totalAttendanceInSeconds);
    };
    /**
     * Gets the totalAttendanceInSeconds property value. Total duration of the attendances in seconds.
     * @returns a integer
     */
    public get totalAttendanceInSeconds() {
        return this._totalAttendanceInSeconds;
    };
    /**
     * Sets the totalAttendanceInSeconds property value. Total duration of the attendances in seconds.
     * @param value Value to set for the totalAttendanceInSeconds property.
     */
    public set totalAttendanceInSeconds(value: number | undefined) {
        this._totalAttendanceInSeconds = value;
    };
}
