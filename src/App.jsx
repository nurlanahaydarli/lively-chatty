import '../src/styles/global.css'
import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Navbar from "./component/Navbar/Navbar";
import Welcome from "./component/Welcome/Welcome";
import SendMessage from "./component/Message/SendMessage";
import Chat from "./component/Chat/Chat";

function App() {
    const [user] = useAuthState(auth);
    return (
        <>
            <Navbar/>
            {!user ? <Welcome/> :
                <>
                    <div className="messages_container">
                        <Chat />
                    </div>
                </>
            }
        </>
    )
}

export default App
