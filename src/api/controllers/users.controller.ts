import {
  JsonController, Param, Body, Get, Post, Put, Delete,
} from 'routing-controllers';
import {UsersModel} from 'src/api/models/users.model';
import {UsersService} from 'src/api/services/users.service';
import {LoggerDecorator, LoggerInterface} from 'src/decorators/logger';
import {CreateUserBody} from 'src/api/validator/users.validator';

@JsonController()
export class UsersController {
  constructor(
    private usersService: UsersService,
    @LoggerDecorator(__filename) private log: LoggerInterface,
  ) { }

  @Get('/users')
  getAll(): Promise<UsersModel[]> {
    this.log.info('CALLED: This action returns all users');
    return this.usersService.find();
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number): string {
    return `This action returns user #${id}`;
  }

  @Post('/users')
  post(@Body() user: CreateUserBody): string {
    return 'Saving user...';
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: unknown): string {
    return 'Updating a user...';
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number): string {
    return 'Removing user...';
  }
}
