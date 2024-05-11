import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from 'src/module/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService
  ){}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>{

    const request = context.switchToHttp().getRequest();
    const { authorization }: {authorization: string} = request.headers;
    try{
      const token = authorization.split(" ")[1];
      
      await this.userService.checkCredencialsToJwt(token)
      return true
    }catch(erro){
      return false
    }
  }
}
