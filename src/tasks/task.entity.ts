import { v4 } from "uuid";
import { InvalidTransitionError } from "./errors/invalid-transition.error.js";
import { SmallTitleError } from "./errors/small-title.error.js";

//lista de status possíveis para uma task
export type TaskStatus = "PENDING" | "IN-PROGRESS" | "DONE" | "CANCELLED";

const TRANSITIONS: Record<TaskStatus, Partial<Record<TaskEvent, TaskStatus>>> = {
    "PENDING": { start: "IN-PROGRESS", cancel: "CANCELLED" },
    "IN-PROGRESS": { complete: "DONE", cancel: "CANCELLED" },
    "DONE": {},
    "CANCELLED": {}
};

export type TaskEvent = "start" | "complete" | "cancel";

export type Task = {
    id:string;
    title: string;    
    status: TaskStatus;
}
export const createTask = (title: string) => {
    if(title.length < 2) throw new SmallTitleError();

    return Object.freeze({   
        id: v4(),
        title,
        status: "PENDING"
    });
}

export const transitionStatus = (task: Task, event: TaskEvent) => {
    const nextStatus = TRANSITIONS[task.status][event];
    if (!nextStatus) throw new InvalidTransitionError(task.status, event);
    return { ...task, status: nextStatus };
}