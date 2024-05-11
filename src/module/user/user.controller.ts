import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { RefreshGuard } from 'src/guards/refresh/refresh.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() creaeUserDto: CreateUserDto){
    return this.userService.create(creaeUserDto)
  }

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
