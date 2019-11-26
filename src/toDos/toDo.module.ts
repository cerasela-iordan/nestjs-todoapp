import { Module } from '@nestjs/common';
import { ToDoSchema } from './schemas/toDo.schema';
import { ToDoController } from './toDo.controller';
import { ToDoService } from './toDo.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'ToDo', schema: ToDoSchema }]),
    ],
    controllers: [ToDoController],
    providers: [ToDoService],
})
export class ToDoModule {

}
