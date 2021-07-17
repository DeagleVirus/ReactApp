import Preloader from '../../common/preloader/Preloader';
import info from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    return (
        <div /* className={info.general} */>
            <img src={props.profile.photos.large} />
            <div>
                {props.profile.aboutMe}
            </div>

            <div>
                {props.profile.fullName}
            </div>
          </div>
    );
}

export default ProfileInfo;