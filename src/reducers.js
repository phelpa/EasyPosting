import { ADD,INCREMENT } from './actions';
import { createStore, combineReducers } from 'redux';

const messageReducer = (state = [], action ) => {
    switch(action.type){
        case ADD:
            return [
                ...state, {
                author: action.author,
                message: action.message
            }];

            default:
                return state;
    }
};


const likesReducer = (state = 0, action) => {
    switch(action.type){
        case INCREMENT:
            return (
                state = state + 1
            )

            default:
                return state;
    }
}


const rootReducer = combineReducers({
    messages: messageReducer,
    likes: likesReducer
});

//const store = createStore(messageReducer);
const store = createStore(rootReducer);

export default store;