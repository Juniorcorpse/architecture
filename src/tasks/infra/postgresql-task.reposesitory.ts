import { ITaskRepository } from "../domain/task-repository.js";
import { Task } from "../domain/task.entity.js";

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