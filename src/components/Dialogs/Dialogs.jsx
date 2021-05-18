import style from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsNames}>
                <div className={`${style.dialogName} ${style.active}`}>
                    Sanya
                </div>
                <div className={style.dialogName}>
                    Alex
                </div>
                <div className={style.dialogName}>
                    Andriy
                </div>
                <div className={style.dialogName}>
                    Pavlo
                </div>
                <div className={style.dialogName}>
                    Dima
                </div>
                <div className={style.dialogName}>
                    Serhiy
                </div>
                <div className={style.dialogName}>
                    Yura
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hello, how are you?</div>
                <div className={style.message}>let's play Call of Duty Warzone!</div>
                <div className={style.message}>Ok, go in the afternoon</div>
                <div className={style.message}>what day is it today?</div>
            </div>
        </div>
    );
}

export default Dialogs;