import React from 'react'
import posts from './Posts.module.css'
import Post from './Post/Post'


const Posts = (props) => {

    let newPostValue = React.createRef();

    let newPost = () => {
        props.addPost()
    }

    let changeText = () => {
        let get = newPostValue.current.value;
        props.addChangeText(get)
    }

    return (
        <div className={posts.general}>
            <div>
                 <h2>My posts</h2>
                    <div>
                        <textarea onChange={changeText} value={props.TextChange} ref={newPostValue} className={posts.postField}></textarea>
                    </div>
                    <div>
                    <button onClick={newPost} className={posts.postButton}>new post</button>
                    </div>
            </div>
            {props.posts.map(m => <Post message={m.message} likes={m.likes} />)}
        </div>
    );
}

export default Posts;