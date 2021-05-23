import style from './../Dialogs.module.css'

const Messages = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    );
}

export default Messages;