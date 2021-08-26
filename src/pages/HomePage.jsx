
import { Link } from 'react-router-dom';

import { useTasks } from '../hooks/useTasks';

import Modal from '../components/Modal';

const Home = () => {

    const { tasks } = useTasks();

    return(
        <div className="bg-light">

            <div className="container-fluid pt-4 pb-5 py-lg-5">

                <Modal />

                <div className="row align-items-center py-3">

                    <div className="col-xl-6 col-lg-5 d-flex justify-content-end">

                        <div className="pt-2 mx-auto mb-5 mb-lg-0 ms-lg-0 me-xl-7 text-center text-lg-start">

                            <h1 className="display-4 pb-2"><span className="fw-light">Have a look </span>Around!</h1>

                            <p className="h4 opacity-70">And you will find everything you need to build a great looking website.</p>

                            <Link to="/tasks" className="btn btn-primary m-3">
                                <i className="bi bi-card-text"></i>
                                <span className="m-3">My Tasks</span>
                            </Link>

                            <hr className="hr-light mt-0 mb-5"></hr>

                            <div className="row">

                                <div className="col-sm-4 mb-4 mb-sm-0">
                                    <div className="h1 mb-1">{tasks.filter(task => task.publicTask === true).length}</div>
                                    <div className="h5 fw-normal opacity-70 mb-2">Public Tasks</div>
                                </div>

                                <div className="col-sm-4 mb-4 mb-sm-0">
                                    <div className="h1 mb-1">{tasks.filter(task => task.publicTask === false).length}</div>
                                    <div className="h5 fw-normal opacity-70 mb-1">Private Tasks</div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="h1 mb-1">{ tasks.length }</div>
                                    <div className="h5 fw-normal opacity-70 mb-1">Total Tasks</div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-xl-6 col-lg-7">

                    </div>

                </div>
            </div>
            
        </div>
    )

}

export default Home;