import {CalendarColor} from './calendarColor';
import {createCalendarPermissionFromDiscriminatorValue} from './createCalendarPermissionFromDiscriminatorValue';
import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {CalendarPermission, EmailAddress, Entity, Event, MultiValueLegacyExtendedProperty, SingleValueLegacyExtendedProperty} from './index';
import {OnlineMeetingProviderType} from './onlineMeetingProviderType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Calendar extends Entity implements Parsable {
    /** Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness. */
    private _allowedOnlineMeetingProviders?: OnlineMeetingProviderType[] | undefined;
    /** The calendarGroup in which to create the calendar. If the user has never explicitly set a group for the calendar, this property is  null. */
    private _calendarGroupId?: string | undefined;
    /** The permissions of the users with whom the calendar is shared. */
    private _calendarPermissions?: CalendarPermission[] | undefined;
    /** The calendar view for the calendar. Navigation property. Read-only. */
    private _calendarView?: Event[] | undefined;
    /** true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access, through an Outlook client or the corresponding calendarPermission resource. Read-only. */
    private _canEdit?: boolean | undefined;
    /** true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it. Read-only. */
    private _canShare?: boolean | undefined;
    /** true if the user can read calendar items that have been marked private, false otherwise. This property is set through an Outlook client or the corresponding calendarPermission resource. Read-only. */
    private _canViewPrivateItems?: boolean | undefined;
    /** Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only. */
    private _changeKey?: string | undefined;
    /** The color property */
    private _color?: CalendarColor | undefined;
    /** The defaultOnlineMeetingProvider property */
    private _defaultOnlineMeetingProvider?: OnlineMeetingProviderType | undefined;
    /** The events in the calendar. Navigation property. Read-only. */
    private _events?: Event[] | undefined;
    /** The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is  empty. */
    private _hexColor?: string | undefined;
    /** true if this is the default calendar where new events are created by default, false otherwise. */
    private _isDefaultCalendar?: boolean | undefined;
    /** Indicates whether this user calendar can be deleted from the user mailbox. */
    private _isRemovable?: boolean | undefined;
    /** true if the user has shared the calendar with other users, false otherwise. Since only the user who created the calendar can share it, isShared and isSharedWithMe cannot be true for the same user. This property is set when sharing is initiated in an Outlook client, and can be reset when the sharing is cancelled through the client or the corresponding calendarPermission resource. Read-only. */
    private _isShared?: boolean | undefined;
    /** true if the user has been shared this calendar, false otherwise. This property is always false for a calendar owner. This property is set when sharing is initiated in an Outlook client, and can be reset when the sharing is cancelled through the client or the corresponding calendarPermission resource. Read-only. */
    private _isSharedWithMe?: boolean | undefined;
    /** Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses. */
    private _isTallyingResponses?: boolean | undefined;
    /** The collection of multi-value extended properties defined for the calendar. Read-only. Nullable. */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The calendar name. */
    private _name?: string | undefined;
    /** The owner property */
    private _owner?: EmailAddress | undefined;
    /** The collection of single-value extended properties defined for the calendar. Read-only. Nullable. */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Gets the allowedOnlineMeetingProviders property value. Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     * @returns a onlineMeetingProviderType
     */
    public get allowedOnlineMeetingProviders() {
        return this._allowedOnlineMeetingProviders;
    };
    /**
     * Sets the allowedOnlineMeetingProviders property value. Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     * @param value Value to set for the allowedOnlineMeetingProviders property.
     */
    public set allowedOnlineMeetingProviders(value: OnlineMeetingProviderType[] | undefined) {
        this._allowedOnlineMeetingProviders = value;
    };
    /**
     * Gets the calendarGroupId property value. The calendarGroup in which to create the calendar. If the user has never explicitly set a group for the calendar, this property is  null.
     * @returns a string
     */
    public get calendarGroupId() {
        return this._calendarGroupId;
    };
    /**
     * Sets the calendarGroupId property value. The calendarGroup in which to create the calendar. If the user has never explicitly set a group for the calendar, this property is  null.
     * @param value Value to set for the calendarGroupId property.
     */
    public set calendarGroupId(value: string | undefined) {
        this._calendarGroupId = value;
    };
    /**
     * Gets the calendarPermissions property value. The permissions of the users with whom the calendar is shared.
     * @returns a calendarPermission
     */
    public get calendarPermissions() {
        return this._calendarPermissions;
    };
    /**
     * Sets the calendarPermissions property value. The permissions of the users with whom the calendar is shared.
     * @param value Value to set for the calendarPermissions property.
     */
    public set calendarPermissions(value: CalendarPermission[] | undefined) {
        this._calendarPermissions = value;
    };
    /**
     * Gets the calendarView property value. The calendar view for the calendar. Navigation property. Read-only.
     * @returns a event
     */
    public get calendarView() {
        return this._calendarView;
    };
    /**
     * Sets the calendarView property value. The calendar view for the calendar. Navigation property. Read-only.
     * @param value Value to set for the calendarView property.
     */
    public set calendarView(value: Event[] | undefined) {
        this._calendarView = value;
    };
    /**
     * Gets the canEdit property value. true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access, through an Outlook client or the corresponding calendarPermission resource. Read-only.
     * @returns a boolean
     */
    public get canEdit() {
        return this._canEdit;
    };
    /**
     * Sets the canEdit property value. true if the user can write to the calendar, false otherwise. This property is true for the user who created the calendar. This property is also true for a user who has been shared a calendar and granted write access, through an Outlook client or the corresponding calendarPermission resource. Read-only.
     * @param value Value to set for the canEdit property.
     */
    public set canEdit(value: boolean | undefined) {
        this._canEdit = value;
    };
    /**
     * Gets the canShare property value. true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it. Read-only.
     * @returns a boolean
     */
    public get canShare() {
        return this._canShare;
    };
    /**
     * Sets the canShare property value. true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can share it. Read-only.
     * @param value Value to set for the canShare property.
     */
    public set canShare(value: boolean | undefined) {
        this._canShare = value;
    };
    /**
     * Gets the canViewPrivateItems property value. true if the user can read calendar items that have been marked private, false otherwise. This property is set through an Outlook client or the corresponding calendarPermission resource. Read-only.
     * @returns a boolean
     */
    public get canViewPrivateItems() {
        return this._canViewPrivateItems;
    };
    /**
     * Sets the canViewPrivateItems property value. true if the user can read calendar items that have been marked private, false otherwise. This property is set through an Outlook client or the corresponding calendarPermission resource. Read-only.
     * @param value Value to set for the canViewPrivateItems property.
     */
    public set canViewPrivateItems(value: boolean | undefined) {
        this._canViewPrivateItems = value;
    };
    /**
     * Gets the changeKey property value. Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @returns a string
     */
    public get changeKey() {
        return this._changeKey;
    };
    /**
     * Sets the changeKey property value. Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @param value Value to set for the changeKey property.
     */
    public set changeKey(value: string | undefined) {
        this._changeKey = value;
    };
    /**
     * Gets the color property value. The color property
     * @returns a calendarColor
     */
    public get color() {
        return this._color;
    };
    /**
     * Sets the color property value. The color property
     * @param value Value to set for the color property.
     */
    public set color(value: CalendarColor | undefined) {
        this._color = value;
    };
    /**
     * Instantiates a new calendar and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defaultOnlineMeetingProvider property value. The defaultOnlineMeetingProvider property
     * @returns a onlineMeetingProviderType
     */
    public get defaultOnlineMeetingProvider() {
        return this._defaultOnlineMeetingProvider;
    };
    /**
     * Sets the defaultOnlineMeetingProvider property value. The defaultOnlineMeetingProvider property
     * @param value Value to set for the defaultOnlineMeetingProvider property.
     */
    public set defaultOnlineMeetingProvider(value: OnlineMeetingProviderType | undefined) {
        this._defaultOnlineMeetingProvider = value;
    };
    /**
     * Gets the events property value. The events in the calendar. Navigation property. Read-only.
     * @returns a event
     */
    public get events() {
        return this._events;
    };
    /**
     * Sets the events property value. The events in the calendar. Navigation property. Read-only.
     * @param value Value to set for the events property.
     */
    public set events(value: Event[] | undefined) {
        this._events = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedOnlineMeetingProviders": n => { this.allowedOnlineMeetingProviders = n.getEnumValues<OnlineMeetingProviderType>(OnlineMeetingProviderType); },
            "calendarGroupId": n => { this.calendarGroupId = n.getStringValue(); },
            "calendarPermissions": n => { this.calendarPermissions = n.getCollectionOfObjectValues<CalendarPermission>(createCalendarPermissionFromDiscriminatorValue); },
            "calendarView": n => { this.calendarView = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
            "canEdit": n => { this.canEdit = n.getBooleanValue(); },
            "canShare": n => { this.canShare = n.getBooleanValue(); },
            "canViewPrivateItems": n => { this.canViewPrivateItems = n.getBooleanValue(); },
            "changeKey": n => { this.changeKey = n.getStringValue(); },
            "color": n => { this.color = n.getEnumValue<CalendarColor>(CalendarColor); },
            "defaultOnlineMeetingProvider": n => { this.defaultOnlineMeetingProvider = n.getEnumValue<OnlineMeetingProviderType>(OnlineMeetingProviderType); },
            "events": n => { this.events = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
            "hexColor": n => { this.hexColor = n.getStringValue(); },
            "isDefaultCalendar": n => { this.isDefaultCalendar = n.getBooleanValue(); },
            "isRemovable": n => { this.isRemovable = n.getBooleanValue(); },
            "isShared": n => { this.isShared = n.getBooleanValue(); },
            "isSharedWithMe": n => { this.isSharedWithMe = n.getBooleanValue(); },
            "isTallyingResponses": n => { this.isTallyingResponses = n.getBooleanValue(); },
            "multiValueExtendedProperties": n => { this.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "owner": n => { this.owner = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
            "singleValueExtendedProperties": n => { this.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the hexColor property value. The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is  empty.
     * @returns a string
     */
    public get hexColor() {
        return this._hexColor;
    };
    /**
     * Sets the hexColor property value. The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly set a color for the calendar, this property is  empty.
     * @param value Value to set for the hexColor property.
     */
    public set hexColor(value: string | undefined) {
        this._hexColor = value;
    };
    /**
     * Gets the isDefaultCalendar property value. true if this is the default calendar where new events are created by default, false otherwise.
     * @returns a boolean
     */
    public get isDefaultCalendar() {
        return this._isDefaultCalendar;
    };
    /**
     * Sets the isDefaultCalendar property value. true if this is the default calendar where new events are created by default, false otherwise.
     * @param value Value to set for the isDefaultCalendar property.
     */
    public set isDefaultCalendar(value: boolean | undefined) {
        this._isDefaultCalendar = value;
    };
    /**
     * Gets the isRemovable property value. Indicates whether this user calendar can be deleted from the user mailbox.
     * @returns a boolean
     */
    public get isRemovable() {
        return this._isRemovable;
    };
    /**
     * Sets the isRemovable property value. Indicates whether this user calendar can be deleted from the user mailbox.
     * @param value Value to set for the isRemovable property.
     */
    public set isRemovable(value: boolean | undefined) {
        this._isRemovable = value;
    };
    /**
     * Gets the isShared property value. true if the user has shared the calendar with other users, false otherwise. Since only the user who created the calendar can share it, isShared and isSharedWithMe cannot be true for the same user. This property is set when sharing is initiated in an Outlook client, and can be reset when the sharing is cancelled through the client or the corresponding calendarPermission resource. Read-only.
     * @returns a boolean
     */
    public get isShared() {
        return this._isShared;
    };
    /**
     * Sets the isShared property value. true if the user has shared the calendar with other users, false otherwise. Since only the user who created the calendar can share it, isShared and isSharedWithMe cannot be true for the same user. This property is set when sharing is initiated in an Outlook client, and can be reset when the sharing is cancelled through the client or the corresponding calendarPermission resource. Read-only.
     * @param value Value to set for the isShared property.
     */
    public set isShared(value: boolean | undefined) {
        this._isShared = value;
    };
    /**
     * Gets the isSharedWithMe property value. true if the user has been shared this calendar, false otherwise. This property is always false for a calendar owner. This property is set when sharing is initiated in an Outlook client, and can be reset when the sharing is cancelled through the client or the corresponding calendarPermission resource. Read-only.
     * @returns a boolean
     */
    public get isSharedWithMe() {
        return this._isSharedWithMe;
    };
    /**
     * Sets the isSharedWithMe property value. true if the user has been shared this calendar, false otherwise. This property is always false for a calendar owner. This property is set when sharing is initiated in an Outlook client, and can be reset when the sharing is cancelled through the client or the corresponding calendarPermission resource. Read-only.
     * @param value Value to set for the isSharedWithMe property.
     */
    public set isSharedWithMe(value: boolean | undefined) {
        this._isSharedWithMe = value;
    };
    /**
     * Gets the isTallyingResponses property value. Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses.
     * @returns a boolean
     */
    public get isTallyingResponses() {
        return this._isTallyingResponses;
    };
    /**
     * Sets the isTallyingResponses property value. Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users' primary calendars support tracking of meeting responses.
     * @param value Value to set for the isTallyingResponses property.
     */
    public set isTallyingResponses(value: boolean | undefined) {
        this._isTallyingResponses = value;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Gets the name property value. The calendar name.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The calendar name.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the owner property value. The owner property
     * @returns a emailAddress
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. The owner property
     * @param value Value to set for the owner property.
     */
    public set owner(value: EmailAddress | undefined) {
        this._owner = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        this.allowedOnlineMeetingProviders && writer.writeEnumValue<OnlineMeetingProviderType>("allowedOnlineMeetingProviders", ...this.allowedOnlineMeetingProviders);
        writer.writeStringValue("calendarGroupId", this.calendarGroupId);
        writer.writeCollectionOfObjectValues<CalendarPermission>("calendarPermissions", this.calendarPermissions);
        writer.writeCollectionOfObjectValues<Event>("calendarView", this.calendarView);
        writer.writeBooleanValue("canEdit", this.canEdit);
        writer.writeBooleanValue("canShare", this.canShare);
        writer.writeBooleanValue("canViewPrivateItems", this.canViewPrivateItems);
        writer.writeStringValue("changeKey", this.changeKey);
        writer.writeEnumValue<CalendarColor>("color", this.color);
        writer.writeEnumValue<OnlineMeetingProviderType>("defaultOnlineMeetingProvider", this.defaultOnlineMeetingProvider);
        writer.writeCollectionOfObjectValues<Event>("events", this.events);
        writer.writeStringValue("hexColor", this.hexColor);
        writer.writeBooleanValue("isDefaultCalendar", this.isDefaultCalendar);
        writer.writeBooleanValue("isRemovable", this.isRemovable);
        writer.writeBooleanValue("isShared", this.isShared);
        writer.writeBooleanValue("isSharedWithMe", this.isSharedWithMe);
        writer.writeBooleanValue("isTallyingResponses", this.isTallyingResponses);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<EmailAddress>("owner", this.owner);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
}
