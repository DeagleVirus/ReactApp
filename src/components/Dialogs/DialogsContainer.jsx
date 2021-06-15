import {addMessageActionCreator, addMessageTextActionCreator} from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    
    let state = props.store.getState().dialogsPage;

    let addMsg = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let addText = (get) => {
        props.store.dispatch(addMessageTextActionCreator(get))
    }
    
    return (
        <Dialogs addMessage={addMsg} changeText={addText} dialogs={state.dialogs} messages={state.messages} TextChange={state.TextChange}/>
    );
}

export default DialogsContainer;