import styled from './Post.module.css';

const Post = (props) => {
	return (
		<div className={styled.item}>
			<img src='https://seeklogo.com/images/A/avatar-logo-E20E2BD62B-seeklogo.com.png'></img>
			{props.message}
			<div>
				<span>like</span> {props.likesCount}
			</div>
		</div>
	);
};

export default Post;