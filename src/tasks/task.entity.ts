import { v4 } from "uuid";

//lista de status possíveis para uma task
export type TaskStatus = "PENDING" | "IN-PROGRESS" | "DONE" | "CANCELLED";

const TRANSITIONS: Record<TaskStatus, Partial<Record<TaskEvent, TaskStatus>>> = {
    "PENDING": { start: "IN-PROGRESS", cancel: "CANCELLED" },
    "IN-PROGRESS": { complete: "DONE", cancel: "CANCELLED" },
    "DONE": {},
    "CANCELLED": {}
};

type TaskEvent = "start" | "complete" | "cancel";

export type Task = {
    id:string;
    title: string;    
    status: TaskStatus;
}
export const createTask = (title: string) => {
    if(title.length < 3) throw new Error("Título deve ter pelo menos 3 caracteres.");

    return Object.freeze({   
        id: v4(),
        title,
        status: "PENDING"
    });
}

export const transitionStatus = (task: Task, event: TaskEvent) => {
    const nextStatus = TRANSITIONS[task.status][event];
    if (!nextStatus) throw new Error(`Transição inválida: ${task.status} -> ${event}`);
    return { ...task, status: nextStatus };
}