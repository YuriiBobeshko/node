export type Permissions = 'read' | 'write' | 'delete' | 'share' | 'upload_file';

export interface NewGroup {
  name: string;
  permissions: Permissions[];
}

export interface NewGroupSeed extends NewGroup {
  id: number;
}
