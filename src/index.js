import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store'
import {Provider} from 'react-redux'

/* state={state} addPost={addPost} addPostText={addPostText} addDialogText={addDialogText} */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
);
reportWebVitals();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

