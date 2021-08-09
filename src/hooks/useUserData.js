import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../services/user';
import { getAllTasks } from '../services/tasks';
import { getTasksAction } from '../redux/actions/Actions';

export const useUserData = () => {

    const tasks = useSelector((state) => state.tasks); // 'tasks' viene de reducers/index.js

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        "username": "",
        "userId": ""
    });

    // pide las tareas al servidor
    const fetchTasks = useCallback(() => {

        if(user.userId) {
            getAllTasks(user.userId)
                .then(data => {

                    dispatch(getTasksAction(data));

                })
                .catch(err => console.error(err))

        }
            
    }, [dispatch, user.userId])


    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {  

        getUser()
            .then(data => {

                setUser({
                    "username": `${data.user.username}`,
                    "userId": `${data.user._id}`
                });

                fetchTasks();

            })
            .catch(err => console.error(err))
        
    }, [fetchTasks]);

    return {
        user,
        tasks,
        fetchTasks
    }

}