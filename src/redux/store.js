import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
    _state: {
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
            newMessageBody: '',
        },
        sidebar: {},
    },
    _callSubscriber: () => {
    },
    getState() {
        return this._state;
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
};

export default store;