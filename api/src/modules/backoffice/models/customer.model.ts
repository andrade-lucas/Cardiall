import { User } from 'src/modules/backoffice/models/user.model';

export class Customer {
    constructor(
        public name: string,
        public document: string,
        public email: string,
        public user: User,
    ) { }
}
