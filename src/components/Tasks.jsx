import React from 'react';
import { useDispatch } from 'react-redux';
import { useUserData } from '../hooks/useUserData';
import { useCurrentTask } from '../hooks/useCurrentTask';

import { getOneTask } from '../services/tasks';

import { 
    addTaskAction, 
    deleteTaskAction, 
    updateTaskAction, 
    deleteAllTasksAction 
} from '../redux/actions/Actions';

const Tasks = () => {

    const { user, tasks } = useUserData();

    const { task, currentTask, clearCurrentTask } = useCurrentTask();

    const dispatch = useDispatch();

    const handleSubmit = (event) => {

        if(task.title && task.description) {
            
            // comprobamos si el estado de la aplicación tiene lleno o vacio el _id, ver editTak
            if(task._id) { // _id lleno 

                dispatch(updateTaskAction({
                    _id: task._id, 
                    title: task.title, 
                    description: task.description, 
                    publicTask: true 
                }));

                clearCurrentTask();

            }else { // _id vacio

                dispatch(addTaskAction({
                    userId: user.userId,
                    title:  task.title,
                    description: task.description,
                    publicTask: true,
                    likers: ["jose"]
                }));

                clearCurrentTask();
                
            }

        } else {
            console.log("error");
        }

        event.preventDefault();

    }

    const removeTask = (id) => {

        dispatch(deleteTaskAction(id));

    }

    const editTask = (id) => {

        // petición al servidor para obtener una tarea.
        // en el method handleSubmit se actualiza está tarea
        getOneTask(id)
            .then(data => {

                // solo en este caso, cuando se está editando una tarea, el estado de la aplicación tendrá lleno el _id

                currentTask({
                    title: data.title,
                    description: data.description,
                    _id: data._id
                })
                
            })
            .catch(err => console.error(err));
        
    }

    const removeAllTasks = () => {

        dispatch(deleteAllTasksAction(user.userId));

    }

    // captura lo que se escribe en los input
    const handleChange = (event) => {

        const { name, value } = event.target;

        currentTask({
            ...task,
            [name]: value
        });

    }

    return <div className="container">

        <h1>Welcome! {user.username}</h1>

        { /* Modal */ }
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create Task</h5>
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
                                    
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add Task</button>
                        </div>

                    </form>
                        
                </div>
            </div>
        </div>

        <div className="row">
    
            <div className="col-6">

                { /* Button trigger modal */ }
                <button type="button" className="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Create Task
                </button> 

                <button onClick={ () => removeAllTasks() } type="button" className="btn btn-danger m-3"> 
                    Delete all tasks
                </button>

            </div>


            <div className="col-6">

                <table className="table table-bordered table-hover">

                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tasks.map(task => {
                                return <tr key={task._id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>

                                        <button onClick={ () => removeTask(task._id) } type="button" className="btn btn-danger mx-2">
                                            <i className="bi bi-trash"></i>
                                        </button>

                                    </td>
                                    <td>

                                        <button onClick={ () => editTask(task._id)} type="button" className="btn btn-success mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="bi bi-pencil"></i>
                                        </button>

                                    </td>
                                </tr>
                
                            })
                        }
                    </tbody>

                </table>

            </div>

        </div> {/** row */}

    </div>
    
}

export default Tasks;

