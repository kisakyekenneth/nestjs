import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid'; //Importing v4 as uuid meaning we assign v4 to varaible uuid

@Injectable()
export class TasksService {
  //If we make tasks(variable) public, it means other places in our application can accidentally change it yet we don't know
  private tasks: Task[] = []; //Variable tasks is of datatype Task[] which is exported

  //Method once called, returns an array of Tasks
  getTasks(): Task[] {
    // The tasks array is exposed on through the message to read from it
    return this.tasks;
  }

  //Method to create tasks, it's of type Task (Not an array b'se we want it single).
  //Note "id" will be autoGeneranted and "Status" is predefined into the system
  createTask(title: string, description: string): Task {
    const task: Task = {
      //uuid an npm package used to auto-generate unique ids
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task; //Return task to controller
  }
}
//"TaskStatus.OPEN" this makes it easy and possible to access the predefined enum,
//The enums are key value
