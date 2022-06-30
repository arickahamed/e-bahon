import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import infoContext from "../../context/infoContext";
import app from "../../firebase/firebaseConfig";
import styles from "./Login.module.css";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const Login = () => {

    let navigate = useNavigate();
    const {setUser} = useContext(infoContext);

    const handleGoogleClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const {displayName, email} = result.user;
                const name = displayName.split(" ").find((name)=> (name.length > 3));
                setUser({name, email});
                navigate("/", { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                const email = error.customData.email;
                console.log(errorMessage, email);
            });
    };

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form}>
                <h2>Log In</h2>
                <input
                    type="email"
                    name="email"
                    id="login_email"
                    placeholder="Enter Your Email Here"
                />
                <br />
                <input
                    type="password"
                    name="password"
                    id="login_password"
                    placeholder="Enter Your Password Here"
                />
                <br />
                <input type="checkbox" name="remember_me" />
                Remember me
                <br />
                <button>Login</button>
            </div>

            <div className={styles.other_login}>
                <h3 onClick={() => handleGoogleClick()} className={styles.h3}>
                    Login with Google
                </h3>
                <h3 className={styles.h3}>Login with Facebook</h3>
            </div>
        </div>
    );
};

export default Login;
