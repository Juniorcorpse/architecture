import type { Task } from "./task.entity.js";

export type ITaskRepository = {
    save: (task: Task) => Promise<void>;
    findById: (id: string) => Promise<Task | null>;
    findByTitle: (title: string) => Promise<Task | null>;
}

export const TaskRepositoryPostgreSQL: ITaskRepository = {
    save: async (task: Task) => {
        //processo de salvar a task no banco de dados
    },
    findById: async (id: string) => {
        //processo de buscar a task pelo id no banco de dados
        return{ id: '123',
            title: "Task 1",           
            status: "PENDING"
        } as Task;
    },
    findByTitle: async (title: string) => {
        //processo de buscar a task pelo título no banco de dados
        return{
            id: '123',
            title: "Task 1",           
            status: "PENDING"
        } as Task;
    }
};

export const TaskRepositoryMongoDb: ITaskRepository = {
    save: async (task: Task) => {
        //processo de salvar a task no banco de dados
    },
    findById: async (id: string) => {
        //processo de buscar a task pelo id no banco de dados
        return{ 
            id: '103',
            title: "Task 2",             
            status: "PENDING"
        } as Task;
    },
    findByTitle: async (title: string) => {
        //processo de buscar a task pelo título no banco de dados
         return{
            id: '103',
            title: "Task 2",           
            status: "PENDING"
        } as Task;
    }
};