import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={`${style.dialogName} ${style.active}`}>
            <img src='https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png' />
            <NavLink to={`${'/dialogs/'}${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;