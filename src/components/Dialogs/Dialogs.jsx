import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import {addMessageActionCreator, addMessageTextActionCreator} from '../../redux/dialogs_reducer'

const Dialogs = (props) => {

    let addMessage = React.createRef();
    let addMsg = () => {
        props.dispatch(addMessageActionCreator())
        addMessage.current.value = ''
    }

    let addText = () => {
        let get = addMessage.current.value
        props.dispatch(addMessageTextActionCreator(get))
    }
    
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsNames}>
                {props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)}
            </div>

            <div className={style.messages}>
                {props.state.messages.map(m => <Messages message={m.message} />)}
            </div>

            <div>
                <textarea onChange={addText} value={props.state.TextChange} ref={addMessage}></textarea>
            </div>
            <div>
                <button onClick={addMsg}>add</button>
            </div>
        </div>
        
    );
}

export default Dialogs;