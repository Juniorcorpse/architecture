import type { RequestHandler } from "express";
import { registerTask } from "../domain/use-cases/retister-task.use-case.js";
import { createTaskPresenter } from "./task-presentes.js";
import { TaskNotFound } from "../errors/task-not-found.error.js";
import { TaskRepositoryPostgreSQL } from "./postgresql-task.reposesitory.js";

export const createTask: RequestHandler = async (req, res) => {
    try {
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
    } catch (error) {
        if (error instanceof TaskNotFound) return res.status(404).json(({ errorMessage: error.message, data: null}));
        return res.status(500).json({errorMessage: 'Internal server error'});
    }
}