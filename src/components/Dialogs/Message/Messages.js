import styled from "../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={styled.message}>
            {props.message}
        </div>
    );
};

export default Message;