import {
  Controller, Param, Body, Get, Post, Put, Delete,
} from 'routing-controllers';

@Controller()
export class UserController {
  @Get('/users')
  getAll(): string {
    return 'This action returns all users';
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number): string {
    return `This action returns user #${id}`;
  }

  @Post('/users')
  post(@Body() user: any): string {
    return 'Saving user...';
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: any): string {
    return 'Updating a user...';
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number): string {
    return 'Removing user...';
  }
}
