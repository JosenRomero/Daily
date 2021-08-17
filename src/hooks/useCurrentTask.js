
import { useDispatch, useSelector } from 'react-redux';

import { addingTaskAction } from '../redux/actions/Actions';

export const useCurrentTask = () => {

    const task = useSelector((state) => state.task);

    const dispatch = useDispatch();

    const clearCurrentTask = () => {

        dispatch(addingTaskAction({
            title: "",
            description: "",
            _id: ""
        }));

    }

    const currentTask = ({title, description, _id}) => {

        dispatch(addingTaskAction({
            title,
            description,
            _id
        }));

    }

    return {
        task,
        currentTask,
        clearCurrentTask
    }

}