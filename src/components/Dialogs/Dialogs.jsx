import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsNames}>
                {props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)}
            </div>

            <div className={style.messages}>
                {props.messages.map(m => <Messages message={m.message} />)}
            </div>
        </div>
    );
}

export default Dialogs;