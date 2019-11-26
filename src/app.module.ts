import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoModule } from './toDos/toDo.module';

@Module({
  imports: [
    ToDoModule,
    MongooseModule.forRoot('mongodb+srv://admin:170096@cluster0-ulutz.mongodb.net/mixin?retryWrites=true&w=majority', { useNewUrlParser: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
