import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from 'src/module/user/user.service';

@Injectable()
export class RefreshGuard implements CanActivate {

  constructor(
    private userService: UserService
  ){}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization }: {authorization: string} = request.headers;
    try{
      const refrehToken = authorization.split(" ")[1];
      
      await this.userService.checkCredencialsToJwt(refrehToken, true);
      return true
    }catch(erro){
      return false
    }
  }
}
