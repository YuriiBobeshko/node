import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDtoDto } from './dto/create-group.dto';

@Controller('api/groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get()
  getAll() {
    return this.groupsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return this.groupsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createGroupDto: CreateGroupDtoDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Put(':id')
  update(@Body() updateGroupDto: CreateGroupDtoDto, @Param('id') id) {
    return this.groupsService.update(id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.groupsService.delete(id);
  }
}
