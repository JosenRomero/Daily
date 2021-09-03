import * as types from './types';

import { getAllTasks, addTask, deleteTask, updateTask, deleteAllTasks } from '../../services/tasks';

import { setErrorAction } from './errorActions';

// tasksActions

export const initTasksAction = (userId) => {

    return async (dispatch) => {

        const { tasks, msgError } = await getAllTasks(userId);

        if(!msgError) {
            
            dispatch ({
                type: types.INIT_TASKS,
                payload: tasks
            })

        }else {
            dispatch(setErrorAction(msgError))
        }

    }

}

/*
export const getTasksAction = () => ({
    type: types.GET_TASKS,
    payload: []
});*/

export const addTaskAction = (task) => {

    return async (dispatch) => {

        const { newTask, msgError } = await addTask(task);

        if(!msgError) {

            dispatch ({
                type: types.ADD_TASK,
                payload: newTask
            })

        } else {
            dispatch(setErrorAction(msgError))
        }

    }

}

export const deleteTaskAction = (id) => {

    return async (dispatch) => {

        const { msgError } = await deleteTask(id);

        if(!msgError) {

            dispatch({
                type: types.DELETE_TASK,
                payload: {
                    _id: id
                }
            })

        }else {
            dispatch(setErrorAction(msgError))
        }

    }

}

export const updateTaskAction = ({ _id, title, description, publicTask }) => {

    return async (dispatch) => {

        const { task, msgError } = await updateTask({ _id, title, description, publicTask });

        if(!msgError) {

            dispatch({
                type: types.UPDATE_TASK,
                payload: task
            })

        }else {
            dispatch(setErrorAction(msgError))
        }

    }
    
}

export const deleteAllTasksAction = (userId) => {

    return async (dispatch) => {

        const { msgError } = await deleteAllTasks(userId);

        if(!msgError) {
            
            dispatch({
                type: types.DELETE_ALL_TASKS,
                payload: []
            })

        }else {
            dispatch(setErrorAction(msgError))
        }

    }

}

// taskActions

export const addingTaskAction = (newValue) => ({
    type: types.ADDING_TASK,
    payload: newValue
});

// userActions

export const addingUserAction = (user) => ({
    type: types.ADDING_USER,
    payload: user
});