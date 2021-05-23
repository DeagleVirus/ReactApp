import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={`${style.dialogName} ${style.active}`}>
            <NavLink to={`${'/dialogs/'}${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;