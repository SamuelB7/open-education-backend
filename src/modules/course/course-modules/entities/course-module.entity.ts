import { ApiProperty } from "@nestjs/swagger";

export class CourseModule {
    @ApiProperty({
        description: 'Course module ID',
        type: String,
    })
    id: string;

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

    @ApiProperty({
        description: 'Course module created at',
        type: Date,
    })
    createdAt: Date;

    @ApiProperty({
        description: 'Course module updated at',
        type: Date,
    })
    updatedAt: Date;
}
