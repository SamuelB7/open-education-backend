import { ApiProperty } from "@nestjs/swagger";

export class CreateCourseModuleDto {
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
