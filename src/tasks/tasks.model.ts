/**
 * A model can be defined as a "Class" or an "Interface"
 * Interface is a typeScript concept, it forced the shape of an object upon computation.
 * After computation, Interfaces are not preserved anymore.
 */
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

//Using predefined status
enum TaskStatus {
  //With "enum" we use a comma (,) at the end while in "Interfaces" we use (;)
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
