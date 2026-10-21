import { v4 } from "uuid";

export type Task = {
    id:string;
    title: string;    
    isCompleted: boolean;
}
export const createTask = (title: string) => {
    if(title.length < 3) throw new Error("Título deve ter pelo menos 3 caracteres.");

    return Object.freeze({   
        id: v4(),
        title,
        isCompleted: false
    });
}