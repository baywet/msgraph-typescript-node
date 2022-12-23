import {createMetaDataKeyStringPairFromDiscriminatorValue} from './createMetaDataKeyStringPairFromDiscriminatorValue';
import {createMetaDataKeyValuePairFromDiscriminatorValue} from './createMetaDataKeyValuePairFromDiscriminatorValue';
import {MetaDataKeyStringPair, MetaDataKeyValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServerProcessedContent implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A key-value map where keys are string identifiers and values are component ids. SharePoint servers might decide to use this hint to preload the script for corresponding components for performance boost. */
    private _componentDependencies?: MetaDataKeyStringPair[] | undefined;
    /** A key-value map where keys are string identifier and values are object of custom key-value pair. */
    private _customMetadata?: MetaDataKeyValuePair[] | undefined;
    /** A key-value map where keys are string identifiers and values are rich text with HTML format. SharePoint servers treat the values as HTML content and run services like safety checks, search index and link fixup on them. */
    private _htmlStrings?: MetaDataKeyStringPair[] | undefined;
    /** A key-value map where keys are string identifiers and values are image sources. SharePoint servers treat the values as image sources and run services like search index and link fixup on them. */
    private _imageSources?: MetaDataKeyStringPair[] | undefined;
    /** A key-value map where keys are string identifiers and values are links. SharePoint servers treat the values as links and run services like link fixup on them. */
    private _links?: MetaDataKeyStringPair[] | undefined;
    /** A key-value map where keys are string identifiers and values are strings that should be search indexed. */
    private _searchablePlainTexts?: MetaDataKeyStringPair[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the componentDependencies property value. A key-value map where keys are string identifiers and values are component ids. SharePoint servers might decide to use this hint to preload the script for corresponding components for performance boost.
     * @returns a metaDataKeyStringPair
     */
    public get componentDependencies() {
        return this._componentDependencies;
    };
    /**
     * Sets the componentDependencies property value. A key-value map where keys are string identifiers and values are component ids. SharePoint servers might decide to use this hint to preload the script for corresponding components for performance boost.
     * @param value Value to set for the componentDependencies property.
     */
    public set componentDependencies(value: MetaDataKeyStringPair[] | undefined) {
        this._componentDependencies = value;
    };
    /**
     * Instantiates a new serverProcessedContent and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the customMetadata property value. A key-value map where keys are string identifier and values are object of custom key-value pair.
     * @returns a metaDataKeyValuePair
     */
    public get customMetadata() {
        return this._customMetadata;
    };
    /**
     * Sets the customMetadata property value. A key-value map where keys are string identifier and values are object of custom key-value pair.
     * @param value Value to set for the customMetadata property.
     */
    public set customMetadata(value: MetaDataKeyValuePair[] | undefined) {
        this._customMetadata = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "componentDependencies": n => { this.componentDependencies = n.getCollectionOfObjectValues<MetaDataKeyStringPair>(createMetaDataKeyStringPairFromDiscriminatorValue); },
            "customMetadata": n => { this.customMetadata = n.getCollectionOfObjectValues<MetaDataKeyValuePair>(createMetaDataKeyValuePairFromDiscriminatorValue); },
            "htmlStrings": n => { this.htmlStrings = n.getCollectionOfObjectValues<MetaDataKeyStringPair>(createMetaDataKeyStringPairFromDiscriminatorValue); },
            "imageSources": n => { this.imageSources = n.getCollectionOfObjectValues<MetaDataKeyStringPair>(createMetaDataKeyStringPairFromDiscriminatorValue); },
            "links": n => { this.links = n.getCollectionOfObjectValues<MetaDataKeyStringPair>(createMetaDataKeyStringPairFromDiscriminatorValue); },
            "searchablePlainTexts": n => { this.searchablePlainTexts = n.getCollectionOfObjectValues<MetaDataKeyStringPair>(createMetaDataKeyStringPairFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the htmlStrings property value. A key-value map where keys are string identifiers and values are rich text with HTML format. SharePoint servers treat the values as HTML content and run services like safety checks, search index and link fixup on them.
     * @returns a metaDataKeyStringPair
     */
    public get htmlStrings() {
        return this._htmlStrings;
    };
    /**
     * Sets the htmlStrings property value. A key-value map where keys are string identifiers and values are rich text with HTML format. SharePoint servers treat the values as HTML content and run services like safety checks, search index and link fixup on them.
     * @param value Value to set for the htmlStrings property.
     */
    public set htmlStrings(value: MetaDataKeyStringPair[] | undefined) {
        this._htmlStrings = value;
    };
    /**
     * Gets the imageSources property value. A key-value map where keys are string identifiers and values are image sources. SharePoint servers treat the values as image sources and run services like search index and link fixup on them.
     * @returns a metaDataKeyStringPair
     */
    public get imageSources() {
        return this._imageSources;
    };
    /**
     * Sets the imageSources property value. A key-value map where keys are string identifiers and values are image sources. SharePoint servers treat the values as image sources and run services like search index and link fixup on them.
     * @param value Value to set for the imageSources property.
     */
    public set imageSources(value: MetaDataKeyStringPair[] | undefined) {
        this._imageSources = value;
    };
    /**
     * Gets the links property value. A key-value map where keys are string identifiers and values are links. SharePoint servers treat the values as links and run services like link fixup on them.
     * @returns a metaDataKeyStringPair
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. A key-value map where keys are string identifiers and values are links. SharePoint servers treat the values as links and run services like link fixup on them.
     * @param value Value to set for the links property.
     */
    public set links(value: MetaDataKeyStringPair[] | undefined) {
        this._links = value;
    };
    /**
     * Gets the searchablePlainTexts property value. A key-value map where keys are string identifiers and values are strings that should be search indexed.
     * @returns a metaDataKeyStringPair
     */
    public get searchablePlainTexts() {
        return this._searchablePlainTexts;
    };
    /**
     * Sets the searchablePlainTexts property value. A key-value map where keys are string identifiers and values are strings that should be search indexed.
     * @param value Value to set for the searchablePlainTexts property.
     */
    public set searchablePlainTexts(value: MetaDataKeyStringPair[] | undefined) {
        this._searchablePlainTexts = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<MetaDataKeyStringPair>("componentDependencies", this.componentDependencies);
        writer.writeCollectionOfObjectValues<MetaDataKeyValuePair>("customMetadata", this.customMetadata);
        writer.writeCollectionOfObjectValues<MetaDataKeyStringPair>("htmlStrings", this.htmlStrings);
        writer.writeCollectionOfObjectValues<MetaDataKeyStringPair>("imageSources", this.imageSources);
        writer.writeCollectionOfObjectValues<MetaDataKeyStringPair>("links", this.links);
        writer.writeCollectionOfObjectValues<MetaDataKeyStringPair>("searchablePlainTexts", this.searchablePlainTexts);
        writer.writeAdditionalData(this.additionalData);
    };
}
