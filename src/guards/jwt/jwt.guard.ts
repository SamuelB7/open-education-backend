import { Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
        super();
    }

    getRequest(context: any) {
        const ctx = this.reflector.get('context', context.getHandler());
        return ctx.switchToHttp().getRequest();
    }

    handleRequest(err: any, user: any) {
        if (err || !user) {
            throw err || new Error('Unauthorized');
        }
        return user;
    }
}