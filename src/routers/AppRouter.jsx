import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom';

import Layout from '../components/layouts/Layout';

import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import TasksPage from '../pages/TasksPage';
import NotFoundPage from '../pages/NotFoundPage';
import VerificationRoute from './VerificationRoute';

const AppRouter = () => {

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={ <VerificationRoute requiredUser={true}><HomePage /></VerificationRoute> } />
                    <Route path="/tasks" element={ <VerificationRoute requiredUser={true}><TasksPage /></VerificationRoute>} />
                    <Route path="/signin" element={ <VerificationRoute requiredUser={false}><SignInPage /></VerificationRoute>} />
                    <Route path="*" element={ <NotFoundPage />} />
                </Routes>
            </Layout>
        </Router>
    );

}

export default AppRouter;