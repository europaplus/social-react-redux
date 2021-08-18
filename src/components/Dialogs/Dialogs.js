import React from 'react';
import styled from './Dialogs.module.css';
import Message from './Message/Messages';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {
    const state = props.dialogPage;
    const dialogsElements = state.dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = state.messages
        .map((m) => <Message id={m.id} message={m.message}/>);
    const onSendMessageClick = () => {
        props.sendMessage();
    }
    const onMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={styled.dialogs}>
            <div className={styled.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styled.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange}
                              placeholder="Enter your message"
                              value={state.newMessageBody}
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick} className="btn btn-success">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;