import {AccessReviewInstance, AccessReviewInstanceDecisionItem, AccessReviewReviewer, AccessReviewScheduleDefinition, AccessReviewStage, ActivityHistoryItem, ActivityStatistics, AgreementAcceptance, AppConsentRequest, AppLogCollectionRequest, AppManagementPolicy, AppRoleAssignment, Approval, ApprovalStep, AssignmentFilterEvaluationStatusDetails, AssociatedTeamInfo, Attachment, AttachmentBase, AttachmentSession, AttendanceRecord, Authentication, AuthenticationMethod, BaseItem, BaseItemVersion, Bitlocker, BitlockerRecoveryKey, Calendar, CalendarGroup, CalendarPermission, CallTranscript, CanvasLayout, ChangeTrackedEntity, Channel, Chat, ChatMessage, ChatMessageHostedContent, ChatMessageInfo, ChecklistItem, ClaimsMappingPolicy, CloudPC, ColumnDefinition, ColumnLink, Command, Contact, ContactFolder, ContactMergeSuggestions, ContentType, Conversation, ConversationMember, ConversationThread, DataLossPreventionPolicy, DelegatedPermissionClassification, DetectedApp, Device, DeviceCategory, DeviceCompliancePolicyState, DeviceConfigurationState, DeviceEnrollmentConfiguration, DeviceLogCollectionResponse, DeviceManagementTroubleshootingEvent, DirectoryDefinition, DirectoryObject, DirectorySetting, DocumentSetVersion, Drive, DriveItem, DriveItemVersion, EducationalActivity, EmailAuthenticationMethod, Endpoint, EnrollmentConfigurationAssignment, Entity, Event, Extension, FederatedIdentityCredential, Fido2AuthenticationMethod, FieldValueSet, GovernanceInsight, Group, GroupLifecyclePolicy, HomeRealmDiscoveryPolicy, HorizontalSection, HorizontalSectionColumn, InferenceClassification, InferenceClassificationOverride, InformationProtection, InformationProtectionLabel, InformationProtectionPolicy, ItemActivity, ItemActivityOLD, ItemActivityStat, ItemAddress, ItemAnalytics, ItemEmail, ItemFacet, ItemInsights, ItemPatent, ItemPhone, ItemPublication, LanguageProficiency, LicenseDetails, LinkedResource, List, ListItem, ListItemVersion, LongRunningOperation, MailFolder, ManagedAppOperation, ManagedAppPolicy, ManagedAppRegistration, ManagedDevice, ManagedDeviceMobileAppConfigurationState, MeetingAttendanceReport, MeetingRegistrantBase, MeetingRegistration, MeetingRegistrationBase, MeetingRegistrationQuestion, Mention, Message, MessageRule, MicrosoftAuthenticatorAuthenticationMethod, MobileAppIntentAndState, MobileAppTroubleshootingEvent, MultiValueLegacyExtendedProperty, Notebook, Notification, OAuth2PermissionGrant, OfferShiftRequest, OfficeGraphInsights, Onenote, OnenoteEntityBaseModel, OnenoteEntityHierarchyModel, OnenoteEntitySchemaObjectModel, OnenoteOperation, OnenotePage, OnenoteResource, OnenoteSection, OnlineMeeting, OpenShift, OpenShiftChangeRequest, Operation, OutlookCategory, OutlookItem, OutlookTask, OutlookTaskFolder, OutlookTaskGroup, OutlookUser, PasswordAuthenticationMethod, PasswordlessMicrosoftAuthenticatorAuthenticationMethod, PayloadResponse, Permission, Person, PersonAnnotation, PersonAnnualEvent, PersonAward, PersonCertification, PersonInterest, PersonName, PersonWebsite, PhoneAuthenticationMethod, PinnedChatMessageInfo, PlannerAssignedToTaskBoardTaskFormat, PlannerBucket, PlannerBucketTaskBoardTaskFormat, PlannerDelta, PlannerGroup, PlannerPlan, PlannerPlanDetails, PlannerProgressTaskBoardTaskFormat, PlannerTask, PlannerTaskDetails, PlannerUser, PolicyBase, Post, Presence, PrintConnector, PrintDocument, Printer, PrinterBase, PrinterShare, PrintJob, PrintTask, PrintTaskDefinition, PrintTaskTrigger, Profile, ProfilePhoto, ProjectParticipation, RegionalAndLanguageSettings, Request, ResourceSpecificPermissionGrant, RichLongRunningOperation, Schedule, ScheduleChangeRequest, SchedulingGroup, ScopedRoleMembership, SectionGroup, SecurityBaselineSettingState, SecurityBaselineState, SensitivityLabel, SensitivityPolicySettings, ServicePrincipal, SharedInsight, SharedWithChannelTeamInfo, Shift, ShiftPreferences, SingleValueLegacyExtendedProperty, Site, SitePage, SkillProficiency, SoftwareOathAuthenticationMethod, StsPolicy, Subscription, SwapShiftsChangeRequest, Synchronization, SynchronizationJob, SynchronizationSchema, SynchronizationTemplate, Team, TeamInfo, TeamsApp, TeamsAppDefinition, TeamsAppIcon, TeamsAppInstallation, TeamsAsyncOperation, TeamsTab, TeamsTemplate, TeamTemplateDefinition, TeamworkBot, TeamworkHostedContent, TeamworkTag, TeamworkTagMember, TemporaryAccessPassAuthenticationMethod, ThreatAssessmentRequest, ThreatAssessmentResult, ThumbnailSet, TimeCard, TimeOff, TimeOffReason, TimeOffRequest, Todo, TodoTask, TodoTaskList, TokenIssuancePolicy, TokenLifetimePolicy, Trending, UsageRight, UsedInsight, User, UserAccountInformation, UserActivity, UserAnalytics, UserConfiguration, UserConsentRequest, UserInsightsSettings, UserScopeTeamsAppInstallation, UserSettings, UserTeamwork, VerticalSection, VirtualAppointment, WebAccount, WebPart, WindowsDeviceMalwareState, WindowsHelloForBusinessAuthenticationMethod, WindowsInformationProtectionDeviceRegistration, WindowsProtectionState, Workbook, WorkbookApplication, WorkbookChart, WorkbookChartAreaFormat, WorkbookChartAxes, WorkbookChartAxis, WorkbookChartAxisFormat, WorkbookChartAxisTitle, WorkbookChartAxisTitleFormat, WorkbookChartDataLabelFormat, WorkbookChartDataLabels, WorkbookChartFill, WorkbookChartFont, WorkbookChartGridlines, WorkbookChartGridlinesFormat, WorkbookChartLegend, WorkbookChartLegendFormat, WorkbookChartLineFormat, WorkbookChartPoint, WorkbookChartPointFormat, WorkbookChartSeries, WorkbookChartSeriesFormat, WorkbookChartTitle, WorkbookChartTitleFormat, WorkbookComment, WorkbookCommentReply, WorkbookFilter, WorkbookFunctions, WorkbookNamedItem, WorkbookOperation, WorkbookPivotTable, WorkbookTable, WorkbookTableColumn, WorkbookTableRow, WorkbookTableSort, WorkbookWorksheet, WorkbookWorksheetProtection, WorkPosition} from './index';
import {InformationProtection, InformationProtectionPolicySetting, Security, SensitivityLabel} from './security/';
import {Group, Relation, Set, Store, Term} from './termStore/';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entity();
}
