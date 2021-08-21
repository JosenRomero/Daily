import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUser } from '../services/user';

import { addingUserAction } from '../redux/actions/Actions';

export const useUser = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        getUser()
            .then(data => {

                dispatch(addingUserAction({
                    username: `${data.user.username}`,
                    userId: `${data.user._id}`
                }));

            })
            .catch(err => console.error(err))

    }, [dispatch]);

}