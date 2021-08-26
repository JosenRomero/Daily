
import './HomePage.css';

import { Link } from 'react-router-dom';

import { useTasks } from '../hooks/useTasks';

import Modal from '../components/Modal';

const HomePage = () => {

    const { tasks } = useTasks();

    return(
        <div className="bg-light">

            <div className="container-fluid pt-4 pb-5 ">

                <Modal />

                <div className="row align-items-center py-3">

                    <div className="col-xl-6 col-lg-5 d-flex justify-content-end">

                        <div className="pt-2 mb-5 text-center text-lg-start">

                            <h1><span className="fw-light">Have a look </span>Around!</h1>

                            <p className="h4">And you will find everything you need to build a great looking website.</p>

                            <Link to="/tasks" className="btn btn-primary m-3">
                                <i className="bi bi-card-text"></i>
                                <span className="m-3">My Tasks</span>
                            </Link>

                            <hr className="hr-light mb-5"></hr>

                            <div className="row">

                                <div className="col-sm-4">
                                    <div className="h1">{tasks.filter(task => task.publicTask === true).length}</div>
                                    <div className="h5">Public Tasks</div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="h1">{tasks.filter(task => task.publicTask === false).length}</div>
                                    <div className="h5">Private Tasks</div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="h1">{ tasks.length }</div>
                                    <div className="h5">Total Tasks</div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-xl-6 col-lg-7">

                        <p className="text-center h4 text-muted">Last Task</p>
                    
                        {
                            tasks[tasks.length-1] && 
                        

                                <div id="cardRotate" className="card shadow p-3 mb-5 bg-white rounded" key={tasks[tasks.length-1]._id}>

                                    <div className="card-header bg-white">

                                        <div className="d-flex justify-content-between">
                                            <div>
                                                {tasks[tasks.length-1].title}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="card-body">

                                        <h6 className="card-subtitle mb-2 text-muted"> { tasks[tasks.length-1].updatedAt }</h6>
                                        <p className="card-text">{ tasks[tasks.length-1].description }</p>
                                            
                                    </div>

                                        
                                </div> 
                        }
                        

                    </div>

                </div>
            </div>
            
        </div>
    )

}

export default HomePage;