import "../../styles/login.css";
import { useState } from "react";
export default function Login(props: any){
    // prop passed in from the app.tsx, will check if user is logged in or not
    const {isLoggedIn} = props;

    //check if screen should show login or sign up
    const [loggingIn, setLoggingIn] = useState<boolean>(true);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handlePageContent(): void{
        if(loggingIn){
            setLoggingIn(false);
        } else {
            setLoggingIn(true);
        }
    };

    return(
        <div className="login-page">
            <div className="login-page-container">
                {loggingIn ? 
                    (<section className="login">
                    <div className="login-container">
                        <form className="login-form">
                            <h2>Sign In</h2>
                            <p className="login-form-cta-text">Don't have an account? <span className="signup-text orange" onClick={()=> handlePageContent()}>Click here!</span></p>
                            <div className="input-group">
                                <label htmlFor="">Email<span>*</span></label>
                                <input type="email" required></input>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Password<span>*</span></label>
                                <input type="password" required></input>
                            </div>
                            <p className="login-form-terms-text">By signing up for a Sneakers account, you agree to the Sneakers Terms of Use and Privacy Policy.</p>
                            <div className="login-button-container">
                                <button className="login-button" type="submit">Sign In</button>
                            </div>
                        </form>
                    </div>
                </section>):
                    (<section className="signup">
                    <div className="signup-container">
                        <form className="signup-form">
                            <h2>Create Account</h2>
                            <p className="signup-form-cta-text">Already have an account?<span className="signup-text orange" onClick={()=> handlePageContent()}> Click here!</span></p>                            
                            <div className="input-group">
                                <label htmlFor="">First Name<span>*</span></label>
                                <input type="text" required></input>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Last Name<span>*</span></label>
                                <input type="text" required></input>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Email<span>*</span></label>
                                <input type="email" required></input>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Password<span>*</span></label>
                                <input type="password" required></input>
                            </div>
                            <p className="login-form-terms-text">By signing up for a Sneakers account, you agree to the Sneakers Terms of Use and Privacy Policy.</p>
                            <div className="login-button-container">
                                <button className="login-button" type="submit">Create Account</button>
                            </div>
                        </form>
                    </div>
                </section>)
                }
            </div>
        </div>
    )
}