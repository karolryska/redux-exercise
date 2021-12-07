import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from 'store/redux';
import { reducer as counterReducer } from 'store/counter';
import Home from './Home';
import Users from './Users';
import Counter from './Counter';

const App = () => {
    const store = createStore(reducer);
    const counterStore = createStore(counterReducer);

    return (
        <Provider store={store}>
            <Provider store={counterStore}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/counter" element={<Counter />} />
                </Routes>
            </Provider>
        </Provider>
    );
};

export default App;
