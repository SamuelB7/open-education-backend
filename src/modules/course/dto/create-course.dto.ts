import { ApiProperty } from "@nestjs/swagger";

export class CreateCourseDto {

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
