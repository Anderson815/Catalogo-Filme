import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from "dotenv";

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  
  const config = new DocumentBuilder()
    .setTitle('Catálogo de Filme')
    .setDescription(
      `O Catálogo de filme é um projeto simples que tem como o objetivo resumir os conhecimentos do autor em um CRUD simples utilizando o NestJS.<br> 
      Sequência para rodar e testar a aplicação:
       <ol>
        <li>Criar um Usuário</li>
        <li>Logar com o Usuário cadatrado para obter o token JWT de acesso e o refresh Token</li>
        <li>Utilizar o token de acesso para utilizar os demais endpoints de filme</li>
       </ol>
       Caso o token de acesso expire é necessário utilizar o refresh token para gerar um novo token de acesso.<br><br>
       Principais ferramentas para o desenvolvimento e técnicas:
       <ul>
        <li>TypeScript(TS)</li>
        <li>NestJS</li>
        <li>TypeORM</li>
        <li>Swagger</li>
        <li>Docker</li>
        <li>PostgreSQL</li>
        <li>JWT</li>
        <li>Arquitetura Hexagonal</li>
        <li>Postman</li>
       </ul>
      `,
    )
    .setVersion('1.0')
    .setContact('Anderson Correia de Souza', 'https://www.linkedin.com/in/anderson-correia/', 'anderson_souza33@outlook.com.br')
    .addBearerAuth()
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(`api`, app, document);

    await app.listen(process.env.PORT);
}
bootstrap();
