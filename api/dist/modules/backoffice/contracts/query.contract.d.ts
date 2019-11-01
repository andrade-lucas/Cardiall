import { Contract } from 'src/modules/backoffice/contracts/contract';
import { QueryDto } from 'src/modules/backoffice/dtos/query.dto';
export declare class QueryContract implements Contract {
    errors: any[];
    validate(model: QueryDto): boolean;
}
