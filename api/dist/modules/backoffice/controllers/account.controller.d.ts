import { AuthService } from "src/shared/services/auth.service";
import { AuthenticateDto } from "../dtos/account/authenticate.dto";
import { ResetPasswordDto } from "../dtos/account/reset-password.dto";
import { ChangePasswordDto } from "../dtos/account/change-password.dto";
import { AccountService } from "../services/account.service";
export declare class AccountController {
    private accountService;
    private authService;
    constructor(accountService: AccountService, authService: AuthService);
    authenticate(model: AuthenticateDto): Promise<any>;
    resetPassword(model: ResetPasswordDto): Promise<any>;
    changePassword(request: any, model: ChangePasswordDto): Promise<any>;
    refreshToken(request: any): Promise<any>;
}
