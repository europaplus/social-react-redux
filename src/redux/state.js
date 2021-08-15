const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
        ],
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

export default state;