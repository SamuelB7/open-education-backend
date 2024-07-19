import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CourseModulesController } from './course-modules.controller';
import { CourseModulesService } from './course-modules.service';

@Module({
    controllers: [CourseModulesController],
    providers: [CourseModulesService, PrismaService],
})
export class CourseModulesModule { }
