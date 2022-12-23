import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookItem extends Entity, Partial<Parsable> {
    /** The categories property */
    categories?: string[];
    /** The changeKey property */
    changeKey?: string;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    createdDateTime?: Date;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    lastModifiedDateTime?: Date;
}
