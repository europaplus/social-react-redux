import styled from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<img src="./images/Landscape-Color.jpg" alt="head" width="100%" height="300px"/>*/}
            </div>
            <div className={styled.descriptionBlock}>
                <img src={props.profile.photos.large} alt='avatar'/>
                <div>
                    {console.log(props)}
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;