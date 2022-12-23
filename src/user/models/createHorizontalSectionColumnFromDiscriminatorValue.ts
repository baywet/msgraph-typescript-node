import {HorizontalSectionColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHorizontalSectionColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) : HorizontalSectionColumn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HorizontalSectionColumn();
}
