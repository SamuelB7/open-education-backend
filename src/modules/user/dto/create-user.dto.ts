import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "src/enums/user.enum";

export class CreateUserDto {
    @ApiProperty({
        description: 'User email',
        type: String,
        required: true,
    })
    email: string;

    @ApiProperty({
        description: 'User password',
        type: String,
        required: true,
    })
    password: string;

    @ApiProperty({
        description: 'User name',
        type: String,
        required: false,
    })
    name: string;

    @ApiProperty({
        enum: ['ADMIN', 'TEACHER', 'STUDENT'],
        description: 'User role',
        type: String,
        required: false,
    })
    role: UserRole;
}
