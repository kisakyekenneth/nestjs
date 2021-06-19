import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  //taskService is a parameter of type TasksService. It an object to TasksService
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    //Since we using model which is of Array type, the required method from service returns an array so this must also return an array.
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() createTaskdto: CreateTaskDto): Task {
    //Modifying our code to be able to capture data in-form of DTOs passed as parameters in the tables
    return this.taskService.createTask(createTaskdto);
  }
}
