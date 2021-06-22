import { TaskStatus } from '../tasks.model';

//Used when one needs to search and filter tasks. Hence DTO for this is created
export class GetTasksFilterDto {
  status?: TaskStatus; //Note, the question mark means this is optional field
  search?: string;
}
