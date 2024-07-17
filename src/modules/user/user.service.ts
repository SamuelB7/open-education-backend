import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        private prismService: PrismaService,
    ) { }

    create(createUserDto: CreateUserDto) {
        return this.prismService.user.create({
            data: {
                ...createUserDto
            },
        });
    }

    findAll() {
        return this.prismService.user.findMany();
    }

    findOne(id: string) {
        return this.prismService.user.findUnique({
            where: {
                id
            }
        });
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.prismService.user.update({
            where: {
                id
            },
            data: {
                ...updateUserDto
            }
        });
    }

    remove(id: string) {
        return this.prismService.user.delete({
            where: {
                id
            }
        });
    }
}
