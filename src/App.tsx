// import {navItems} from "./components/Navbar"
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Heading from './components/Navbar/Heading'
import RegisterForm from './components/RegisterForm/RegisterForm';
import UserDetails from './components/UserDetails';
import { IUserData } from './interfaces';

function App() {
  const company = "Jooo";
  const aboutTxt = "About Us";
  const contactInfo = "Contact";
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  const [userData,setUserData] = useState<IUserData>({
    username: "",
    fullName: "",
    email: "",
    address: "",
    password: "",
    phone:"",
});
  return (
    <>
    <Navbar  company={company} aboutTxt={aboutTxt} isLoggedIn={isLoggedIn} contactInfo={contactInfo} setIsLoggedIn={setIsLoggedIn}/>
    <Heading title={"Heading title"}>
      <span>💫</span>
    </Heading>
    {isLoggedIn ?<UserDetails user={userData}/> : <RegisterForm setIsLoggedIn={setIsLoggedIn}
    userData={userData}
    setUserData={setUserData}
    />}
    </>
  )
}

export default App
