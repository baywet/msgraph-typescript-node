import {CloudPcHealthCheckItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudPcHealthCheckItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudPcHealthCheckItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudPcHealthCheckItem();
}
