import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserGatewayAdapterMemory } from './gateways/user-gateway-adapter-memory'
import { UserGatewayAdapterTypeORM } from './gateways/user-gateway-adapter-typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntityTypeORM } from './entities/user-typeorm.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntityTypeORM]),
    JwtModule
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
  exports: [
    UserService
  ]
})
export class UserModule {}
