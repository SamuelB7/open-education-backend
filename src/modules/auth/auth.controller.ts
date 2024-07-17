import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    async login() {
        return this.authService.login();
    }

    async register() {
        return this.authService.register();
    }
}
