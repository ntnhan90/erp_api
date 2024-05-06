import { Injectable } from '@nestjs/common';
import { UsersService } from '@modules/users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) {}

    //user name + password
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByEmail(username);
        if(user){
           // const isValid = this.usersService.isValidPassword(pass, user.password);
           // if(isValid === true){
                return user;
           // }

        }else{
            return null;
        }
        
        return null;
    }
}
