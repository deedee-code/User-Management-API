import { Controller, Get, Body, Put, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from '../auth/dto/auth.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.usersService.update(id, data);
  }
}
