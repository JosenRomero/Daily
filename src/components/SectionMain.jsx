
import { useDispatch } from 'react-redux';

import { useTasks } from '../hooks/useTasks';
import { useCurrentTask } from '../hooks/useCurrentTask';

import { getOneTask } from '../services/tasks';

import { deleteTaskAction } from '../redux/actions/Actions';

import { setErrorAction } from '../redux/actions/errorActions';

const SectionMain = () => {

    const { tasks } = useTasks();

    const { currentTask } = useCurrentTask();

    const dispatch = useDispatch();

    const removeTask = (id) => {

        dispatch(deleteTaskAction(id));

    }

    const editTask = async (id) => {

        // In the handleSubmit method from Modal.jsx, this task is updated

        const { oneTask, msgError } = await getOneTask(id);

        if(!msgError) {

            // changed the value of tasks._id from '' to oneTask._id
            currentTask({
                title: oneTask.title,
                description: oneTask.description,
                _id: oneTask._id
            })

        }else {
            dispatch(setErrorAction(msgError))
        }     
        
    }

    const reportTask = (id) => {
        // reportTask
    }

    return <div className="col-sm-8">

        {
            tasks.map(task => {
                return <div className="card shadow p-3 mb-5 bg-white rounded" key={task._id}>

                    <div className="card-header bg-white">

                        <div className="d-flex justify-content-between">
                            <div>
                                {task.title}
                            </div>
                        
                            <div className="dropdown">
                                <span className="dropdown-toggle" id="threeDots" role="button" data-bs-toggle="dropdown" aria-expanded="false"></span>
                                <div className="dropdown-menu" aria-labelledby="threeDots">
                                    <button onClick={ () => reportTask(task._id) } className="dropdown-item" >Report</button>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    
                    <div className="card-body">

                        <h6 className="card-subtitle mb-2 text-muted"> { task.updatedAt }</h6>
                        <p className="card-text">{ task.description }</p>
                            
                    </div>

                    <div className="card-footer bg-white">

                        <div className="d-flex justify-content-between">

                            <div className="d-flex justify-content-start">
                                <i className="bi bi-hand-thumbs-up"></i>
                                { task.likers.length }
                            </div>

                            <div className="d-flex justify-content-end">
                                <button  type="button" className="btn btn-danger">
                                    <i onClick={ () => removeTask(task._id) } className="bi bi-trash"></i>
                                </button>

                                <button onClick={ () => editTask(task._id)} type="button" className="btn btn-success mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="bi bi-pencil"></i>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            })
        }

    </div>

}

export default SectionMain;