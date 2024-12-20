
function Button(){
    const handleClick = (e) => e.target.textContent = "Ouch!";
    
    
    return(
             <button className="button" onDoubleClick={(e) => handleClick(e)}>Click Me!</button>
    );
}

export default Button