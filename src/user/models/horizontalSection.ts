import {createHorizontalSectionColumnFromDiscriminatorValue} from './createHorizontalSectionColumnFromDiscriminatorValue';
import {HorizontalSectionLayoutType} from './horizontalSectionLayoutType';
import {Entity, HorizontalSectionColumn} from './index';
import {SectionEmphasisType} from './sectionEmphasisType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HorizontalSection extends Entity implements Parsable {
    /** The set of vertical columns in this section. */
    private _columns?: HorizontalSectionColumn[] | undefined;
    /** The emphasis property */
    private _emphasis?: SectionEmphasisType | undefined;
    /** The layout property */
    private _layout?: HorizontalSectionLayoutType | undefined;
    /**
     * Gets the columns property value. The set of vertical columns in this section.
     * @returns a horizontalSectionColumn
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Sets the columns property value. The set of vertical columns in this section.
     * @param value Value to set for the columns property.
     */
    public set columns(value: HorizontalSectionColumn[] | undefined) {
        this._columns = value;
    };
    /**
     * Instantiates a new horizontalSection and sets the default values.
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
            "columns": n => { this.columns = n.getCollectionOfObjectValues<HorizontalSectionColumn>(createHorizontalSectionColumnFromDiscriminatorValue); },
            "emphasis": n => { this.emphasis = n.getEnumValue<SectionEmphasisType>(SectionEmphasisType); },
            "layout": n => { this.layout = n.getEnumValue<HorizontalSectionLayoutType>(HorizontalSectionLayoutType); },
        };
    };
    /**
     * Gets the layout property value. The layout property
     * @returns a horizontalSectionLayoutType
     */
    public get layout() {
        return this._layout;
    };
    /**
     * Sets the layout property value. The layout property
     * @param value Value to set for the layout property.
     */
    public set layout(value: HorizontalSectionLayoutType | undefined) {
        this._layout = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<HorizontalSectionColumn>("columns", this.columns);
        writer.writeEnumValue<SectionEmphasisType>("emphasis", this.emphasis);
        writer.writeEnumValue<HorizontalSectionLayoutType>("layout", this.layout);
    };
}
