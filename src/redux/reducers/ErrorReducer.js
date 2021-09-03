import * as types from '../actions/types';

const initState = {
    msgError: null,
    isOpen: false
}

const ErrorReducer = (state = initState, action) => {

    switch (action.type) {
        case types.SET_ERROR:
            return action.payload
        case types.HIDE_ERROR:
            return action.payload
        default:
            return state;
    }

}

export default ErrorReducer;