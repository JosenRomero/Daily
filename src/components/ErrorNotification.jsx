
import { useDispatch, useSelector } from 'react-redux';

import { hideErrorAction } from '../redux/actions/errorActions';

const ErrorNotification = () => {

    const isOpen = useSelector((state) => state.error.isOpen);
    const msgError = useSelector((state) => state.error.msgError);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(hideErrorAction());
    }

    return(
        <>
            { isOpen && msgError &&

                <div className="bg-light">
                    <div className="container py-3">

                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>ERROR!</strong> Something went wrong.
                            <button onClick={ () => handleClose() } type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                                
                    </div>
                </div>

            }
            
        </>
    )

}

export default ErrorNotification;