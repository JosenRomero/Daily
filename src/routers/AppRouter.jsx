import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';

import Layout from '../components/layouts/Layout';

import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import TasksPage from '../pages/TasksPage';
import NotFoundPage from '../pages/NotFoundPage';

import PrivateRoute from './PrivateRoute';

const AppRouter = () => {

    return (
        <Router>
            <Layout>
                <Switch>

                    <PrivateRoute exact path="/" component={HomePage} />
                    <PrivateRoute exact path="/tasks" component={TasksPage} />
                    <Route exact path="/signin" component={SignInPage} />

                    <Route path="*" component={NotFoundPage} />
                    
                </Switch>
            </Layout>
        </Router>
    );

}

export default AppRouter;