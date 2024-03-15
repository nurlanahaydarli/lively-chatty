import img from '../../assets/logo.png'
import {GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import {auth} from "../../firebase";

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    return (
        <>
            <div className="welcome_container">
                <img src={img} alt=""/>
                <h1>Welcome my Chatty-Bean app! Sign in and enjoy it!</h1>
                <button onClick={googleSignIn} type='button'>Sign in</button>
            </div>
        </>
    )
}


export default Welcome