import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttachmentSession extends Entity, Partial<Parsable> {
    /** The content streams that are uploaded. */
    content?: string;
    /** The date and time in UTC when the upload session will expire. The complete file must be uploaded before this expiration time is reached. */
    expirationDateTime?: Date;
    /** Indicates a single value {start} that represents the location in the file where the next upload should begin. */
    nextExpectedRanges?: string[];
}
