import * as types from '../actions/types';

const TasksReducer = (state = [], action) => {

    switch (action.type) {
        case types.GET_TASKS:
            return action.payload
        case types.ADD_TASK:
            return [...state, action.payload]
        default:
            return state;
    }

}

export default TasksReducer;