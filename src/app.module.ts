import { Module } from '@nestjs/common';
import { MovieModule } from './module/movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user/user.module';
import { configBD } from './ormbdconfig'

@Module({
  imports: [
    MovieModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...configBD,
      autoLoadEntities: true,
      synchronize: true
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
