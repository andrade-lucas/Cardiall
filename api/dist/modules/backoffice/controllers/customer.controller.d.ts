import { CustomerService } from 'src/modules/backoffice/services/customer.service';
import { QueryDto } from 'src/modules/backoffice/dtos/query.dto';
import { ResultDto } from 'src/modules/backoffice/dtos/result.dto';
import { AccountService } from 'src/modules/backoffice/services/account.service';
import { CreateCustomerDto } from 'src/modules/backoffice/dtos/customer/create-customer.dto';
import { UpdateCustomerDto } from '../dtos/customer/update-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    private readonly accountService;
    constructor(customerService: CustomerService, accountService: AccountService);
    post(model: CreateCustomerDto): Promise<ResultDto>;
    update(document: any, model: UpdateCustomerDto): Promise<ResultDto>;
    getAll(): Promise<ResultDto>;
    get(document: any): Promise<ResultDto>;
    query(model: QueryDto): Promise<ResultDto>;
}
