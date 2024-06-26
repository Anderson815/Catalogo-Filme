import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MovieGatewayAdapterMemory } from './gateways/movie-gateway-adapter-memory';
import { MovieEntityTypeORM } from './entities/movie-typeorm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieGatewayAdapterTypeORM } from './gateways/movie-gateway-adapter-typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieEntityTypeORM]),
    UserModule
  ],
  controllers: [MovieController],
  providers: [
    MovieService,
    MovieGatewayAdapterMemory,
    MovieGatewayAdapterTypeORM,
    {
      provide: 'MovieGatewayBDMemory',
      useExisting: MovieGatewayAdapterMemory 
    },
    {
      provide: 'MovieGatewayBDTypeOrm',
      useExisting: MovieGatewayAdapterTypeORM 
    },
  ],
})
export class MovieModule {}
