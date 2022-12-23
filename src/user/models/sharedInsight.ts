import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {createSharingDetailFromDiscriminatorValue} from './createSharingDetailFromDiscriminatorValue';
import {Entity, ResourceReference, ResourceVisualization, SharingDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharedInsight extends Entity implements Parsable {
    /** The lastShared property */
    private _lastShared?: SharingDetail | undefined;
    /** The lastSharedMethod property */
    private _lastSharedMethod?: Entity | undefined;
    /** The resource property */
    private _resource?: Entity | undefined;
    /** The resourceReference property */
    private _resourceReference?: ResourceReference | undefined;
    /** The resourceVisualization property */
    private _resourceVisualization?: ResourceVisualization | undefined;
    /** The sharingHistory property */
    private _sharingHistory?: SharingDetail[] | undefined;
    /**
     * Instantiates a new sharedInsight and sets the default values.
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
            "lastShared": n => { this.lastShared = n.getObjectValue<SharingDetail>(createSharingDetailFromDiscriminatorValue); },
            "lastSharedMethod": n => { this.lastSharedMethod = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "resource": n => { this.resource = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "resourceReference": n => { this.resourceReference = n.getObjectValue<ResourceReference>(createResourceReferenceFromDiscriminatorValue); },
            "resourceVisualization": n => { this.resourceVisualization = n.getObjectValue<ResourceVisualization>(createResourceVisualizationFromDiscriminatorValue); },
            "sharingHistory": n => { this.sharingHistory = n.getCollectionOfObjectValues<SharingDetail>(createSharingDetailFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastShared property value. The lastShared property
     * @returns a sharingDetail
     */
    public get lastShared() {
        return this._lastShared;
    };
    /**
     * Sets the lastShared property value. The lastShared property
     * @param value Value to set for the lastShared property.
     */
    public set lastShared(value: SharingDetail | undefined) {
        this._lastShared = value;
    };
    /**
     * Gets the lastSharedMethod property value. The lastSharedMethod property
     * @returns a entity
     */
    public get lastSharedMethod() {
        return this._lastSharedMethod;
    };
    /**
     * Sets the lastSharedMethod property value. The lastSharedMethod property
     * @param value Value to set for the lastSharedMethod property.
     */
    public set lastSharedMethod(value: Entity | undefined) {
        this._lastSharedMethod = value;
    };
    /**
     * Gets the resource property value. The resource property
     * @returns a entity
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. The resource property
     * @param value Value to set for the resource property.
     */
    public set resource(value: Entity | undefined) {
        this._resource = value;
    };
    /**
     * Gets the resourceReference property value. The resourceReference property
     * @returns a resourceReference
     */
    public get resourceReference() {
        return this._resourceReference;
    };
    /**
     * Sets the resourceReference property value. The resourceReference property
     * @param value Value to set for the resourceReference property.
     */
    public set resourceReference(value: ResourceReference | undefined) {
        this._resourceReference = value;
    };
    /**
     * Gets the resourceVisualization property value. The resourceVisualization property
     * @returns a resourceVisualization
     */
    public get resourceVisualization() {
        return this._resourceVisualization;
    };
    /**
     * Sets the resourceVisualization property value. The resourceVisualization property
     * @param value Value to set for the resourceVisualization property.
     */
    public set resourceVisualization(value: ResourceVisualization | undefined) {
        this._resourceVisualization = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<SharingDetail>("lastShared", this.lastShared);
        writer.writeObjectValue<Entity>("lastSharedMethod", this.lastSharedMethod);
        writer.writeObjectValue<Entity>("resource", this.resource);
        writer.writeObjectValue<ResourceReference>("resourceReference", this.resourceReference);
        writer.writeObjectValue<ResourceVisualization>("resourceVisualization", this.resourceVisualization);
        writer.writeCollectionOfObjectValues<SharingDetail>("sharingHistory", this.sharingHistory);
    };
    /**
     * Gets the sharingHistory property value. The sharingHistory property
     * @returns a sharingDetail
     */
    public get sharingHistory() {
        return this._sharingHistory;
    };
    /**
     * Sets the sharingHistory property value. The sharingHistory property
     * @param value Value to set for the sharingHistory property.
     */
    public set sharingHistory(value: SharingDetail[] | undefined) {
        this._sharingHistory = value;
    };
}
