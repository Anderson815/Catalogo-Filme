import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MovieGatewayAdapterMemory } from './gateways/movie-gateway-adapter-memory';

@Module({
  controllers: [MovieController],
  providers: [
    MovieService,
    MovieGatewayAdapterMemory,
    {
      provide: 'MovieGatewayBD',
      useExisting: MovieGatewayAdapterMemory 
    }
  ],
})
export class MovieModule {}
