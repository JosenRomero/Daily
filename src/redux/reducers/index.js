import { combineReducers } from 'redux';
import TasksReducer from './TasksReducer';
import TaskReducer from './TaskReducer';

export default combineReducers({
    task: TaskReducer,
    tasks: TasksReducer
})