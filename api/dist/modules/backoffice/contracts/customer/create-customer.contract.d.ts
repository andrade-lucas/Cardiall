import { Contract } from 'src/modules/backoffice/contracts/contract';
import { CreateCustomerDto } from 'src/modules/backoffice/dtos/customer/create-customer.dto';
export declare class CreateCustomerContract implements Contract {
    errors: any[];
    validate(model: CreateCustomerDto): boolean;
}
