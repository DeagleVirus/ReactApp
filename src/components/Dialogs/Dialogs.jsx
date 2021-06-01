import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    let addMessage = React.createRef();
    let add = () => {
        let text = addMessage.current.value
        alert(text)
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
                <textarea ref={addMessage}></textarea>
            </div>
            <div>
                <button onClick={add}>add</button>
            </div>
        </div>
        
    );
}

export default Dialogs;