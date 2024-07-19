import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
    constructor(
        private prismService: PrismaService,
    ) { }

    async create(createCourseDto: CreateCourseDto) {
        return await this.prismService.course.create({
            data: createCourseDto,
        })
    }

    async findAll() {
        return await this.prismService.course.findMany();
    }

    async findOne(id: string) {
        return await this.prismService.course.findUnique({
            where: { id }
        })
    }

    async update(id: string, updateCourseDto: UpdateCourseDto) {
        return await this.prismService.course.update({
            where: { id },
            data: updateCourseDto,
        })
    }

    async remove(id: string) {
        return await this.prismService.course.delete({
            where: { id }
        })
    }
}
