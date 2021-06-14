import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
})
export class TasksModule {}

// git branch -m develop main
// git fetch origin
// git branch -u origin/main main
// git remote set-head origin -a
