import * as types from './types';

// errorActions

export const setErrorAction = (msgError) => ({
    type: types.SET_ERROR,
    payload: {
        msgError,
        isOpen: true
    }
});

export const hideErrorAction = () => ({
    type: types.HIDE_ERROR,
    payload: {
        msgError: null,
        isOpen: false
    }
});