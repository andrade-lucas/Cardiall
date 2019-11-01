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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const result_dto_1 = require("src/modules/backoffice/dtos/result.dto");
let RoleInterceptor = class RoleInterceptor {
    constructor(roles) {
        this.roles = roles;
    }
    intercept(context, call$) {
        const user = context.switchToHttp().getRequest().user;
        console.log(user);
        let hasRole = false;
        user.roles.forEach((role) => {
            if (this.roles.includes(role))
                hasRole = true;
        });
        if (!hasRole) {
            throw new common_1.HttpException(new result_dto_1.ResultDto('Acesso não autorizado', false, null, null), common_1.HttpStatus.UNAUTHORIZED);
        }
        return call$;
    }
};
RoleInterceptor = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Array])
], RoleInterceptor);
exports.RoleInterceptor = RoleInterceptor;
//# sourceMappingURL=role.interceptor.js.map