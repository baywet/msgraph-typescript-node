import {MetaDataKeyStringPair} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMetaDataKeyStringPairFromDiscriminatorValue(parseNode: ParseNode | undefined) : MetaDataKeyStringPair {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MetaDataKeyStringPair();
}
