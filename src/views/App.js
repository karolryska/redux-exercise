import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    );
};

export default App;
