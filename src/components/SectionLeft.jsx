
import { useSelector } from 'react-redux';

import { useCurrentTask } from '../hooks/useCurrentTask';
import { useTasks } from '../hooks/useTasks';

const SectionLeft = () => {

    const user = useSelector((state) => state.user);

    const { tasks, removeAllTasks } = useTasks();

    const { clearCurrentTask } = useCurrentTask();

    return <div className="col-sm-4">

        <div className="card shadow p-3 mb-5 bg-white rounded">

            <h3>{ user.username }</h3>

            <h6>Public Tasks: {tasks.filter(task => task.publicTask === true).length}</h6>

            <h6>Private Tasks: {tasks.filter(task => task.publicTask === false).length}</h6>

            <h6>Total Tasks: { tasks.length }</h6>

            { /* Button trigger modal */ }
            <button onClick={ () => clearCurrentTask() } type="button" className="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create Task
            </button> 

            <button onClick={ () => removeAllTasks() } type="button" className="btn btn-danger m-3"> 
                Delete all tasks
            </button>

        </div>

    </div>

}

export default SectionLeft;