import {AttendeeType} from './attendeeType';
import {Recipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttendeeBase extends Recipient implements Parsable {
    /** The type property */
    private _type?: AttendeeType | undefined;
    /**
     * Instantiates a new AttendeeBase and sets the default values.
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
            "type": n => { this.type = n.getEnumValue<AttendeeType>(AttendeeType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<AttendeeType>("type", this.type);
    };
    /**
     * Gets the type property value. The type property
     * @returns a attendeeType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: AttendeeType | undefined) {
        this._type = value;
    };
}
