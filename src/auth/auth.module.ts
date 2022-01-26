import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  controllers: [AuthController],
  providers: [JwtStrategyService]
})
export class AuthModule {}
