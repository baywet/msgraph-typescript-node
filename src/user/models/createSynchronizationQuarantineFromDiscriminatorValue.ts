import {SynchronizationQuarantine} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationQuarantineFromDiscriminatorValue(parseNode: ParseNode | undefined) : SynchronizationQuarantine {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SynchronizationQuarantine();
}
