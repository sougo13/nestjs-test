import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {

  constructor(private userService: UserService){}

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status:200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto){
    return this.userService.createUser(userDto)
  }

}
