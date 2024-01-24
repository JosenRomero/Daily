
import { Navigate }  from 'react-router-dom';

import { useUser } from '../hooks/useUser';

const VerificationRoute = ({ children, requiredUser }) => {

    const { authorized } = useUser();

    if(authorized === false) {
        if(requiredUser) return <Navigate to="/signin" />
        else return children
    }

    if(authorized) {
        if(requiredUser) return children
        else return <Navigate to="/" />
    }

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

export default VerificationRoute;