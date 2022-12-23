import {TitleArea} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTitleAreaFromDiscriminatorValue(parseNode: ParseNode | undefined) : TitleArea {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TitleArea();
}
