import { NavLink } from 'react-router-dom';
import nav from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={nav.navigation}>
          <div>
            <NavLink to='/profile' activeClassName={nav.activeButton}>My profile</NavLink>
          </div>
          <div>
            <NavLink to='/dialogs' activeClassName={nav.activeButton}>Messages</NavLink>
          </div>
          <div>
            <NavLink to='/news' activeClassName={nav.activeButton}>News</NavLink>
          </div>
          <div>
            <NavLink to='/music' activeClassName={nav.activeButton}>Music</NavLink>
            </div>
          <div className={nav.settings}>
            <NavLink to='/settings' activeClassName={nav.activeButton}>Settings</NavLink>
          </div>
          <div>
            <NavLink to='/users' activeClassName={nav.activeButton}>Users</NavLink> 
          </div>
      </nav>
    );
}

export default NavBar;