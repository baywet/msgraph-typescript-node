import {createOpenShiftItemFromDiscriminatorValue} from './createOpenShiftItemFromDiscriminatorValue';
import {ChangeTrackedEntity, OpenShiftItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OpenShift extends ChangeTrackedEntity implements Parsable {
    /** The draftOpenShift property */
    private _draftOpenShift?: OpenShiftItem | undefined;
    /** The isStagedForDeletion property */
    private _isStagedForDeletion?: boolean | undefined;
    /** ID for the scheduling group that the open shift belongs to. */
    private _schedulingGroupId?: string | undefined;
    /** The sharedOpenShift property */
    private _sharedOpenShift?: OpenShiftItem | undefined;
    /**
     * Instantiates a new OpenShift and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the draftOpenShift property value. The draftOpenShift property
     * @returns a openShiftItem
     */
    public get draftOpenShift() {
        return this._draftOpenShift;
    };
    /**
     * Sets the draftOpenShift property value. The draftOpenShift property
     * @param value Value to set for the draftOpenShift property.
     */
    public set draftOpenShift(value: OpenShiftItem | undefined) {
        this._draftOpenShift = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "draftOpenShift": n => { this.draftOpenShift = n.getObjectValue<OpenShiftItem>(createOpenShiftItemFromDiscriminatorValue); },
            "isStagedForDeletion": n => { this.isStagedForDeletion = n.getBooleanValue(); },
            "schedulingGroupId": n => { this.schedulingGroupId = n.getStringValue(); },
            "sharedOpenShift": n => { this.sharedOpenShift = n.getObjectValue<OpenShiftItem>(createOpenShiftItemFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isStagedForDeletion property value. The isStagedForDeletion property
     * @returns a boolean
     */
    public get isStagedForDeletion() {
        return this._isStagedForDeletion;
    };
    /**
     * Sets the isStagedForDeletion property value. The isStagedForDeletion property
     * @param value Value to set for the isStagedForDeletion property.
     */
    public set isStagedForDeletion(value: boolean | undefined) {
        this._isStagedForDeletion = value;
    };
    /**
     * Gets the schedulingGroupId property value. ID for the scheduling group that the open shift belongs to.
     * @returns a string
     */
    public get schedulingGroupId() {
        return this._schedulingGroupId;
    };
    /**
     * Sets the schedulingGroupId property value. ID for the scheduling group that the open shift belongs to.
     * @param value Value to set for the schedulingGroupId property.
     */
    public set schedulingGroupId(value: string | undefined) {
        this._schedulingGroupId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<OpenShiftItem>("draftOpenShift", this.draftOpenShift);
        writer.writeBooleanValue("isStagedForDeletion", this.isStagedForDeletion);
        writer.writeStringValue("schedulingGroupId", this.schedulingGroupId);
        writer.writeObjectValue<OpenShiftItem>("sharedOpenShift", this.sharedOpenShift);
    };
    /**
     * Gets the sharedOpenShift property value. The sharedOpenShift property
     * @returns a openShiftItem
     */
    public get sharedOpenShift() {
        return this._sharedOpenShift;
    };
    /**
     * Sets the sharedOpenShift property value. The sharedOpenShift property
     * @param value Value to set for the sharedOpenShift property.
     */
    public set sharedOpenShift(value: OpenShiftItem | undefined) {
        this._sharedOpenShift = value;
    };
}
