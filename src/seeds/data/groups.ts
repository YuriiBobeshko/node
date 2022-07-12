import { NewGroupSeed } from '../../types/groups';

export const groups: NewGroupSeed[] = [
  {
    id: 1,
    name: 'admin',
    permissions: ['read', 'write', 'delete'],
  },
  {
    id: 2,
    name: 'user',
    permissions: ['read', 'write'],
  },
];
