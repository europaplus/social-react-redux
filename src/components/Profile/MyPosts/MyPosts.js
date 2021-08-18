import Post from './Post/Post';
import styled from './MyPosts.module.css';
import React from "react";

const MyPosts = (props) => {
    const postsMessages = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);
    const newPostElement = React.createRef();
    const onAddPost = () => {
        props.addPost();
    };
    const onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value);
    };
    return (
        <div className={styled.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        placeholder='Create post'
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button className='btn btn-success'
                            onClick={onAddPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={styled.posts}>
                {postsMessages}
            </div>
        </div>
    );
};

export default MyPosts;