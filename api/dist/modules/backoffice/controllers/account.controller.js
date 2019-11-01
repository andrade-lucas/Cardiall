"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("src/shared/guards/auth.guard");
const auth_service_1 = require("src/shared/services/auth.service");
const authenticate_dto_1 = require("../dtos/account/authenticate.dto");
const reset_password_dto_1 = require("../dtos/account/reset-password.dto");
const change_password_dto_1 = require("../dtos/account/change-password.dto");
const account_service_1 = require("../services/account.service");
const result_dto_1 = require("../dtos/result.dto");
const guid_typescript_1 = require("guid-typescript");
let AccountController = class AccountController {
    constructor(accountService, authService) {
        this.accountService = accountService;
        this.authService = authService;
    }
    authenticate(model) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield this.accountService.authenticate(model.username, model.password);
            if (!customer)
                throw new common_1.HttpException(new result_dto_1.ResultDto('Usuário ou senha inválidos', false, null, null), common_1.HttpStatus.UNAUTHORIZED);
            if (!customer.user.active)
                throw new common_1.HttpException(new result_dto_1.ResultDto('Usuário inativo', false, null, null), common_1.HttpStatus.UNAUTHORIZED);
            const token = yield this.authService.createToken(customer.document, customer.email, '', customer.user.roles);
            return new result_dto_1.ResultDto(null, true, token, null);
        });
    }
    resetPassword(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const password = guid_typescript_1.Guid.create().toString().substring(0, 8).replace('-', '');
                yield this.accountService.update(model.document, { password: password });
                return new result_dto_1.ResultDto('Uma nova senha foi enviada para seu E-mail', true, null, null);
            }
            catch (error) {
                throw new common_1.HttpException(new result_dto_1.ResultDto('Não foi possível restaurar sua senha', false, null, error), common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
    changePassword(request, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.accountService.update(request.user.document, { password: model.newPassword });
                return new result_dto_1.ResultDto('Sua senha foi alterada com sucesso!', true, null, null);
            }
            catch (error) {
                throw new common_1.HttpException(new result_dto_1.ResultDto('Não foi possível alterar sua senha', false, null, error), common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
    refreshToken(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.authService.createToken(request.user.document, request.user.email, request.user.image, request.user.user.roles);
            return new result_dto_1.ResultDto(null, true, token, null);
        });
    }
};
__decorate([
    common_1.Post('authenticate'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authenticate_dto_1.AuthenticateDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "authenticate", null);
__decorate([
    common_1.Post('reset-password'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "resetPassword", null);
__decorate([
    common_1.Post('change-password'),
    common_1.UseGuards(auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "changePassword", null);
__decorate([
    common_1.Post('refresh'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "refreshToken", null);
AccountController = __decorate([
    common_1.Controller('v1/accounts'),
    __metadata("design:paramtypes", [account_service_1.AccountService,
        auth_service_1.AuthService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map