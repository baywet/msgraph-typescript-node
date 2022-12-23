import {Team} from './index';
import {serializeChannel} from './serializeChannel';
import {serializeConversationMember} from './serializeConversationMember';
import {serializeEntity} from './serializeEntity';
import {serializeGroup} from './serializeGroup';
import {serializeProfilePhoto} from './serializeProfilePhoto';
import {serializeResourceSpecificPermissionGrant} from './serializeResourceSpecificPermissionGrant';
import {serializeSchedule} from './serializeSchedule';
import {serializeTeamDiscoverySettings} from './serializeTeamDiscoverySettings';
import {serializeTeamFunSettings} from './serializeTeamFunSettings';
import {serializeTeamGuestSettings} from './serializeTeamGuestSettings';
import {serializeTeamMemberSettings} from './serializeTeamMemberSettings';
import {serializeTeamMessagingSettings} from './serializeTeamMessagingSettings';
import {serializeTeamsAppInstallation} from './serializeTeamsAppInstallation';
import {serializeTeamsAsyncOperation} from './serializeTeamsAsyncOperation';
import {serializeTeamsTemplate} from './serializeTeamsTemplate';
import {serializeTeamSummary} from './serializeTeamSummary';
import {serializeTeamTemplateDefinition} from './serializeTeamTemplateDefinition';
import {serializeTeamworkTag} from './serializeTeamworkTag';
import {serializeUser} from './serializeUser';
import {TeamSpecialization} from './teamSpecialization';
import {TeamVisibilityType} from './teamVisibilityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeam(writer: SerializationWriter, team: Team | undefined = {}) : void {
        serializeEntity(writer, team)
            writer.writeCollectionOfObjectValuesFromMethod("allChannels", team.allChannels as any, serializeChannel);
            writer.writeCollectionOfObjectValuesFromMethod("channels", team.channels as any, serializeChannel);
            writer.writeStringValue("classification", team.classification);
            writer.writeDateValue("createdDateTime", team.createdDateTime);
            writer.writeStringValue("description", team.description);
            writer.writeObjectValueFromMethod("discoverySettings", team.discoverySettings as any, serializeTeamDiscoverySettings);
            writer.writeStringValue("displayName", team.displayName);
            writer.writeObjectValueFromMethod("funSettings", team.funSettings as any, serializeTeamFunSettings);
            writer.writeObjectValueFromMethod("group", team.group as any, serializeGroup);
            writer.writeObjectValueFromMethod("guestSettings", team.guestSettings as any, serializeTeamGuestSettings);
            writer.writeCollectionOfObjectValuesFromMethod("incomingChannels", team.incomingChannels as any, serializeChannel);
            writer.writeCollectionOfObjectValuesFromMethod("installedApps", team.installedApps as any, serializeTeamsAppInstallation);
            writer.writeStringValue("internalId", team.internalId);
            writer.writeBooleanValue("isArchived", team.isArchived);
            writer.writeBooleanValue("isMembershipLimitedToOwners", team.isMembershipLimitedToOwners);
            writer.writeCollectionOfObjectValuesFromMethod("members", team.members as any, serializeConversationMember);
            writer.writeObjectValueFromMethod("memberSettings", team.memberSettings as any, serializeTeamMemberSettings);
            writer.writeObjectValueFromMethod("messagingSettings", team.messagingSettings as any, serializeTeamMessagingSettings);
            writer.writeCollectionOfObjectValuesFromMethod("operations", team.operations as any, serializeTeamsAsyncOperation);
            writer.writeCollectionOfObjectValuesFromMethod("owners", team.owners as any, serializeUser);
            writer.writeCollectionOfObjectValuesFromMethod("permissionGrants", team.permissionGrants as any, serializeResourceSpecificPermissionGrant);
            writer.writeObjectValueFromMethod("photo", team.photo as any, serializeProfilePhoto);
            writer.writeObjectValueFromMethod("primaryChannel", team.primaryChannel as any, serializeChannel);
            writer.writeObjectValueFromMethod("schedule", team.schedule as any, serializeSchedule);
            writer.writeEnumValue<TeamSpecialization>("specialization", team.specialization);
            writer.writeObjectValueFromMethod("summary", team.summary as any, serializeTeamSummary);
            writer.writeCollectionOfObjectValuesFromMethod("tags", team.tags as any, serializeTeamworkTag);
            writer.writeObjectValueFromMethod("template", team.template as any, serializeTeamsTemplate);
            writer.writeObjectValueFromMethod("templateDefinition", team.templateDefinition as any, serializeTeamTemplateDefinition);
            writer.writeStringValue("tenantId", team.tenantId);
            writer.writeEnumValue<TeamVisibilityType>("visibility", team.visibility);
            writer.writeStringValue("webUrl", team.webUrl);
}
