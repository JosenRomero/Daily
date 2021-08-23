import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';

import Layout from '../components/layouts/Layout';

import HomePage from '../pages/HomePage';
import TasksPage from '../pages/TasksPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRouter() {

    return (
        <Router>
            <Layout>
                <Switch>

                    <Route exact path="/" component={HomePage} />
                    <Route path="/tasks" component={TasksPage} />

                    <Route path="*" component={NotFoundPage} />
                    
                </Switch>
            </Layout>
        </Router>
    );

}

export default AppRouter;