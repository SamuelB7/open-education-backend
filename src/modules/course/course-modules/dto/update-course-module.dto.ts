import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCourseModuleDto } from './create-course-module.dto';

export class UpdateCourseModuleDto extends PartialType(CreateCourseModuleDto) {
    @ApiProperty({
        description: 'Course ID',
        type: String,
    })
    courseId: string;

    @ApiProperty({
        description: 'Course module name',
        type: String,
    })
    name: string;

    @ApiProperty({
        description: 'Course module content',
        type: String,
    })
    content: string;
}
