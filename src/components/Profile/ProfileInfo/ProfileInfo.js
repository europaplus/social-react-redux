import styled from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="./images/Landscape-Color.jpg" alt="head" width="100%" height="300px"/>
            </div>
            <div>
                <img src='./images/download.png' alt='avatar' width="190px"/>
            </div>
            <div className={styled.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;