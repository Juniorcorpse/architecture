import { AppError } from "../../shared/app-erros.js";

export class SmallTitleError extends AppError {
    constructor() {
        super("Título deve ter pelo menos 2 caracteres.");
    }
}