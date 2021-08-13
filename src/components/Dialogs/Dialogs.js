import React from 'react';
import styled from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={styled.dialogs}>
            <div className={styled.dialogsItems}>
                <div className={styled.dialog + ' ' + styled.active}>
                    <NavLink to="/dialogs/1">William</NavLink>
                </div>
                <div className={styled.dialog}>
                    <NavLink to="/dialogs/2">Dim</NavLink>
                </div>
                <div className={styled.dialog}>
                    <NavLink to="/dialogs/3">Roma</NavLink>
                </div>
                <div className={styled.dialog}>
                    <NavLink to="/dialogs/4">Sanya</NavLink>
                </div>
            </div>
            <div className={styled.messages}>
                <div className={styled.message}>Hi</div>
                <div className={styled.message}>How are you</div>
                <div className={styled.message}>Im fine</div>
            </div>
        </div>
    );
};

export default Dialogs;