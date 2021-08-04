import {addMessageActionCreator, addMessageTextActionCreator} from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux'
import { withRedirect } from '../../HOC/withRedirect';

/* const DialogsContainer = (props) => {
    
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
} */

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        TextChange: state.dialogsPage.TextChange,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        changeText: (get) => dispatch(addMessageTextActionCreator(get))
    }
}

const RedirectContainerComponent = withRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectContainerComponent);


export default DialogsContainer;