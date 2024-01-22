import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom';

import Layout from '../components/layouts/Layout';

import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import TasksPage from '../pages/TasksPage';
import NotFoundPage from '../pages/NotFoundPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

    return (
        <Router>
            <Layout>
                <Routes>

                    <Route path="/">
                        <Route index element={<PrivateRoute><HomePage /></PrivateRoute>} />
                        <Route path="/tasks" element={ <PrivateRoute><TasksPage /></PrivateRoute>} />
                        <Route path="/signin" element={ <PublicRoute><SignInPage /></PublicRoute>} />
                        <Route path="*" element={ <NotFoundPage />} />
                    </Route>

                </Routes>
            </Layout>
        </Router>
    );

}

export default AppRouter;