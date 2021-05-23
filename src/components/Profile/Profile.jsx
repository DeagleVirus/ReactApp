import prof from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={prof.content}>
          <ProfileInfo />
          <Posts posts={props.posts}/>
        </div>
    );
}

export default Profile;