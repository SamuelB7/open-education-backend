import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "src/enums/user.enum";

export class User {
    @ApiProperty({
        description: 'User ID',
        type: String,
    })
    id: string;

    @ApiProperty({
        description: 'User email',
        type: String,
    })
    email: string;

    @ApiProperty({
        description: 'User password',
        type: String,
    })
    password: string;

    @ApiProperty({
        description: 'User name',
        type: String,
    })
    name: string;

    @ApiProperty({
        description: 'User role',
        type: String,
    })
    role: UserRole;

    @ApiProperty({
        description: 'User created at',
        type: Date,
    })
    createdAt: Date;

    @ApiProperty({
        description: 'User updated at',
        type: Date,
    })
    updatedAt: Date;
}
