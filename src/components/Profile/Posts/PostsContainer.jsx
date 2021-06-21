import { connect } from 'react-redux';
import { addPostActionCreator, addPostTextActionCreator } from '../../../redux/profile_reducer';
import Posts from './Posts'

/* const PostsContainer = (props) => {

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
} */

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        TextChange: state.profilePage.TextChange,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        addChangeText: (get) => dispatch(addPostTextActionCreator(get)),
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
