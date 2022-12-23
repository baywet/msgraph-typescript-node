import {createDeviceHealthFromDiscriminatorValue} from './createDeviceHealthFromDiscriminatorValue';
import {createPrinterLocationFromDiscriminatorValue} from './createPrinterLocationFromDiscriminatorValue';
import {DeviceHealth, Entity, PrinterLocation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintConnector extends Entity implements Parsable {
    /** The connector's version. */
    private _appVersion?: string | undefined;
    /** The deviceHealth property */
    private _deviceHealth?: DeviceHealth | undefined;
    /** The name of the connector. */
    private _displayName?: string | undefined;
    /** The connector machine's hostname. */
    private _fullyQualifiedDomainName?: string | undefined;
    /** The location property */
    private _location?: PrinterLocation | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The connector machine's operating system version. */
    private _operatingSystem?: string | undefined;
    /** The DateTimeOffset when the connector was registered. */
    private _registeredDateTime?: Date | undefined;
    /**
     * Gets the appVersion property value. The connector's version.
     * @returns a string
     */
    public get appVersion() {
        return this._appVersion;
    };
    /**
     * Sets the appVersion property value. The connector's version.
     * @param value Value to set for the appVersion property.
     */
    public set appVersion(value: string | undefined) {
        this._appVersion = value;
    };
    /**
     * Instantiates a new printConnector and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceHealth property value. The deviceHealth property
     * @returns a deviceHealth
     */
    public get deviceHealth() {
        return this._deviceHealth;
    };
    /**
     * Sets the deviceHealth property value. The deviceHealth property
     * @param value Value to set for the deviceHealth property.
     */
    public set deviceHealth(value: DeviceHealth | undefined) {
        this._deviceHealth = value;
    };
    /**
     * Gets the displayName property value. The name of the connector.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the connector.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the fullyQualifiedDomainName property value. The connector machine's hostname.
     * @returns a string
     */
    public get fullyQualifiedDomainName() {
        return this._fullyQualifiedDomainName;
    };
    /**
     * Sets the fullyQualifiedDomainName property value. The connector machine's hostname.
     * @param value Value to set for the fullyQualifiedDomainName property.
     */
    public set fullyQualifiedDomainName(value: string | undefined) {
        this._fullyQualifiedDomainName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appVersion": n => { this.appVersion = n.getStringValue(); },
            "deviceHealth": n => { this.deviceHealth = n.getObjectValue<DeviceHealth>(createDeviceHealthFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "fullyQualifiedDomainName": n => { this.fullyQualifiedDomainName = n.getStringValue(); },
            "location": n => { this.location = n.getObjectValue<PrinterLocation>(createPrinterLocationFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "operatingSystem": n => { this.operatingSystem = n.getStringValue(); },
            "registeredDateTime": n => { this.registeredDateTime = n.getDateValue(); },
        };
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
     * Gets the operatingSystem property value. The connector machine's operating system version.
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Sets the operatingSystem property value. The connector machine's operating system version.
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        this._operatingSystem = value;
    };
    /**
     * Gets the registeredDateTime property value. The DateTimeOffset when the connector was registered.
     * @returns a Date
     */
    public get registeredDateTime() {
        return this._registeredDateTime;
    };
    /**
     * Sets the registeredDateTime property value. The DateTimeOffset when the connector was registered.
     * @param value Value to set for the registeredDateTime property.
     */
    public set registeredDateTime(value: Date | undefined) {
        this._registeredDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appVersion", this.appVersion);
        writer.writeObjectValue<DeviceHealth>("deviceHealth", this.deviceHealth);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("fullyQualifiedDomainName", this.fullyQualifiedDomainName);
        writer.writeObjectValue<PrinterLocation>("location", this.location);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        writer.writeDateValue("registeredDateTime", this.registeredDateTime);
    };
}
