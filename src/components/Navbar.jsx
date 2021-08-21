
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import NavbarForUser from './NavbarForUser';

const Navbar = () => {

    const user = useSelector((state) => state.user);

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <Link to="/" className="navbar-brand">Daily</Link>

                <button className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        {
                            user.username && <NavbarForUser username={user.username} />
                                
                        }

                    </ul>
                </div>

            </div>
        </nav>
    )

}

export default Navbar;
