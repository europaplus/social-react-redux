import React from 'react';
import {updateNewMessageBodyActionCreator, sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    const onSendMessageClick = () => store.dispatch(sendMessageCreator());
                    const onMessageChange = (body) => store.dispatch(updateNewMessageBodyActionCreator(body));
                    return (
                        <Dialogs dialogPage={state}
                                 sendMessage={onSendMessageClick}
                                 updateNewMessageBody={onMessageChange}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;