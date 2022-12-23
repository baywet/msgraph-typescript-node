import {createWebPartFromDiscriminatorValue} from './createWebPartFromDiscriminatorValue';
import {Entity, WebPart} from './index';
import {SectionEmphasisType} from './sectionEmphasisType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VerticalSection extends Entity implements Parsable {
    /** The emphasis property */
    private _emphasis?: SectionEmphasisType | undefined;
    /** The set of web parts in this section. */
    private _webparts?: WebPart[] | undefined;
    /**
     * Instantiates a new verticalSection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the emphasis property value. The emphasis property
     * @returns a sectionEmphasisType
     */
    public get emphasis() {
        return this._emphasis;
    };
    /**
     * Sets the emphasis property value. The emphasis property
     * @param value Value to set for the emphasis property.
     */
    public set emphasis(value: SectionEmphasisType | undefined) {
        this._emphasis = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "emphasis": n => { this.emphasis = n.getEnumValue<SectionEmphasisType>(SectionEmphasisType); },
            "webparts": n => { this.webparts = n.getCollectionOfObjectValues<WebPart>(createWebPartFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<SectionEmphasisType>("emphasis", this.emphasis);
        writer.writeCollectionOfObjectValues<WebPart>("webparts", this.webparts);
    };
    /**
     * Gets the webparts property value. The set of web parts in this section.
     * @returns a webPart
     */
    public get webparts() {
        return this._webparts;
    };
    /**
     * Sets the webparts property value. The set of web parts in this section.
     * @param value Value to set for the webparts property.
     */
    public set webparts(value: WebPart[] | undefined) {
        this._webparts = value;
    };
}
