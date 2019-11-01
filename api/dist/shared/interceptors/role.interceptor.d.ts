import { NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class RoleInterceptor implements NestInterceptor {
    roles: string[];
    constructor(roles: string[]);
    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any>;
}
