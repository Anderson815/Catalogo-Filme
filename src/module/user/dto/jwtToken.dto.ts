import { ApiProperty } from "@nestjs/swagger";

export class JwtTokenDto{
    @ApiProperty({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTUzOTAwODgsImV4cCI6MTcxNTM5MDE0OH0.loEIuQjFNJLhsFPsdHaf1i7cFr2OU1kWZoNtRPQBFhM',
        description:
          'Token JWT para a utilização dos demais endpoints privados da aplicação',
    })
    accessToken: string;

    @ApiProperty({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTUzOTAwODgsImV4cCI6MTcxNTM5MDIwOH0.0sAma9iz4HRt6F3SdkDZe0d4WKrrUTSV1ZChhNybm4U',
        description:
          'Refresh token é um token JWT utilizado apenas para gerar um novo token de acesso quando o token atual estiver expirado',
    })
    refreshToken: string;
}