import {CanvasLayout} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCanvasLayoutFromDiscriminatorValue(parseNode: ParseNode | undefined) : CanvasLayout {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CanvasLayout();
}
