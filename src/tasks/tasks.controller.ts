import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  //taskService is a parameter of type TasksService. It an object to TasksService
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }
}
