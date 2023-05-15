export default function Account(props: any){

    const {userInformation, setIsLoggedIn} = props;
    

    function handleLogout() {
        // Clear the token from local storage
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.alert("You have succesfully logged out!")
      }

    return(
        <div className="account-page">
            <div className="account-page-container">
                <p>{`${userInformation.firstName} ${userInformation.lastName}`}</p>
                <p>{userInformation.email}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}