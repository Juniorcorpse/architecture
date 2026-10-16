export type Task = {
    title: string;
    
}
export const createTask = (title: string) => {
    return {   title  } as Task;
}