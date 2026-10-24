import {transitionStatus } from "../task.entity.js";
import {ITaskRepository} from "../task-repository.js";
import { TaskNotFound } from "../../errors/task-not-found.error.js";

export const startTask = async ( id: string, repository: ITaskRepository) => {
    const task = await repository.findById(id);
    if (!task) throw new TaskNotFound(id);

    const updatedTask = transitionStatus(task, "start");
    await repository.save(updatedTask);
    return updatedTask;
}