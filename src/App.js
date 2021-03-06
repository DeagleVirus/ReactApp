import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="Application">
          <HeaderContainer />
          <NavBar />
          <div className='Application_content'>
          <Route exact path='/' component={WelcomePage} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/login' render={() => <Login />} />
          </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
