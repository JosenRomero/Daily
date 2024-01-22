import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getUser } from '../services/user';

import { addingUserAction } from '../redux/actions/Actions';

export const useUser = () => {

    const [authorized, setAuthorized] = useState();

    const dispatch = useDispatch();

    useEffect(() => {

        getUser()
            .then(data => {
                
                if(data.user){

                    dispatch(addingUserAction({
                        username: `${data.user.username}`,
                        userId: `${data.user._id}`
                    }));

                    setAuthorized(true);

                }else {
                    setAuthorized(false);
                }

            })
            .catch(err => console.error(err))

    }, [dispatch]);

    return {
        authorized
    }

}