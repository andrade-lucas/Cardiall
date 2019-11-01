"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryDto {
    constructor(query, fields, skip = 0, take = 25) {
        this.query = query;
        this.fields = fields;
        this.skip = skip;
        this.take = take;
    }
}
exports.QueryDto = QueryDto;
//# sourceMappingURL=query.dto.js.map