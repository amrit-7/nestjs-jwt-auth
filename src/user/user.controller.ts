import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
@Controller()
@UseGuards(AuthGuard('local'))
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/users')
  findAll() {
    return this.userService.findAll();
  }
}
