import {createWorkbookChartFontFromDiscriminatorValue} from './createWorkbookChartFontFromDiscriminatorValue';
import {Entity, WorkbookChartFont} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookChartAxisTitleFormat extends Entity implements Parsable {
    /** The font property */
    private _font?: WorkbookChartFont | undefined;
    /**
     * Instantiates a new workbookChartAxisTitleFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the font property value. The font property
     * @returns a workbookChartFont
     */
    public get font() {
        return this._font;
    };
    /**
     * Sets the font property value. The font property
     * @param value Value to set for the font property.
     */
    public set font(value: WorkbookChartFont | undefined) {
        this._font = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "font": n => { this.font = n.getObjectValue<WorkbookChartFont>(createWorkbookChartFontFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<WorkbookChartFont>("font", this.font);
    };
}
