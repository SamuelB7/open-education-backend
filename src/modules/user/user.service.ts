import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        private prismService: PrismaService,
    ) { }

    async create(createUserDto: CreateUserDto) {
        return await this.prismService.user.create({
            data: {
                ...createUserDto
            },
        });
    }

    async findAll() {
        return await this.prismService.user.findMany();
    }

    async findOne(id: string) {
        return await this.prismService.user.findUnique({
            where: {
                id
            }
        });
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        return await this.prismService.user.update({
            where: {
                id
            },
            data: {
                ...updateUserDto
            }
        });
    }

    async remove(id: string) {
        return await this.prismService.user.delete({
            where: {
                id
            }
        });
    }
}
