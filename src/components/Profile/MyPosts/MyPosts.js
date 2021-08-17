import Post from './Post/Post';
import styled from './MyPosts.module.css';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

const MyPosts = (props) => {
    const postsMessages = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);
    const newPostElement = React.createRef();
    const addPost = () => props.dispatch(addPostActionCreator());
    const onPostChange = () => props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
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
                            onClick={addPost}>
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