import {createHorizontalSectionFromDiscriminatorValue} from './createHorizontalSectionFromDiscriminatorValue';
import {createVerticalSectionFromDiscriminatorValue} from './createVerticalSectionFromDiscriminatorValue';
import {Entity, HorizontalSection, VerticalSection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CanvasLayout extends Entity implements Parsable {
    /** Collection of horizontal sections on the SharePoint page. */
    private _horizontalSections?: HorizontalSection[] | undefined;
    /** The verticalSection property */
    private _verticalSection?: VerticalSection | undefined;
    /**
     * Instantiates a new canvasLayout and sets the default values.
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
            "horizontalSections": n => { this.horizontalSections = n.getCollectionOfObjectValues<HorizontalSection>(createHorizontalSectionFromDiscriminatorValue); },
            "verticalSection": n => { this.verticalSection = n.getObjectValue<VerticalSection>(createVerticalSectionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the horizontalSections property value. Collection of horizontal sections on the SharePoint page.
     * @returns a horizontalSection
     */
    public get horizontalSections() {
        return this._horizontalSections;
    };
    /**
     * Sets the horizontalSections property value. Collection of horizontal sections on the SharePoint page.
     * @param value Value to set for the horizontalSections property.
     */
    public set horizontalSections(value: HorizontalSection[] | undefined) {
        this._horizontalSections = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<HorizontalSection>("horizontalSections", this.horizontalSections);
        writer.writeObjectValue<VerticalSection>("verticalSection", this.verticalSection);
    };
    /**
     * Gets the verticalSection property value. The verticalSection property
     * @returns a verticalSection
     */
    public get verticalSection() {
        return this._verticalSection;
    };
    /**
     * Sets the verticalSection property value. The verticalSection property
     * @param value Value to set for the verticalSection property.
     */
    public set verticalSection(value: VerticalSection | undefined) {
        this._verticalSection = value;
    };
}
