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
const md5_typescript_1 = require("md5-typescript");
const customer_service_1 = require("src/modules/backoffice/services/customer.service");
const customer_model_1 = require("src/modules/backoffice/models/customer.model");
const query_dto_1 = require("src/modules/backoffice/dtos/query.dto");
const validator_interceptor_1 = require("src/modules/backoffice/interceptors/validator.interceptor");
const create_customer_contract_1 = require("src/modules/backoffice/contracts/customer/create-customer.contract");
const result_dto_1 = require("src/modules/backoffice/dtos/result.dto");
const account_service_1 = require("src/modules/backoffice/services/account.service");
const user_model_1 = require("src/modules/backoffice/models/user.model");
const create_customer_dto_1 = require("src/modules/backoffice/dtos/customer/create-customer.dto");
const query_contract_1 = require("src/modules/backoffice/contracts/query.contract");
const update_customer_contract_1 = require("../contracts/customer/update-customer.contract");
const update_customer_dto_1 = require("../dtos/customer/update-customer.dto");
let CustomerController = class CustomerController {
    constructor(customerService, accountService) {
        this.customerService = customerService;
        this.accountService = accountService;
    }
    post(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const password = yield md5_typescript_1.Md5.init(`${model.password}${process.env.SALT_KEY}`);
                const user = yield this.accountService.create(new user_model_1.User(model.document, password, ['user'], false));
                const customer = new customer_model_1.Customer(model.name, model.document, model.email, user);
                yield this.customerService.create(customer);
                return new result_dto_1.ResultDto(null, true, model, null);
            }
            catch (error) {
                throw new common_1.HttpException(new result_dto_1.ResultDto('Não foi possível realizar seu cadastro', false, null, error), common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
    update(document, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.customerService.update(document, model);
                return new result_dto_1.ResultDto(null, true, model, null);
            }
            catch (error) {
                throw new common_1.HttpException(new result_dto_1.ResultDto('Não foi possível atualizar seus dados', false, null, error), common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield this.customerService.findAll();
            return new result_dto_1.ResultDto(null, true, customers, null);
        });
    }
    get(document) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield this.customerService.find(document);
            return new result_dto_1.ResultDto(null, true, customer, null);
        });
    }
    query(model) {
        return __awaiter(this, void 0, void 0, function* () {
            const customers = yield this.customerService.query(model);
            return new result_dto_1.ResultDto(null, true, customers, null);
        });
    }
};
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(new validator_interceptor_1.ValidatorInterceptor(new create_customer_contract_1.CreateCustomerContract())),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "post", null);
__decorate([
    common_1.Put(':document'),
    common_1.UseInterceptors(new validator_interceptor_1.ValidatorInterceptor(new update_customer_contract_1.UpdateCustomerContract())),
    __param(0, common_1.Param('document')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_customer_dto_1.UpdateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "update", null);
__decorate([
    common_1.Get(),
    common_1.UseInterceptors(common_1.CacheInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getAll", null);
__decorate([
    common_1.Get(':document'),
    __param(0, common_1.Param('document')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "get", null);
__decorate([
    common_1.Post('query'),
    common_1.UseInterceptors(new validator_interceptor_1.ValidatorInterceptor(new query_contract_1.QueryContract())),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "query", null);
CustomerController = __decorate([
    common_1.Controller('v1/customers'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService,
        account_service_1.AccountService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map