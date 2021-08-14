import React from 'react';
import styled from './Dialogs.module.css';
import Message from './Message/Messages';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    const dialogData = [
        {id: 1, name: 'William'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Roman'},
        {id: 4, name: 'Sanya'},
    ];
    const messageData = [
        {id: 5, message: 'Hi'},
        {id: 6, message: 'How are you'},
        {id: 7, message: 'I\'m fine'},
        {id: 8, message: 'What do you want?'},
    ];
    const dialogsElements = dialogData
        .map((d) => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = messageData
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