import {createWebPartFromDiscriminatorValue} from './createWebPartFromDiscriminatorValue';
import {Entity, WebPart} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HorizontalSectionColumn extends Entity implements Parsable {
    /** The collection of WebParts in this column. */
    private _webparts?: WebPart[] | undefined;
    /** Width of the column. A horizontal section is divided into 12 grids. A column should have a value of 1-12 to represent its range spans. For example, there can be two columns both have a width of 6 in a section. */
    private _width?: number | undefined;
    /**
     * Instantiates a new horizontalSectionColumn and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "webparts": n => { this.webparts = n.getCollectionOfObjectValues<WebPart>(createWebPartFromDiscriminatorValue); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<WebPart>("webparts", this.webparts);
        writer.writeNumberValue("width", this.width);
    };
    /**
     * Gets the webparts property value. The collection of WebParts in this column.
     * @returns a webPart
     */
    public get webparts() {
        return this._webparts;
    };
    /**
     * Sets the webparts property value. The collection of WebParts in this column.
     * @param value Value to set for the webparts property.
     */
    public set webparts(value: WebPart[] | undefined) {
        this._webparts = value;
    };
    /**
     * Gets the width property value. Width of the column. A horizontal section is divided into 12 grids. A column should have a value of 1-12 to represent its range spans. For example, there can be two columns both have a width of 6 in a section.
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * Sets the width property value. Width of the column. A horizontal section is divided into 12 grids. A column should have a value of 1-12 to represent its range spans. For example, there can be two columns both have a width of 6 in a section.
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        this._width = value;
    };
}
