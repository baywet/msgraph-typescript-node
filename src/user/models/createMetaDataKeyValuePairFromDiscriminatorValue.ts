import {MetaDataKeyValuePair} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMetaDataKeyValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) : MetaDataKeyValuePair {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MetaDataKeyValuePair();
}
