import type { RequestHandler } from "express";
import { registerTask } from "./retister-task.use-case.js";
import { createTaskPresenter } from "./task-presentes.js";
import { TaskRepositoryPostgreSQL } from "./task-repository.js";

export const createTask: RequestHandler = async (req, res) => {
    //1. recebe os dados da requisição
    const { title } = req.body;

    //2. manda os dados para a appplication (usecase)
    const taskItem = await registerTask(title, TaskRepositoryPostgreSQL);

    //3. retorna o resultado (usando o presenters)
    res.status(201).json(createTaskPresenter({
        errorMessage: '',
        data: {
            task: taskItem
        }
    }));
}