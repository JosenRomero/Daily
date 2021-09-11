
import { useDispatch, useSelector } from 'react-redux';

import { useCurrentTask } from '../hooks/useCurrentTask';

import { addTaskAction, updateTaskAction, } from '../redux/actions/Actions';

const Modal = () => {

    const user = useSelector((state) => state.user); 

    const { task, currentTask, clearCurrentTask } = useCurrentTask();

    const dispatch = useDispatch();

    const handleSubmit = (event) => {

        if(task.title && task.description) {
            
            // In the editTask method from SectionMain.jsx, change the value of tasks._id
            if(task._id) { // updateTask

                dispatch(updateTaskAction({
                    _id: task._id, 
                    title: task.title, 
                    description: task.description, 
                    publicTask: true 
                }));

                clearCurrentTask();

            }else { // addTask

                dispatch(addTaskAction({
                    userId: user.userId,
                    title:  task.title,
                    description: task.description,
                    publicTask: true,
                    likers: ["jose"]
                }));

                clearCurrentTask();
                
            }

        }

        event.preventDefault();

    }

    const handleChange = (event) => {

        const { name, value } = event.target;

        currentTask({
            ...task,
            [name]: value
        });

    }

    return <div className="container">

        { /* Modal */ }
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            { task._id === "" || task._id === undefined ? <>Create Task</> : <>Updata Task</> }
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="modal-body">

                            <div className="mb-3">
                                <label htmlFor="formControlInput1" className="form-label">Task title</label>
                                <input type="text" name="title" onChange={handleChange} value={task.title || ""} id="formControlInput1" className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formControlTextarea1" className="form-label">Task Description</label>
                                <textarea name="description" onChange={handleChange} className="form-control" value={task.description || ""} id="formControlTextarea1" rows="3"></textarea>
                            </div>

                            <select className="form-select" aria-label="Default select example">
                                <option select="true">Visibility</option>
                                <option value="1">Public</option>
                                <option value="2">Private</option>
                            </select>
                                    
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            
                            { task.title !== "" && task.description !== "" &&
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                                    { task._id === "" || task._id === undefined ? <>Add Task</> : <>Updata Task</> }
                                </button> 
                            }

                        </div>

                    </form>
                        
                </div>
            </div>
        </div>

    </div>

}

export default Modal;