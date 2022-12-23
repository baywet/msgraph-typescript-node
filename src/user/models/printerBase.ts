import {createPrinterCapabilitiesFromDiscriminatorValue} from './createPrinterCapabilitiesFromDiscriminatorValue';
import {createPrinterDefaultsFromDiscriminatorValue} from './createPrinterDefaultsFromDiscriminatorValue';
import {createPrinterLocationFromDiscriminatorValue} from './createPrinterLocationFromDiscriminatorValue';
import {createPrinterStatusFromDiscriminatorValue} from './createPrinterStatusFromDiscriminatorValue';
import {createPrintJobFromDiscriminatorValue} from './createPrintJobFromDiscriminatorValue';
import {Entity, PrinterCapabilities, PrinterDefaults, PrinterLocation, PrinterStatus, PrintJob} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterBase extends Entity implements Parsable {
    /** The capabilities property */
    private _capabilities?: PrinterCapabilities | undefined;
    /** The defaults property */
    private _defaults?: PrinterDefaults | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The isAcceptingJobs property */
    private _isAcceptingJobs?: boolean | undefined;
    /** The jobs property */
    private _jobs?: PrintJob[] | undefined;
    /** The location property */
    private _location?: PrinterLocation | undefined;
    /** The manufacturer property */
    private _manufacturer?: string | undefined;
    /** The model property */
    private _model?: string | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The status property */
    private _status?: PrinterStatus | undefined;
    /**
     * Gets the capabilities property value. The capabilities property
     * @returns a printerCapabilities
     */
    public get capabilities() {
        return this._capabilities;
    };
    /**
     * Sets the capabilities property value. The capabilities property
     * @param value Value to set for the capabilities property.
     */
    public set capabilities(value: PrinterCapabilities | undefined) {
        this._capabilities = value;
    };
    /**
     * Instantiates a new printerBase and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defaults property value. The defaults property
     * @returns a printerDefaults
     */
    public get defaults() {
        return this._defaults;
    };
    /**
     * Sets the defaults property value. The defaults property
     * @param value Value to set for the defaults property.
     */
    public set defaults(value: PrinterDefaults | undefined) {
        this._defaults = value;
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
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
            "capabilities": n => { this.capabilities = n.getObjectValue<PrinterCapabilities>(createPrinterCapabilitiesFromDiscriminatorValue); },
            "defaults": n => { this.defaults = n.getObjectValue<PrinterDefaults>(createPrinterDefaultsFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isAcceptingJobs": n => { this.isAcceptingJobs = n.getBooleanValue(); },
            "jobs": n => { this.jobs = n.getCollectionOfObjectValues<PrintJob>(createPrintJobFromDiscriminatorValue); },
            "location": n => { this.location = n.getObjectValue<PrinterLocation>(createPrinterLocationFromDiscriminatorValue); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "status": n => { this.status = n.getObjectValue<PrinterStatus>(createPrinterStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isAcceptingJobs property value. The isAcceptingJobs property
     * @returns a boolean
     */
    public get isAcceptingJobs() {
        return this._isAcceptingJobs;
    };
    /**
     * Sets the isAcceptingJobs property value. The isAcceptingJobs property
     * @param value Value to set for the isAcceptingJobs property.
     */
    public set isAcceptingJobs(value: boolean | undefined) {
        this._isAcceptingJobs = value;
    };
    /**
     * Gets the jobs property value. The jobs property
     * @returns a printJob
     */
    public get jobs() {
        return this._jobs;
    };
    /**
     * Sets the jobs property value. The jobs property
     * @param value Value to set for the jobs property.
     */
    public set jobs(value: PrintJob[] | undefined) {
        this._jobs = value;
    };
    /**
     * Gets the location property value. The location property
     * @returns a printerLocation
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The location property
     * @param value Value to set for the location property.
     */
    public set location(value: PrinterLocation | undefined) {
        this._location = value;
    };
    /**
     * Gets the manufacturer property value. The manufacturer property
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Sets the manufacturer property value. The manufacturer property
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Gets the model property value. The model property
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. The model property
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<PrinterCapabilities>("capabilities", this.capabilities);
        writer.writeObjectValue<PrinterDefaults>("defaults", this.defaults);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isAcceptingJobs", this.isAcceptingJobs);
        writer.writeCollectionOfObjectValues<PrintJob>("jobs", this.jobs);
        writer.writeObjectValue<PrinterLocation>("location", this.location);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("model", this.model);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<PrinterStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The status property
     * @returns a printerStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: PrinterStatus | undefined) {
        this._status = value;
    };
}
