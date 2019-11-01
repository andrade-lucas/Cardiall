import { Model } from 'mongoose';
import { Customer } from 'src/modules/backoffice/models/customer.model';
import { QueryDto } from 'src/modules/backoffice/dtos/query.dto';
import { UpdateCustomerDto } from '../dtos/customer/update-customer.dto';
export declare class CustomerService {
    private readonly model;
    constructor(model: Model<Customer>);
    create(data: Customer): Promise<Customer>;
    update(document: string, data: UpdateCustomerDto): Promise<Customer>;
    find(document: any): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    query(model: QueryDto): Promise<Customer[]>;
}
