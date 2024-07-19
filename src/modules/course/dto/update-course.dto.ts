import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    @ApiProperty({
        description: 'Course name',
        type: String,
    })
    name: string;

    @ApiProperty({
        description: 'Course description',
        type: String,
    })
    description: string;
}
