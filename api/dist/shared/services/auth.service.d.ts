import { JwtService } from '@nestjs/jwt';
import { AccountService } from 'src/modules/backoffice/services/account.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
export declare class AuthService {
    private readonly accountService;
    private readonly jwtService;
    constructor(accountService: AccountService, jwtService: JwtService);
    createToken(document: any, email: any, image: any, roles: string[]): Promise<string>;
    validateUser(payload: JwtPayload): Promise<any>;
}
