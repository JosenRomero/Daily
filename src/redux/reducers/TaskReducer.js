import * as types from '../actions/types';

const TaskReducer = (state = [], action) => {

    switch (action.type) {
        case types.ADDING_TASK:
            return action.payload
        default:
            return state;
    }

}

export default TaskReducer;