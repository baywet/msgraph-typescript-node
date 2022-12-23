import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SiteSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The language tag for the language used on this site. */
    languageTag?: string;
    /** Indicates the time offset for the time zone of the site from Coordinated Universal Time (UTC). */
    timeZone?: string;
}
