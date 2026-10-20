import type { Task } from "./task.entity.js";

export type ITaskRepository = {
    save: (task: Task) => Promise<void>;
    findById: (title: string) => Promise<Task | null>;
    
}

export const TaskRepositoryPostgreSQL: ITaskRepository = {
    save: async (task: Task) => {
        //processo de salvar a task no banco de dados
    },
    findById: async (title: string) => {
        //processo de buscar a task pelo título no banco de dados
        return{
            id: '123',
            title: "Task 1",           
            isCompleted: false
        } as Task;
    }
};

export const TaskRepositoryMongoDb: ITaskRepository = {
    save: async (task: Task) => {
        //processo de salvar a task no banco de dados
    },
    findById: async (title: string) => {
        //processo de buscar a task pelo título no banco de dados
         return{
            id: '103',
            title: "Task 2",           
            isCompleted: false
        } as Task;
    }
};