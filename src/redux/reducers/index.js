import { combineReducers } from 'redux';
import TasksReducer from './TasksReducer';
import TaskReducer from './TaskReducer';
import UserReducer from './UserReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
    user: UserReducer,
    task: TaskReducer,
    tasks: TasksReducer,
    error: ErrorReducer
})