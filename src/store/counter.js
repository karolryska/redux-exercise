const COUNTER_INC = 'COUNTER_INC';
const COUNTER_DEC = 'COUNTER_DEC';

//action - reducers trigger, if funciton return action it is called action creator
export const inc = () => {
    return { type: COUNTER_INC };
};
export const dec = () => {
    return { type: COUNTER_DEC };
};

//initial state - good practice
const INITIAL_STATE = {
    counter: 0,
};

//reducer - receive action and do something
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNTER_INC:
            //important - return brand new object!!!
            return { ...state, counter: state.counter + 1 };
        case COUNTER_DEC:
            //important - return brand new object!!!
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};

// export default reducer;
