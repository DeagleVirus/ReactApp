import posts from './Posts.module.css'
import Post from './Post/Post'


const Posts = (props) => {
    return (
        <div className={posts.general}>
            <div>
                 <h2>My posts</h2>
                <div>
                    <textarea></textarea>
                    <button>new post</button>
                </div>
            </div>
            {props.posts.map(m => <Post message={m.message} likes={m.likes} />)}
        </div>
    );
}

export default Posts;