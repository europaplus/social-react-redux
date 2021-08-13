import styled from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
		  My posts
		  <div>
			<textarea placeholder='Create post'></textarea>
			<button className='btn btn-success'>Add post</button>
		  </div>
		  <div>
			  <Post message='Hi, how are you?' likesCount='0'/>
			  <Post message="It's my first post" likesCount='2'/>
		  </div>
		</div>
	);
};

export default MyPosts;