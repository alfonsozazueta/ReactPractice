import Header from "./header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Student from "./student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import profilePicture from "./ProfilePicture";

function App() {
  return(
    <>
      <Header></Header>
      <Food></Food>
      

      <Card></Card>
      
      
      <Card></Card>
      <hr></hr>
      <List></List>
      <hr />
      <Student name="Spongebob" age={28} isStudent = {false}></Student>
      <UserGreeting isLoggedIn = {true} username = "CryptoPonch"></UserGreeting>
      
      <Footer></Footer>  

    </>
    
  );
}

export default App
