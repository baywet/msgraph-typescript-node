import {OpenShiftItem, ScheduleEntity, ShiftItem, TimeOffItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleEntity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleEntity();
}
