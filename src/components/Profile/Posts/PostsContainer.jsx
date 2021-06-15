import { addPostActionCreator, addPostTextActionCreator } from '../../../redux/profile_reducer';
import Posts from './Posts'

const PostsContainer = (props) => {

    let state = props.store.getState();

    let onNewPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onChangeText = (get) => {
        props.store.dispatch(addPostTextActionCreator(get));
    }

    return (
        <Posts addPost={onNewPost} addChangeText={onChangeText} TextChange={state.profilePage.TextChange} posts={state.profilePage.posts}/>
    );
}

export default PostsContainer
