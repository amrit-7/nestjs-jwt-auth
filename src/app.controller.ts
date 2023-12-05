import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './auth/role.guard';
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): object {
    const token = this.authService.generateToken(req.user);
    console.log(token);
    return { token: token };
  }
  @Get('/ceo')
  @UseGuards(AuthGuard('jwt'), new RoleGuard('CEO'))
  getCeo(@Request() req, @Response() res): string {
    return res.send('This is CEO Secret page');
  }
}
