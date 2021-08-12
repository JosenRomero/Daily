import * as types from './types';

import { getAllTasks, addTask, deleteTask, updateTask, deleteAllTasks } from '../../services/tasks';


export const initTasksAction = (userId) => {

    return async (dispatch) => {

        const tasks = await getAllTasks(userId);

        dispatch ({
            type: types.INIT_TASKS,
            payload: tasks
        })

    }

}

export const getTasksAction = () => ({
    type: types.GET_TASKS,
    payload: []
});

export const addTaskAction = (task) => {

    return async (dispatch) => {

        const { newTask } = await addTask(task);

        dispatch ({
            type: types.ADD_TASK,
            payload: newTask
        })

    }

}

export const deleteTaskAction = (id) => {

    return async (dispatch) => {

        await deleteTask(id);

        dispatch({
            type: types.DELETE_TASK,
            payload: {
                _id: id
            }
        })

    }

}

export const updateTaskAction = ({ _id, title, description, publicTask }) => {

    return async (dispatch) => {

        const { task } = await updateTask({ _id, title, description, publicTask });

        dispatch({
            type: types.UPDATE_TASK,
            payload: task
        })

    }
    
}

export const deleteAllTasksAction = (userId) => {

    return async (dispatch) => {

        await deleteAllTasks(userId);

        dispatch({
            type: types.DELETE_ALL_TASKS,
            payload: []
        })

    }

}