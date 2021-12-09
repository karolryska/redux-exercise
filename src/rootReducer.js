import { combineReducers } from 'redux';
import { reducer as counterReducer } from 'store/counter';
import { reducer as usersReducer } from 'store/users';

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
});

export default rootReducer;
