import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { CourseModule } from './modules/course/course.module';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [UserModule, CourseModule, AuthModule, PrismaModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule { }
