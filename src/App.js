import { BrowserRouter as Router, Route }  from 'react-router-dom';

import store from './redux/store';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Tasks from './components/Tasks';

function App() {

    return (
        <Provider store={store}> 
        <Router>

            <Navbar />

            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/tasks">
                <Tasks />
            </Route>

        </Router>
        </Provider>
    );

}

export default App;
