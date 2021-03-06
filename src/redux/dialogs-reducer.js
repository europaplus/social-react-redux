const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    // Object.assign(stateCopy, state);
    switch (action.type) {
        case SEND_MESSAGE:
            if (!state.newMessageBody)
                return state;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: state.newMessageBody}],
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageBody: action.body,
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body});

export default dialogsReducer;