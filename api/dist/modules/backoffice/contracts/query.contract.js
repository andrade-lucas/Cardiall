"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const flunt_1 = require("src/utils/flunt");
let QueryContract = class QueryContract {
    validate(model) {
        const flunt = new flunt_1.Flunt();
        if (!model.query)
            model.query = {};
        flunt.isGreaterThan(model.take, 1000, 'Sua query não pode retornar mais que 1000 registros');
        this.errors = flunt.errors;
        return flunt.isValid();
    }
};
QueryContract = __decorate([
    common_1.Injectable()
], QueryContract);
exports.QueryContract = QueryContract;
//# sourceMappingURL=query.contract.js.map