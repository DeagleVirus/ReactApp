import nav from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={nav.navigation}>
          <div>
            <a href='/profile'>My profile</a>
          </div>
          <div>
            <a href='/dialogs'>Messages</a>
          </div>
          <div>
            <a href='/news'>News</a>
          </div>
          <div>
            <a href='/music'>Music</a>
            </div>
          <div>
            <a href='/settings'>Settings</a>
          </div>
      </nav>
    );
}

export default NavBar;