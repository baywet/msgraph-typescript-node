import {ConfigurationPolls} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConfigurationPollsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConfigurationPolls {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConfigurationPolls();
}
