import type { RequestHandler } from "express";
import { registerTask } from "../use-cases/retister-task.use-case.js";
import { createTaskPresenter } from "../presenters/task-presentes.js";

export const createTask: RequestHandler = async (req, res) => {
    //1. recebe os dados da requisição
    const { title } = req.body;

    //2. manda os dados para a appplication (usecase)
    const taskItem = await registerTask(title);

    //3. retorna o resultado (usando o presenters)
    res.status(201).json(createTaskPresenter({
        errorMessage: '',
        data: {
            task: taskItem
        }
    }));
}