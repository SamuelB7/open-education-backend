import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { compare, hash } from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
    ) { }

    async login(data: { email: string, password: string }) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    email: data.email,
                }
            })

            if (!user) {
                throw new Error('Invalid email or password');
            }

            let passwordMatch = await compare(data.password, user.password);

            if (!passwordMatch) {
                throw new Error('Invalid email or password');
            }

            const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            }

            return {
                accessToken: this.jwt.sign(payload, {
                    expiresIn: '24h',
                    secret: process.env.JWT_SECRET,
                }),
            }
        } catch (error) {
            throw new Error('Internal server error');
        }
    }

    async register(data: CreateUserDto) {
        try {
            const passwordHash = await hash(data.password, 10);

            const user = await this.prisma.user.create({
                data: {
                    ...data
                }
            })

            const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            }

            return {
                accessToken: this.jwt.sign(payload, {
                    expiresIn: '24h',
                    secret: process.env.JWT_SECRET,
                }),
            }

        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new Error('Email already exists');
                }
            }
            throw new Error('Internal server error');
        }
    }
}
