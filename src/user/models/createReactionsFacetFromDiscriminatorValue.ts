import {ReactionsFacet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReactionsFacetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReactionsFacet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReactionsFacet();
}
