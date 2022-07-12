import { Users } from '../users/users.model';
import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { SeederRepository } from './seeder.repository';
import { SeederService } from './seeder.service';
import { Groups } from '../groups/groups.model';
import { UsersGroups } from '../users-groups/users-groups.model';

const REPOS = [
  SeederRepository,
  { provide: Users.name, useValue: Users },
  { provide: Groups.name, useValue: Groups },
  { provide: UsersGroups.name, useValue: UsersGroups },
];

@Module({
  imports: [],
  providers: [SeederService, ...REPOS],
  exports: [SeederService, ...REPOS],
})
export class SeederModule implements OnApplicationBootstrap {
  constructor(private readonly seederService: SeederService) {}

  async onApplicationBootstrap() {
    await this.seederService.startSeedsGroups();
    await this.seederService.startSeedsUsers();
    await this.seederService.startSeedsUsersGroups();
  }
}
