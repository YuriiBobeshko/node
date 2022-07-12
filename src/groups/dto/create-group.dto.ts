import { Permissions } from '../../types/groups';

export class CreateGroupDtoDto {
  readonly name: string;
  readonly permissions: Permissions[];
}
