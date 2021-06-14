import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  //If we make tasks(variable) public, it means other places in our application can accidentally change it yet we don't know
  private tasks = []; //Array for storage

  getTasks() {
    // The tasks array is exposed on through the message to read from it
    return this.tasks;
  }
}
