import posts from './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
    return (
        <div>
            <div>
                 My posts
                <div>
                    <textarea></textarea>
                    <button>new post</button>
                </div>
            </div>
            <Post message='hello, lets go to the gym' likes='5'/>
            <Post message='good idea my friend!' likes='3'/>
        </div>
    );
}

export default Posts;