import { createTask } from "../entities/task.js";
import { TaskRepository} from "../ports/task-repository.js";

export const registerTask = async ( title: string) => {
  const taskItem = createTask( title );
  await TaskRepository.save(taskItem);
  return taskItem;
}