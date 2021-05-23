import info from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={info.general}>
            <img src="https://i.pinimg.com/originals/4d/b0/dd/4db0ddad2581a98832b486d6ff9788e2.jpg" />
            <div>
                avatar
            </div>

            <div>
                profile description
            </div>
          </div>
    );
}

export default ProfileInfo;