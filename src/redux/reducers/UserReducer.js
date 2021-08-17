import * as types from '../actions/types';

const UserReducer = (state = [], action) => {

    switch (action.type) {
        case types.ADDING_USER:
            return action.payload
        default:
            return state;
    }

}

export default UserReducer;