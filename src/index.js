import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postInfo = [
  {message: 'hello, lets go to the gym', likes: '5'},
  {message: 'good idea my friend!', likes: '3'}
]

let dialogInfo = [
  {id: '1', name:'Sanya'},
  {id: '2', name:'Alex'},
  {id: '3', name:'Andriy'},
  {id: '4', name:'Pavlo'},
  {id: '5', name:'Dima'},
  {id: '6', name:'Serhiy'},
  {id: '7', name:'Yura'}
]

let messagesInfo = [
  {message: "Hello, how are you?"},
  {message: "let's play Call of Duty Warzone!"},
  {message: "Ok, go in the afternoon"},
  {message: "what day is it today?"}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={postInfo} dialogs={dialogInfo} messages={messagesInfo}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
