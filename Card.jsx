import profilePic from "./assets/r.gif"
import Button from "./Button";

function Card(){
    return(
        <div className="card">
            <img className="card-img" alt="Profile Picture" src={profilePic}></img>
            <h2 className="card-title">Alfonso Zazueta</h2>
            <p className="card-text">Software Engineer and play Pádel</p>
            
            <Button></Button>


        </div>
    );
}

export default Card