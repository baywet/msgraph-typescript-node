import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {createPrinterShareViewpointFromDiscriminatorValue} from './createPrinterShareViewpointFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {Group, Printer, PrinterBase, PrinterShareViewpoint, User} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterShare extends PrinterBase implements Parsable {
    /** If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties. */
    private _allowAllUsers?: boolean | undefined;
    /** The groups whose users have access to print using the printer. */
    private _allowedGroups?: Group[] | undefined;
    /** The users who have access to print using the printer. */
    private _allowedUsers?: User[] | undefined;
    /** The DateTimeOffset when the printer share was created. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The printer property */
    private _printer?: Printer | undefined;
    /** The viewPoint property */
    private _viewPoint?: PrinterShareViewpoint | undefined;
    /**
     * Gets the allowAllUsers property value. If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties.
     * @returns a boolean
     */
    public get allowAllUsers() {
        return this._allowAllUsers;
    };
    /**
     * Sets the allowAllUsers property value. If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties.
     * @param value Value to set for the allowAllUsers property.
     */
    public set allowAllUsers(value: boolean | undefined) {
        this._allowAllUsers = value;
    };
    /**
     * Gets the allowedGroups property value. The groups whose users have access to print using the printer.
     * @returns a group
     */
    public get allowedGroups() {
        return this._allowedGroups;
    };
    /**
     * Sets the allowedGroups property value. The groups whose users have access to print using the printer.
     * @param value Value to set for the allowedGroups property.
     */
    public set allowedGroups(value: Group[] | undefined) {
        this._allowedGroups = value;
    };
    /**
     * Gets the allowedUsers property value. The users who have access to print using the printer.
     * @returns a user
     */
    public get allowedUsers() {
        return this._allowedUsers;
    };
    /**
     * Sets the allowedUsers property value. The users who have access to print using the printer.
     * @param value Value to set for the allowedUsers property.
     */
    public set allowedUsers(value: User[] | undefined) {
        this._allowedUsers = value;
    };
    /**
     * Instantiates a new printerShare and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The DateTimeOffset when the printer share was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The DateTimeOffset when the printer share was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowAllUsers": n => { this.allowAllUsers = n.getBooleanValue(); },
            "allowedGroups": n => { this.allowedGroups = n.getCollectionOfObjectValues<Group>(createGroupFromDiscriminatorValue); },
            "allowedUsers": n => { this.allowedUsers = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "printer": n => { this.printer = n.getObjectValue<Printer>(createPrinterFromDiscriminatorValue); },
            "viewPoint": n => { this.viewPoint = n.getObjectValue<PrinterShareViewpoint>(createPrinterShareViewpointFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the printer property value. The printer property
     * @returns a printer
     */
    public get printer() {
        return this._printer;
    };
    /**
     * Sets the printer property value. The printer property
     * @param value Value to set for the printer property.
     */
    public set printer(value: Printer | undefined) {
        this._printer = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("allowAllUsers", this.allowAllUsers);
        writer.writeCollectionOfObjectValues<Group>("allowedGroups", this.allowedGroups);
        writer.writeCollectionOfObjectValues<User>("allowedUsers", this.allowedUsers);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<Printer>("printer", this.printer);
        writer.writeObjectValue<PrinterShareViewpoint>("viewPoint", this.viewPoint);
    };
    /**
     * Gets the viewPoint property value. The viewPoint property
     * @returns a printerShareViewpoint
     */
    public get viewPoint() {
        return this._viewPoint;
    };
    /**
     * Sets the viewPoint property value. The viewPoint property
     * @param value Value to set for the viewPoint property.
     */
    public set viewPoint(value: PrinterShareViewpoint | undefined) {
        this._viewPoint = value;
    };
}
