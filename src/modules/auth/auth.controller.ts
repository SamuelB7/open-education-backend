import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtGuard } from 'src/guards/jwt/jwt.guard';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(JwtGuard)
    @ApiOperation({ summary: 'Get current user' })
    @Get('me')
    async me(@Req() request: Request) {
        return request.user
    }

    @ApiOperation({ summary: 'Login' })
    @Post('login')
    async login(@Body() data: AuthDto) {
        return this.authService.login(data);
    }

    @ApiOperation({ summary: 'Register' })
    @Post('register')
    async register(@Body() data: CreateUserDto) {
        return this.authService.register(data);
    }
}
