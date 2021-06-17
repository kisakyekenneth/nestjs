import { Body, Controller, Get, Post } from '@nestjs/common';

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
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    //Retrieve the post data using the decorator @Body and store results into body variable
    return this.taskService.createTask(title, description);
  }
}
