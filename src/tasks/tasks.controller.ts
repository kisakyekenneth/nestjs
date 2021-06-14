import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  //Injecting controller
  //And having constructor of property taskService of type TaskService
  constructor(private taskService: TasksService) {}
}
