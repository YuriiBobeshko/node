import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return this.usersService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(@Body() updateUserDto: UpdateUserDto, @Param('id') id) {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch(':id')
  archive(@Param('id') id) {
    return this.usersService.archive(id);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.usersService.delete(id);
  }
}
