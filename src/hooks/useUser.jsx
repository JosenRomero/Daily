import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../services/user';

import { addingUserAction } from '../redux/actions/Actions';

export const useUser = () => {

    const user = useSelector((state) => state.user); // see reducers/index.js

    const [authorized, setAuthorized] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {

        if(user.userId === undefined && authorized === null) {
            userVerification()
        }

        if(user.userId) {
            setAuthorized(true)
        }

    }, [])

    const userVerification = () => {

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

    }

    return {
        authorized
    }

}