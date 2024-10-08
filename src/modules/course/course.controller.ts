import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/decorators/roles-decorator';
import { UserRole } from 'src/enums/user.enum';
import { JwtGuard } from 'src/guards/jwt/jwt.guard';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@ApiTags('Course')
@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) { }

    @ApiOperation({ summary: 'Create a new course' })
    @UseGuards(JwtGuard)
    @Role(UserRole.ADMIN)
    @Post()
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto);
    }

    @ApiOperation({ summary: 'Get all courses' })
    @Get()
    findAll() {
        return this.courseService.findAll();
    }

    @ApiOperation({ summary: 'Get a course by ID' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.courseService.findOne(id);
    }

    @ApiOperation({ summary: 'Update a course by ID' })
    @UseGuards(JwtGuard)
    @Role(UserRole.ADMIN)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
        return this.courseService.update(id, updateCourseDto);
    }

    @ApiOperation({ summary: 'Delete a course by ID' })
    @UseGuards(JwtGuard)
    @Role(UserRole.ADMIN)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.courseService.remove(id);
    }
}
