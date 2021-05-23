import {
  Controller, Param, Body, Get, Post, Put, Delete,
} from 'routing-controllers';
import {Logger} from 'lib/logger';

const log = new Logger(__filename);

@Controller()
export class UsersController {
  @Get('/users')
  getAll(): string {
    log.info('CALLED: This action returns all users');
    return 'This action returns all users';
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number): string {
    return `This action returns user #${id}`;
  }

  @Post('/users')
  post(@Body() user: unknown): string {
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
