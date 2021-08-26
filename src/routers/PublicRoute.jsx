
import { Redirect, Route }  from 'react-router-dom';

import { useUser } from '../hooks/useUser';

const PublicRoute = (props) => {

    const { authorized } = useUser();

    if(authorized) return <Redirect to="/" />

    if(authorized === false) return <Route {...props}/>

    return (
        <div className="container text-center py-5">

            <div className="row d-flex justify-content-center">

                <div className="col-sm-4 shadow p-3 mb-5 bg-white rounded">

                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                </div>

            </div>
  
        </div>
    );

}

export default PublicRoute;