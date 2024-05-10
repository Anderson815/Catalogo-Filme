import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserGatewayAdapterMemory } from './gateways/user-gateway-adapter-memory'
import { UserGatewayAdapterTypeORM } from './gateways/user-gateway-adapter-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntityTypeORM } from './entities/user-typeorm.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntityTypeORM])
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserGatewayAdapterMemory,
    UserGatewayAdapterTypeORM,
    {
      provide: 'UserGatewayBDMemory',
      useExisting: UserGatewayAdapterMemory
    },
    {
      provide: 'UserGatewayBDTypeORM',
      useExisting: UserGatewayAdapterTypeORM
    }
  ],
})
export class UserModule {}
