import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device categories provides a way to organize your devices. Using device categories, company administrators can define their own categories that make sense to their company. These categories can then be applied to a device in the Intune Azure console or selected by a user during device enrollment. You can filter reports and create dynamic Azure Active Directory device groups based on device categories. */
export class DeviceCategory extends Entity implements Parsable {
    /** Optional description for the device category. */
    private _description?: string | undefined;
    /** Display name for the device category. */
    private _displayName?: string | undefined;
    /** Optional role scope tags for the device category. */
    private _roleScopeTagIds?: string[] | undefined;
    /**
     * Instantiates a new deviceCategory and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Optional description for the device category.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Optional description for the device category.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Display name for the device category.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name for the device category.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "roleScopeTagIds": n => { this.roleScopeTagIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the roleScopeTagIds property value. Optional role scope tags for the device category.
     * @returns a string
     */
    public get roleScopeTagIds() {
        return this._roleScopeTagIds;
    };
    /**
     * Sets the roleScopeTagIds property value. Optional role scope tags for the device category.
     * @param value Value to set for the roleScopeTagIds property.
     */
    public set roleScopeTagIds(value: string[] | undefined) {
        this._roleScopeTagIds = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfPrimitiveValues<string>("roleScopeTagIds", this.roleScopeTagIds);
    };
}
