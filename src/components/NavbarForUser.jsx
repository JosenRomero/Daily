
import { Link } from 'react-router-dom';

import { useTasks } from '../hooks/useTasks';
import { useCurrentTask } from '../hooks/useCurrentTask';

import { useUser } from '../hooks/useUser'

const NavbarForUser = (props) => {

    const { userLogout } = useUser();

    const { removeAllTasks } = useTasks();

    const { clearCurrentTask } = useCurrentTask();

    return <>

        <li className="nav-item active">
            <Link to="/tasks" className="nav-link">Tasks</Link>
        </li>  

        <li className="nav-item dropdown">

            <span className="nav-link dropdown-toggle" id="dropdownUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                { props.username }
            </span>

            <ul className="dropdown-menu" aria-labelledby="dropdownUser">

                <li><p type="button" className="dropdown-item" onClick={ () => removeAllTasks() } >Delete all tasks</p></li>

                { /* Button trigger modal */ }
                <li><p type="button" className="dropdown-item" onClick={ () => clearCurrentTask() } data-bs-toggle="modal" data-bs-target="#exampleModal">Create Task</p></li>
                
                <li><hr className="dropdown-divider" /></li>

                <li><button onClick={ () => userLogout() } className="dropdown-item">Sign out</button></li>

            </ul>

        </li>

    </>

}

export default NavbarForUser;