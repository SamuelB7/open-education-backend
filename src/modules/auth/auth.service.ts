import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    async login() {
        return {
            message: 'Login success'
        };
    }

    async register() {
        return {
            message: 'Register success'
        };
    }
}
