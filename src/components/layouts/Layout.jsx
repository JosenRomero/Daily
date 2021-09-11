
import Navbar from '../Navbar';
import ErrorNotification from '../ErrorNotification';

const Layout = ({children}) => {

    return(
        <>
            <Navbar />
            <ErrorNotification />

            {children}
           
        </>
    )

}

export default Layout;