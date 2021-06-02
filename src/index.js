import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addDialogText, addPost, addPostText} from './redux/state'
import state from './redux/state'
import {observing} from './redux/state'

let rerendering = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addPostText={addPostText} addDialogText={addDialogText}/>
        </React.StrictMode>,
  document.getElementById('root')
);
    reportWebVitals();
}

rerendering(state)

observing(rerendering)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

