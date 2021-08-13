import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="./images/Landscape-Color.jpg" alt="head" width="100%" height="300px"></img>
            </div>
            <div>
                <img src='./images/download.png' alt='avatar' width="190px"></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;