import { ApiProperty } from "@nestjs/swagger";

export class Course {
    @ApiProperty({
        description: 'Course ID',
        type: String,
    })
    id: string;

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

    @ApiProperty({
        description: 'Course created at',
        type: Date,
    })
    createdAt: Date;

    @ApiProperty({
        description: 'Course updated at',
        type: Date,
    })
    updatedAt: Date;
}
