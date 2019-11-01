import { User } from 'src/modules/backoffice/models/user.model';
export declare class Customer {
    name: string;
    document: string;
    email: string;
    user: User;
    constructor(name: string, document: string, email: string, user: User);
}
