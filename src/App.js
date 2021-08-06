import { BrowserRouter as Router, Route }  from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Tasks from './components/Tasks';

function App() {

    return (
        <Router>

            <Navbar />

            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/tasks">
                <Tasks />
            </Route>

        </Router>
    );

}

export default App;
