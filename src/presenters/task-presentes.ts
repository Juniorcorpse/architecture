import type { Task } from "../entities/task.js";

type createTaskPresenterType = {
    errorMessage: string;
    data:{
        task:Task;
    }
};
export const createTaskPresenter = ({errorMessage,data}: createTaskPresenterType) => {
    return {
        error: errorMessage ?? null,
        data
    };
};