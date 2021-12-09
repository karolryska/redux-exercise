const ADD_USERS = 'ADD_USERS';
const REMOVE_USERS = 'REMOVE_USERS';

//action - reducers trigger, if funciton return action it is called action creator
export const loadUsers = (data) => ({ type: ADD_USERS, data });
export const removeUsers = () => ({ type: REMOVE_USERS });

//initial state - good practice
const INITIAL_STATE = {
    users: [],
};

export const fetchUsers = () => {
    return function (dispatch) {
        fetch('https://randomuser.me/api/?results=5')
            .then((response) => response.json())
            .then((data) => {
                dispatch(loadUsers(data.results));
                console.log(data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

//reducer - receive action and do something
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_USERS:
            //important - return brand new object!!!
            return { ...state, users: action.data };
        case REMOVE_USERS:
            //important - return brand new object!!!
            return { ...state, users: [] };
        default:
            return state;
    }
};
