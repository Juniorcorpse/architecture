import type { Task } from "./task.entity.js";

export type ITaskRepository = {
    save: (task: Task) => Promise<void>;
    
}

export const TaskRepositoryPostgreSQL: ITaskRepository = {
    save: async (task: Task) => {
        //processo de salvar a task no banco de dados
    }
};

export const TaskRepositoryMongoDb: ITaskRepository = {
    save: async (task: Task) => {
        //processo de salvar a task no banco de dados
    }
};