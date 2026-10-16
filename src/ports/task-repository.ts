import type { Task } from "../entities/task.js";

export type ITaskRepository = {
    save: (task: Task) => Promise<void>;
    
}

export const TaskRepository: ITaskRepository = {
    save: async (task: Task) => {

    }
};