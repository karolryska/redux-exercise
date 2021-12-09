import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'rootReducer';
import Home from './Home';
import Users from './Users';
import Counter from './Counter';

const App = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </Provider>
    );
};

export default App;
