import { Model } from 'mongoose';
import { User } from 'src/modules/backoffice/models/user.model';
import { Customer } from '../models/customer.model';
export declare class AccountService {
    private readonly customerModel;
    private readonly userModel;
    constructor(customerModel: Model<Customer>, userModel: Model<User>);
    create(data: User): Promise<User>;
    findByUsername(username: any): Promise<User>;
    update(username: string, data: any): Promise<User>;
    authenticate(username: any, password: any): Promise<Customer>;
}
