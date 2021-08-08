import * as types from './types';

export const getTasksAction = (tasks) => ({
    type: types.GET_TASKS,
    payload: tasks
});

export const addTaskAction = (task) => ({
    type: types.ADD_TASK,
    payload: task
});