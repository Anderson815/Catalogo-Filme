import { BadRequestException, Body, ConflictException, Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { RefreshGuard } from 'src/guards/refresh/refresh.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestExceptionDto } from 'src/utils/swagger/bad-request.dto';
import { UserResponse } from './dto/user-response.dto';
import { JwtTokenDto } from './dto/jwtToken.dto';

@ApiTags('Users - Usuário da aplicação')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Cadastro do usuário para o consumo da API',
  })
  @ApiResponse({
    status: 201,
    description: 'Cadastro do usuário foi realizado com sucesso',
    type: UserResponse
  })
  @ApiResponse({
    status: 400,
    description:
      'Body incorreto, alguma propriedade foi passada de forma incorreta, o campo que deve ser ajustado será informado no body de retorno',
    type: BadRequestExceptionDto,
  })
  @ApiResponse({
    status: 409,
    description: 'O valor do campo email já está sendo utilizado',
    type: BadRequestExceptionDto,
  })
  @Post()
  createUser(@Body() creaeUserDto: CreateUserDto){
    return this.userService.create(creaeUserDto)
  }

  @ApiOperation({
    summary:
      'Login do usuário para a utilização da API. Se o login for feito com sucesso será retornado um token JWT para ser utilizado nas rotas privadas e também o refresh token para gerar um novo token quando esse for expirado',
  })
  @ApiResponse({
    status: 201,
    description: 'Login efetuado com sucesso',
    type: JwtTokenDto,
  })
  @ApiResponse({
    status: 400,
    description:
      'Body incorreto, alguma propriedade foi passada de forma incorreta, o campo que deve ser ajustado será informado no body de retorno',
    type: BadRequestExceptionDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Email ou password incorreto',
    type: BadRequestExceptionDto,
  })
  @Post('/auth')
  login(@Body() userLoginDto: UserLoginDto){
    return this.userService.auth(userLoginDto);
  }

  @Post('/refreshtoken')
  @UseGuards(RefreshGuard)
  refreshToken(){
    return this.userService.genereteRefreshToken();
  }
}
