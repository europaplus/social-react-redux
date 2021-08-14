import Post from './Post/Post';
import styled from './MyPosts.module.css';

const MyPosts = () => {
    const postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ];
    const postsMessages = postData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);
    return (
        <div className={styled.postsBlock}>
			<h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Create post'></textarea>
                </div>
                <div>
                    <button className='btn btn-success'>Add post</button>
                </div>
            </div>
            <div className={styled.posts}>
                {postsMessages}
            </div>
        </div>
    );
};

export default MyPosts;