import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCourseModuleDto } from './dto/create-course-module.dto';
import { UpdateCourseModuleDto } from './dto/update-course-module.dto';

@Injectable()
export class CourseModulesService {
    constructor(
        private prismaService: PrismaService
    ) { }

    async create(createCourseModuleDto: CreateCourseModuleDto) {
        return await this.prismaService.courseModule.create({
            data: createCourseModuleDto,
        })
    }

    async findAll() {
        return await this.prismaService.courseModule.findMany();
    }

    async findOne(id: string) {
        return await this.prismaService.courseModule.findUnique({
            where: { id }
        })
    }

    async update(id: string, updateCourseModuleDto: UpdateCourseModuleDto) {
        return await this.prismaService.courseModule.update({
            where: { id },
            data: updateCourseModuleDto,
        })
    }

    async remove(id: string) {
        return await this.prismaService.courseModule.delete({
            where: { id }
        })
    }
}
