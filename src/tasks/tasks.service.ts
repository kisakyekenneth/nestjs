import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid'; //Importing v4 as uuid meaning we assign v4 to varaible uuid
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

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
  createTask(createTaskDto: CreateTaskDto): Task {
    //Use the destructuring structure of ES6 to get title and description from DTO
    const { title, description } = createTaskDto;
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

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTask(id: string): void {
    //Filter tasks and only store the tasks not containing the sent id
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    //The the task that you want to update by id
    const task = this.getTaskById(id); //Re-using the getTaskById method to get Tasks given id,
    task.status = status;
    return task; //Return array of Tasks
  }

  //Upate description
  updateTaskDescription(id: string, description: string): Task {
    const task = this.getTaskById(id);
    task.description = description;
    return task;
  }

  getTaskWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    //Define a temporary array to hold the results
    let allTasks = this.getTasks(); //Store returned tasks
    if (status) {
      //filter through array of tasks with "task" as the iterator to find if task.status in array = querried status
      allTasks = allTasks.filter((task) => task.status === status); //Only those with status we are looking for will be stored.
    }
    if (search) {
      allTasks = allTasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true; //Includes used to filter and compare array with search string
        }
        return false;
      });
    }

    return allTasks;
  }
}
//"TaskStatus.OPEN" this makes it easy and possible to access the predefined enum,
//The enums are key value
