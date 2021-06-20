import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_index.scss';
import App from './App';
// import store from './store/store';

//Redux
import thunk from 'redux-thunk'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducers/reducers/rootReducer';

const middleware = [thunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
