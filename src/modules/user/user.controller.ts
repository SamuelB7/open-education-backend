import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @ApiOperation({ summary: 'Create a new user' })
    @ApiBody({
        description: 'User data',
        type: CreateUserDto
    })
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @ApiOperation({ summary: 'Get all users' })
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @ApiOperation({ summary: 'Get a user by ID' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @ApiOperation({ summary: 'Update a user by ID' })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @ApiOperation({ summary: 'Delete a user by ID' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(id);
    }
}
