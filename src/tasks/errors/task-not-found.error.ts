import { AppError } from "../../shared/app-erros.js";

export class TaskNotFound extends AppError {
    constructor(id: string) {
        super(`Task with id ${id} not found.`);
    }

}