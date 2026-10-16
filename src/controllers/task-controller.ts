import type { RequestHandler } from "express";

export const createTask: RequestHandler = async (req, res) => {
    //1. recebe os dados da requisição
    const { title } = req.body;
    //2. manda os dados para a appplication (usecase)
    //3. retorna o resultado (usando o presenters)
}