import { Contract } from 'src/modules/backoffice/contracts/contract';
import { UpdateCustomerDto } from 'src/modules/backoffice/dtos/customer/update-customer.dto';
export declare class UpdateCustomerContract implements Contract {
    errors: any[];
    validate(model: UpdateCustomerDto): boolean;
}
