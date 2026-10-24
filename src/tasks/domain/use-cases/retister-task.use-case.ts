import { createTask } from "../task.entity.js";
import {ITaskRepository} from "../task-repository.js";

export const registerTask = async ( title: string, repository: ITaskRepository) => {
  const existingTask      = await repository.findById(title);
  if (existingTask) return existingTask;

  const taskItem          = createTask( title );
  await repository.save(taskItem);
  return taskItem;
}