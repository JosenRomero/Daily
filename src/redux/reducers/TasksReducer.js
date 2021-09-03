import * as types from '../actions/types';

const TasksReducer = (state = [], action) => {

    switch (action.type) {
        case types.INIT_TASKS:
            return action.payload
        /*case types.GET_TASKS:
            return state*/
        case types.ADD_TASK:
            return [...state, action.payload]
        case types.DELETE_TASK:
            return state.filter(({ _id }) => _id !== action.payload._id);
        case types.UPDATE_TASK:
            return state.map((task) => {
                if (task._id === action.payload._id) {
                    return {
                        ...task,
                        ...action.payload
                    };
                } else {
                    return task;
                }
            });
        case types.DELETE_ALL_TASKS:
            return []
        default:
            return state;
    }

}

export default TasksReducer;