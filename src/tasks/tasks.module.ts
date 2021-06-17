import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}

// git branch -m develop main
// git fetch origin
// git branch -u origin/main main
// git remote set-head origin -a
