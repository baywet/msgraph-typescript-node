import {VerticalSection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVerticalSectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : VerticalSection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VerticalSection();
}
