import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initTasksAction } from '../redux/actions/Actions';

import { deleteAllTasksAction } from '../redux/actions/Actions';

export const useTasks = () => {

    const user = useSelector((state) => state.user); // 'user' viene de reducers/index.js

    const tasks = useSelector((state) => state.tasks); // 'tasks' viene de reducers/index.js

    const dispatch = useDispatch();

    useEffect(() => {

        if(user.userId) {
            dispatch(initTasksAction(user.userId));
        }

    }, [dispatch, user.userId]);

    const removeAllTasks = () => {

        dispatch(deleteAllTasksAction(user.userId));

    }

    return {
        tasks,
        removeAllTasks
    }

}