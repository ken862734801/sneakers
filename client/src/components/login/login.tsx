import "../../styles/login.css";
import { useState } from "react";
export default function Login(props: any){
    // prop passed in from the app.tsx, will check if user is logged in or not
    const {isLoggedIn, setIsLoggedIn} = props;

    //check if screen should show login or sign up
    const [loggingIn, setLoggingIn] = useState<boolean>(true);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [loginEmail, setLoginEmail] = useState<string>("");
    const [loginPassword, setLoginPassword] = useState<string>("");

    function handlePageContent(): void{
        if(loggingIn){
            setLoggingIn(false);
        } else {
            setLoggingIn(true);
        }
    };

    function handleUserSignUp(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();

        const user = {
            firstName,
            lastName,
            email,
            password
        };

        fetch("http://localhost:8080/api/users/signup", {
            method: "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((data)=> {
            console.log(data);
            window.alert("You have successfully created an account!")
            // setLoggingIn(true);
        })
        .catch((error)=> {
            console.log("Error:", error);
        })
    }

    function handleUserLogin(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
      
        const user = {
          email: loginEmail,
          password: loginPassword
        };
      
        fetch("http://localhost:8080/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const token = data.token;
            localStorage.setItem("token", token);
            window.alert("You have successfully signed in!")
            setIsLoggedIn(true);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
      }

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
                                <input type="email" onChange={(e) => setLoginEmail(e.target.value)} required></input>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Password<span>*</span></label>
                                <input type="password" onChange={(e) => setLoginPassword(e.target.value)} required></input>
                            </div>
                            <p className="login-form-terms-text">By signing up for a Sneakers account, you agree to the Sneakers Terms of Use and Privacy Policy.</p>
                            <div className="login-button-container">
                                <button onClick={handleUserLogin} className="login-button" type="submit">Sign In</button>
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
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Last Name<span>*</span></label>
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Email<span>*</span></label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Password<span>*</span></label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                            </div>
                            <p className="login-form-terms-text">By signing up for a Sneakers account, you agree to the Sneakers Terms of Use and Privacy Policy.</p>
                            <div className="login-button-container">
                                <button onClick={handleUserSignUp} className="login-button" type="submit">Create Account</button>
                            </div>
                        </form>
                    </div>
                </section>)
                }
            </div>
        </div>
    )
}