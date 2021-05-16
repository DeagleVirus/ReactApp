import prof from './Profile.module.css'
import Posts from './Posts/Posts'

const Profile = () => {
    return (
        <div className={prof.content}>
          <img src="https://i.pinimg.com/originals/4d/b0/dd/4db0ddad2581a98832b486d6ff9788e2.jpg" />
          <div>
            avatar
          </div>

          <div>
            profile description
          </div>
          <Posts />
      </div>
    );
}

export default Profile;