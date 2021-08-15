import React from 'react';
import styled from './Dialogs.module.css';
import Message from './Message/Messages';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.state.messages
        .map((m) => <Message id={m.id} message={m.message}/>);
    return (
        <div className={styled.dialogs}>
            <div className={styled.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styled.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;