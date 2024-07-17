import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/enums/user.enum';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: 'User email',
        type: String,
        required: true,
    })
    email: string;

    @ApiProperty({
        description: 'User password',
        type: String,
        required: false,
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
