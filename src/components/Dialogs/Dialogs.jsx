import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import {addMessageActionCreator, addMessageTextActionCreator} from '../../redux/dialogs_reducer'

const Dialogs = (props) => {
    let addMessage = React.createRef();
    let addMsg = () => {
        props.addMessage();
    }

    let addText = () => {
        let get = addMessage.current.value;
        props.changeText(get);
    }
    
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsNames}>
                {props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)}
            </div>

            <div className={style.messages}>
                {props.messages.map(m => <Messages message={m.message} />)}
            </div>

            <div>
                <textarea onChange={addText} value={props.TextChange} ref={addMessage}></textarea>
            </div>
            <div>
                <button onClick={addMsg}>add</button>
            </div>
        </div>
        
    );
}

export default Dialogs;