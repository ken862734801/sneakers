export default function Account(props: any){

    const {setIsLoggedIn} = props;
    
    const token = localStorage.getItem("token");

    function handleLogout() {
        // Clear the token from local storage
        localStorage.removeItem('token');
      
        // Update the isLoggedIn state to false or perform any other necessary actions
        setIsLoggedIn(false);
      }

    return(
        <div>
            <p>This is your account!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}