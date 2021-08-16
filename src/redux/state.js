let rerenderEntireTree = () => {}

const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 11},
            {id: 2, message: 'It\'s my first post', likesCount: 12},
        ],
        newPostText: "",
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'William'},
            {id: 2, name: 'Dimych'},
            {id: 3, name: 'Roman'},
            {id: 4, name: 'Sanya'},
        ],
        messages: [
            {id: 5, message: 'Hi'},
            {id: 6, message: 'How are you'},
            {id: 7, message: 'I\'m fine'},
            {id: 8, message: 'What do you want?'},
        ],
    },
};

export const addPost = () => {
    const newPost = {id: 5, message: state.profilePage.newPostText, likesCount: 13};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state)
};

export const subscribe = (observe) => {
    rerenderEntireTree = observe;
}

export const updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export default state;