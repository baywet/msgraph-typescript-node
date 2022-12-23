import {ChatType} from './chatType';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {createChatMessageInfoFromDiscriminatorValue} from './createChatMessageInfoFromDiscriminatorValue';
import {createChatViewpointFromDiscriminatorValue} from './createChatViewpointFromDiscriminatorValue';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {createPinnedChatMessageInfoFromDiscriminatorValue} from './createPinnedChatMessageInfoFromDiscriminatorValue';
import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from './createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {createTeamsAppInstallationFromDiscriminatorValue} from './createTeamsAppInstallationFromDiscriminatorValue';
import {createTeamsAsyncOperationFromDiscriminatorValue} from './createTeamsAsyncOperationFromDiscriminatorValue';
import {createTeamsTabFromDiscriminatorValue} from './createTeamsTabFromDiscriminatorValue';
import {createTeamworkOnlineMeetingInfoFromDiscriminatorValue} from './createTeamworkOnlineMeetingInfoFromDiscriminatorValue';
import {ChatMessage, ChatMessageInfo, ChatViewpoint, ConversationMember, Entity, PinnedChatMessageInfo, ResourceSpecificPermissionGrant, TeamsAppInstallation, TeamsAsyncOperation, TeamsTab, TeamworkOnlineMeetingInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Chat extends Entity implements Parsable {
    /** The chatType property */
    private _chatType?: ChatType | undefined;
    /** Date and time at which the chat was created. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** A collection of all the apps in the chat. Nullable. */
    private _installedApps?: TeamsAppInstallation[] | undefined;
    /** The lastMessagePreview property */
    private _lastMessagePreview?: ChatMessageInfo | undefined;
    /** Date and time at which the chat was renamed or list of members were last changed. Read-only. */
    private _lastUpdatedDateTime?: Date | undefined;
    /** A collection of all the members in the chat. Nullable. */
    private _members?: ConversationMember[] | undefined;
    /** A collection of all the messages in the chat. Nullable. */
    private _messages?: ChatMessage[] | undefined;
    /** The onlineMeetingInfo property */
    private _onlineMeetingInfo?: TeamworkOnlineMeetingInfo | undefined;
    /** A collection of all the Teams async operations that ran or are running on the chat. Nullable. */
    private _operations?: TeamsAsyncOperation[] | undefined;
    /** A collection of permissions granted to apps for the chat. */
    private _permissionGrants?: ResourceSpecificPermissionGrant[] | undefined;
    /** A collection of all the pinned messages in the chat. Nullable. */
    private _pinnedMessages?: PinnedChatMessageInfo[] | undefined;
    /** A collection of all the tabs in the chat. Nullable. */
    private _tabs?: TeamsTab[] | undefined;
    /** The identifier of the tenant in which the chat was created. Read-only. */
    private _tenantId?: string | undefined;
    /** (Optional) Subject or topic for the chat. Only available for group chats. */
    private _topic?: string | undefined;
    /** The viewpoint property */
    private _viewpoint?: ChatViewpoint | undefined;
    /** The URL for the chat in Microsoft Teams. The URL should be treated as an opaque blob, and not parsed. Read-only. */
    private _webUrl?: string | undefined;
    /**
     * Gets the chatType property value. The chatType property
     * @returns a chatType
     */
    public get chatType() {
        return this._chatType;
    };
    /**
     * Sets the chatType property value. The chatType property
     * @param value Value to set for the chatType property.
     */
    public set chatType(value: ChatType | undefined) {
        this._chatType = value;
    };
    /**
     * Instantiates a new chat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Date and time at which the chat was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time at which the chat was created. Read-only.
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
            "chatType": n => { this.chatType = n.getEnumValue<ChatType>(ChatType); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "installedApps": n => { this.installedApps = n.getCollectionOfObjectValues<TeamsAppInstallation>(createTeamsAppInstallationFromDiscriminatorValue); },
            "lastMessagePreview": n => { this.lastMessagePreview = n.getObjectValue<ChatMessageInfo>(createChatMessageInfoFromDiscriminatorValue); },
            "lastUpdatedDateTime": n => { this.lastUpdatedDateTime = n.getDateValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
            "messages": n => { this.messages = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); },
            "onlineMeetingInfo": n => { this.onlineMeetingInfo = n.getObjectValue<TeamworkOnlineMeetingInfo>(createTeamworkOnlineMeetingInfoFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<TeamsAsyncOperation>(createTeamsAsyncOperationFromDiscriminatorValue); },
            "permissionGrants": n => { this.permissionGrants = n.getCollectionOfObjectValues<ResourceSpecificPermissionGrant>(createResourceSpecificPermissionGrantFromDiscriminatorValue); },
            "pinnedMessages": n => { this.pinnedMessages = n.getCollectionOfObjectValues<PinnedChatMessageInfo>(createPinnedChatMessageInfoFromDiscriminatorValue); },
            "tabs": n => { this.tabs = n.getCollectionOfObjectValues<TeamsTab>(createTeamsTabFromDiscriminatorValue); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "topic": n => { this.topic = n.getStringValue(); },
            "viewpoint": n => { this.viewpoint = n.getObjectValue<ChatViewpoint>(createChatViewpointFromDiscriminatorValue); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the installedApps property value. A collection of all the apps in the chat. Nullable.
     * @returns a teamsAppInstallation
     */
    public get installedApps() {
        return this._installedApps;
    };
    /**
     * Sets the installedApps property value. A collection of all the apps in the chat. Nullable.
     * @param value Value to set for the installedApps property.
     */
    public set installedApps(value: TeamsAppInstallation[] | undefined) {
        this._installedApps = value;
    };
    /**
     * Gets the lastMessagePreview property value. The lastMessagePreview property
     * @returns a chatMessageInfo
     */
    public get lastMessagePreview() {
        return this._lastMessagePreview;
    };
    /**
     * Sets the lastMessagePreview property value. The lastMessagePreview property
     * @param value Value to set for the lastMessagePreview property.
     */
    public set lastMessagePreview(value: ChatMessageInfo | undefined) {
        this._lastMessagePreview = value;
    };
    /**
     * Gets the lastUpdatedDateTime property value. Date and time at which the chat was renamed or list of members were last changed. Read-only.
     * @returns a Date
     */
    public get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    };
    /**
     * Sets the lastUpdatedDateTime property value. Date and time at which the chat was renamed or list of members were last changed. Read-only.
     * @param value Value to set for the lastUpdatedDateTime property.
     */
    public set lastUpdatedDateTime(value: Date | undefined) {
        this._lastUpdatedDateTime = value;
    };
    /**
     * Gets the members property value. A collection of all the members in the chat. Nullable.
     * @returns a conversationMember
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. A collection of all the members in the chat. Nullable.
     * @param value Value to set for the members property.
     */
    public set members(value: ConversationMember[] | undefined) {
        this._members = value;
    };
    /**
     * Gets the messages property value. A collection of all the messages in the chat. Nullable.
     * @returns a chatMessage
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Sets the messages property value. A collection of all the messages in the chat. Nullable.
     * @param value Value to set for the messages property.
     */
    public set messages(value: ChatMessage[] | undefined) {
        this._messages = value;
    };
    /**
     * Gets the onlineMeetingInfo property value. The onlineMeetingInfo property
     * @returns a teamworkOnlineMeetingInfo
     */
    public get onlineMeetingInfo() {
        return this._onlineMeetingInfo;
    };
    /**
     * Sets the onlineMeetingInfo property value. The onlineMeetingInfo property
     * @param value Value to set for the onlineMeetingInfo property.
     */
    public set onlineMeetingInfo(value: TeamworkOnlineMeetingInfo | undefined) {
        this._onlineMeetingInfo = value;
    };
    /**
     * Gets the operations property value. A collection of all the Teams async operations that ran or are running on the chat. Nullable.
     * @returns a teamsAsyncOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. A collection of all the Teams async operations that ran or are running on the chat. Nullable.
     * @param value Value to set for the operations property.
     */
    public set operations(value: TeamsAsyncOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Gets the permissionGrants property value. A collection of permissions granted to apps for the chat.
     * @returns a resourceSpecificPermissionGrant
     */
    public get permissionGrants() {
        return this._permissionGrants;
    };
    /**
     * Sets the permissionGrants property value. A collection of permissions granted to apps for the chat.
     * @param value Value to set for the permissionGrants property.
     */
    public set permissionGrants(value: ResourceSpecificPermissionGrant[] | undefined) {
        this._permissionGrants = value;
    };
    /**
     * Gets the pinnedMessages property value. A collection of all the pinned messages in the chat. Nullable.
     * @returns a pinnedChatMessageInfo
     */
    public get pinnedMessages() {
        return this._pinnedMessages;
    };
    /**
     * Sets the pinnedMessages property value. A collection of all the pinned messages in the chat. Nullable.
     * @param value Value to set for the pinnedMessages property.
     */
    public set pinnedMessages(value: PinnedChatMessageInfo[] | undefined) {
        this._pinnedMessages = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ChatType>("chatType", this.chatType);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeCollectionOfObjectValues<TeamsAppInstallation>("installedApps", this.installedApps);
        writer.writeObjectValue<ChatMessageInfo>("lastMessagePreview", this.lastMessagePreview);
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        writer.writeCollectionOfObjectValues<ConversationMember>("members", this.members);
        writer.writeCollectionOfObjectValues<ChatMessage>("messages", this.messages);
        writer.writeObjectValue<TeamworkOnlineMeetingInfo>("onlineMeetingInfo", this.onlineMeetingInfo);
        writer.writeCollectionOfObjectValues<TeamsAsyncOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<ResourceSpecificPermissionGrant>("permissionGrants", this.permissionGrants);
        writer.writeCollectionOfObjectValues<PinnedChatMessageInfo>("pinnedMessages", this.pinnedMessages);
        writer.writeCollectionOfObjectValues<TeamsTab>("tabs", this.tabs);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeStringValue("topic", this.topic);
        writer.writeObjectValue<ChatViewpoint>("viewpoint", this.viewpoint);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the tabs property value. A collection of all the tabs in the chat. Nullable.
     * @returns a teamsTab
     */
    public get tabs() {
        return this._tabs;
    };
    /**
     * Sets the tabs property value. A collection of all the tabs in the chat. Nullable.
     * @param value Value to set for the tabs property.
     */
    public set tabs(value: TeamsTab[] | undefined) {
        this._tabs = value;
    };
    /**
     * Gets the tenantId property value. The identifier of the tenant in which the chat was created. Read-only.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The identifier of the tenant in which the chat was created. Read-only.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
    /**
     * Gets the topic property value. (Optional) Subject or topic for the chat. Only available for group chats.
     * @returns a string
     */
    public get topic() {
        return this._topic;
    };
    /**
     * Sets the topic property value. (Optional) Subject or topic for the chat. Only available for group chats.
     * @param value Value to set for the topic property.
     */
    public set topic(value: string | undefined) {
        this._topic = value;
    };
    /**
     * Gets the viewpoint property value. The viewpoint property
     * @returns a chatViewpoint
     */
    public get viewpoint() {
        return this._viewpoint;
    };
    /**
     * Sets the viewpoint property value. The viewpoint property
     * @param value Value to set for the viewpoint property.
     */
    public set viewpoint(value: ChatViewpoint | undefined) {
        this._viewpoint = value;
    };
    /**
     * Gets the webUrl property value. The URL for the chat in Microsoft Teams. The URL should be treated as an opaque blob, and not parsed. Read-only.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. The URL for the chat in Microsoft Teams. The URL should be treated as an opaque blob, and not parsed. Read-only.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
