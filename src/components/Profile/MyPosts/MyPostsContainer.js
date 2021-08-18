import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().profilePage;
                    const addPost = () => {
                        const action = addPostActionCreator();
                        store.dispatch(action);
                    };
                    const onPostChange = (text) => {
                        const action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };
                    return (
                        <MyPosts posts={state.posts}
                                 newPostText={state.newPostText}
                                 updateNewPostText={onPostChange}
                                 addPost={addPost}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;