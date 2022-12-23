import {Entity, SynchronizationJob, SynchronizationSecretKeyStringValuePair, SynchronizationTemplate} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Synchronization extends Entity, Partial<Parsable> {
    /** Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory. */
    jobs?: SynchronizationJob[];
    /** Represents a collection of credentials to access provisioned cloud applications. */
    secrets?: SynchronizationSecretKeyStringValuePair[];
    /** Pre-configured synchronization settings for a particular application. */
    templates?: SynchronizationTemplate[];
}
