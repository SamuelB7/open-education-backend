import { Controller } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    async login(data: AuthDto) {
        return this.authService.login(data);
    }

    async register(data: CreateUserDto) {
        return this.authService.register(data);
    }
}
