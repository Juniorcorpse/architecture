export type Task = {
    id:string;
    title: string;    
    isCompleted: boolean;
}
export const createTask = (title: string) => {
    return {   title  } as Task;
}