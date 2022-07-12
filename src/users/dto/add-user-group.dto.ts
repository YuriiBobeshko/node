import { ID } from '../../types/base';

export interface AddUserGroupDto {
  groupId: ID;
  userIds: ID[];
}
