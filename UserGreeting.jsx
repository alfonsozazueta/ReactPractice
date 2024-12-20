function UserGreeting(props){
    return(props.isLoggedIn ? 
    <h2 className="welcome-msg">Welcome, {props.username}</h2> : 
    <h2 className="login-prompt">Please log In</h2>)
}

export default UserGreeting