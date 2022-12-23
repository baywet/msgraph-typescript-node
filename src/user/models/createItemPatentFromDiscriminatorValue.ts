import {ItemPatent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemPatentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemPatent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemPatent();
}
