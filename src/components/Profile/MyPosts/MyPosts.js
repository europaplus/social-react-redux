import Post from './Post/Post';
import styled from './MyPosts.module.css';
import React from "react";

const MyPosts = (props) => {
    const postsMessages = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);
    const newPostElement = React.createRef();
    const addPost = () => {
        const text = newPostElement.current.value;
        alert(text);
    };
    return (
        <div className={styled.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Create post' ref={newPostElement}></textarea>
                </div>
                <div>
                    <button className='btn btn-success' onClick={addPost}>
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