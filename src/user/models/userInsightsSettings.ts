import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserInsightsSettings extends Entity implements Parsable {
    /** true if user's itemInsights and meeting hours insights are enabled; false if user's itemInsights and meeting hours insights are disabled. Default is true. Optional. */
    private _isEnabled?: boolean | undefined;
    /**
     * Instantiates a new userInsightsSettings and sets the default values.
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
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isEnabled property value. true if user's itemInsights and meeting hours insights are enabled; false if user's itemInsights and meeting hours insights are disabled. Default is true. Optional.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. true if user's itemInsights and meeting hours insights are enabled; false if user's itemInsights and meeting hours insights are disabled. Default is true. Optional.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
    };
}
