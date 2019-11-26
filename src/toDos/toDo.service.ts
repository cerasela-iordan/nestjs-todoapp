import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateToDoDto } from './dtos/create-toDo.dto';
import { UpdateToDoDto } from './dtos/update-toDo.dto';
import { ToDo } from './interfaces/toDo.interface';
@Injectable()
export class ToDoService {
  constructor(@InjectModel('ToDo') private readonly toDoModel: Model<ToDo>) { }

  async create(createToDo: CreateToDoDto): Promise<string> {
    const createdToDo = new this.toDoModel(createToDo);
    const result = await createdToDo.save();
    return result.id;
  }

  async findAll() {
    const toDos = await this.toDoModel.find();
    return toDos;
  }

  async update(toDoId: string, updateDto: UpdateToDoDto) {
    const retrievedToDo = await this.findToDo(toDoId);
    if (updateDto.checked) {
      retrievedToDo.checked = updateDto.checked;
    }
    if (updateDto.text) {
      retrievedToDo.text = updateDto.text;
    }
    return await retrievedToDo.save();
  }
  async findToDo(toDoId: string) {
    const retrievedToDo = await this.toDoModel.findById(toDoId);
    if (!retrievedToDo) {
      throw new NotFoundException('Could not find toDo item!');
    }
    return retrievedToDo;
  }
  async delete(toDoId: string) {
    const retrievedToDo = await this.findToDo(toDoId);
    return await this.toDoModel.deleteOne(retrievedToDo);
  }
}

