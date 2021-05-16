import nav from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={nav.navigation}>
          <div>
            Home
          </div>
          <div>
            My profile
            </div>
          <div>
            Messages
            </div>
          <div>
            Friends
            </div>
          <div>
            Settings
          </div>
      </nav>
    );
}

export default NavBar;