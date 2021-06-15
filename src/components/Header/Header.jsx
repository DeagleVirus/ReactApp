import { NavLink } from 'react-router-dom';
import h from './Header.module.css'

const Header = () => {
    return (
        <header className={h.header}>
          <div className={h.on}>
          <NavLink title="Main" to='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" />
          </NavLink>
          </div>
      </header>
    );
}

export default Header;