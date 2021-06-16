import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  //If we make tasks(variable) public, it means other places in our application can accidentally change it yet we don't know
  private tasks: Task[] = []; //Variable tasks is of datatype Task[] which is exported

  //Method once called, returns an array of Tasks
  getTasks(): Task[] {
    // The tasks array is exposed on through the message to read from it
    return this.tasks;
  }
}
