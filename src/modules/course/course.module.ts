import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CourseModulesModule } from './course-modules/course-modules.module';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
    controllers: [CourseController],
    providers: [CourseService, PrismaService],
    imports: [CourseModulesModule],
})
export class CourseModule { }
