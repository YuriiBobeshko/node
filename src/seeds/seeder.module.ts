import { Users } from '../users/users.model';
import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { SeederRepository } from './seeder.repository';
import { SeederService } from './seeder.service';

const REPOS = [SeederRepository, { provide: Users.name, useValue: Users }];

@Module({
  imports: [],
  providers: [SeederService, ...REPOS],
  exports: [SeederService, ...REPOS],
})
export class SeederModule implements OnApplicationBootstrap {
  constructor(private readonly seederService: SeederService) {}

  async onApplicationBootstrap(): Promise<any> {
    return this.seederService.startSeedsUsers();
  }
}
