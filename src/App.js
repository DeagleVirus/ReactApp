import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="Application">
          <Header />
          <NavBar />
          <div className='Application-content'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} 
                                                        store={props.store} />} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
                                                        store={props.store}/>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
