import {PresenceStatusMessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPresenceStatusMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) : PresenceStatusMessage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PresenceStatusMessage();
}
