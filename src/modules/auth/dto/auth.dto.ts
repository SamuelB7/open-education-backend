import { ApiProperty } from "@nestjs/swagger";


export class AuthDto {
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
}