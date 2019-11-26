import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateToDoDto } from './dtos/create-toDo.dto';
import { UpdateToDoDto } from './dtos/update-toDo.dto';
import { ToDoService } from './toDo.service';
import { ToDo } from './interfaces/toDo.interface';

@Controller('toDo')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  create(@Body() createToDo: CreateToDoDto) {
    return this.toDoService.create(createToDo);
  }
  @Get(':id')
  findToDo(@Param('id') toDoId: string) {
    return this.toDoService.findToDo(toDoId);
  }
  @Delete(':id')
  delete(@Param('id') toDoId: string) {
    return this.toDoService.delete(toDoId);
  }
  @Get()
  findAll(): Promise<ToDo[]> {
    return this.toDoService.findAll();
  }
  @Put(':id')
  update(@Param('id') toDoId: string, @Body() updateToDo: UpdateToDoDto) {
    return this.toDoService.update(toDoId, updateToDo);
  }
}
