
import store from './redux/store';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

const App = () => {

    return (
        <Provider store={store}> 
            <AppRouter />
        </Provider>
    );

}

export default App;
