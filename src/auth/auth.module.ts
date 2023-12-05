import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JWTLocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: 'somesecret',
      signOptions: { expiresIn: '120s' },
    }),
  ],
  controllers: [],
  providers: [JWTLocalStrategy, AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
