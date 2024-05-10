import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserGatewayAdapterMemory } from './gateways/user-gateway-adapter-memory'

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserGatewayAdapterMemory,
    {
      provide: 'UserGatewayBDMemory',
      useExisting: UserGatewayAdapterMemory
    }
  ],
})
export class UserModule {}
