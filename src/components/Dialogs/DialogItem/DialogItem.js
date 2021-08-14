import styled from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const name = props.name;
    const path = `/dialogs/${props.id}`
    return (
        <div className={styled.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};

export default DialogItem;