import {updateNewMessageBodyActionCreator, sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => dispatch(updateNewMessageBodyActionCreator(body)),
        sendMessage: () => dispatch(sendMessageCreator()),
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;