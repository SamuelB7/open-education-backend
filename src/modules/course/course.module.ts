import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { CourseModulesModule } from './course-modules/course-modules.module';

@Module({
    controllers: [CourseController],
    providers: [CourseService, PrismaService],
    imports: [CourseModulesModule],
})
export class CourseModule { }
