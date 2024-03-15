import {auth} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const Message = ({message}) => {
    const [user] = useAuthState(auth);
    return (
        <>
            <div
                className={`chat-bubble  ${message.uid === user.uid ? "right_top" : "left_top"}`}>
                <div className={`${message.uid === user.uid ? "right" : "left"}`}>
                    <img
                        className="chat-bubble__left"
                        src={message.avatar}
                        alt="user avatar"
                    />
                    <div className="chat-bubble__right">
                        <p className="user-name">{message.name}</p>
                        <p className="user-message">{message.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message