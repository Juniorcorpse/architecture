import { AppError } from "../../shared/app-erros.js";
import { TaskEvent, TaskStatus } from "../task.entity.js";

export class InvalidTransitionError extends AppError {
    constructor(fromStatus: TaskStatus, event: TaskEvent) {
        super(`Invalid transition from ${event} to ${fromStatus}.`);
    }
}