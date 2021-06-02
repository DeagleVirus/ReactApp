import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={`${style.dialogName} ${style.active}`}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mangekyou_Sharingan_Kakashi.svg/480px-Mangekyou_Sharingan_Kakashi.svg.png' alt='sharingan'/>
            <NavLink to={`${'/dialogs/'}${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;