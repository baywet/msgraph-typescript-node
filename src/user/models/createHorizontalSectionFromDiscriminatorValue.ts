import {HorizontalSection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHorizontalSectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : HorizontalSection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HorizontalSection();
}
