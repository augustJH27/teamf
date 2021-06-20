import moviesReducer from '../../reducers/reducers/moviesReducer';
import authReducer from '../../reducers/user/auth';
import { combineReducers } from 'redux';
import messageReducer from '../../reducers/user/message';

/* Main reducer, we can define a new one and put it here */
const rootReducer = combineReducers({
    moviesReducer, authReducer, messageReducer
});

export default rootReducer;

//changes have been made in import userReducer
//and user Reducer has been declared