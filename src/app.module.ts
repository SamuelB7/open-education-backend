import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CourseModule } from './modules/course/course.module';

@Module({
  imports: [UserModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
