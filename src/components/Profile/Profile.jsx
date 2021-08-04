import prof from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {

    return (
        <div className={prof.content}>
          <ProfileInfo profile={props.profile}/>
          <PostsContainer />
        </div>
    );
}

export default Profile;