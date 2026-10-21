import {transitionStatus } from "./task.entity.js";
import {ITaskRepository} from "./task-repository.js";

export const startTask = async ( id: string, repository: ITaskRepository) => {
    const task = await repository.findById(id);
    if (!task) throw new Error(`Task com id ${id} não encontrada.`);
    const updatedTask = transitionStatus(task, "start");
    await repository.save(updatedTask);
    return updatedTask;
}