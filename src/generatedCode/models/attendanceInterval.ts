import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttendanceInterval extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Duration of the meeting interval in seconds; that is, the difference between joinDateTime and leaveDateTime. */
    durationInSeconds?: number;
    /** The time the attendee joined in UTC. */
    joinDateTime?: Date;
    /** The time the attendee left in UTC. */
    leaveDateTime?: Date;
}
