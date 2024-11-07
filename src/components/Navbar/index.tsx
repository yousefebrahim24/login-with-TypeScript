// export const navItems = [
//     {text:"learn" , href:"learn.come"},
//     {text:"Refernce" , href:"ref.come"},
// ];
import './index.scss';


const styles = {
    listItem:{
            textDecoration:"none",
            fontSize: "18px"
        },
    list:{
        listStyle: "none",
        display: "flex",
        gap : "10px",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        padding: "10px",
        borderRadius : "10px",
    },
}
interface Iprops {
    company: string;
    aboutTxt: string;
    contactInfo:string
    isLoggedIn: boolean;
    setIsLoggedIn:(val: boolean)=>void;
}
const Navbar = ({company,aboutTxt,contactInfo,isLoggedIn,setIsLoggedIn}:Iprops) => {
    const API_MARGIN = 20;
    // const [loginTxt,setLoginTxt] = useState("LOGIN");
  return (
    <nav>
        <div>
            <ul className='navbar-list' style={{...styles.list, margin: API_MARGIN, transition:"all ease-in 5s"}}>
                <li>
                    <a 
                    style={styles.listItem}
                     href="/">
                        {company}
                     </a>
                </li>
                <li>
                    <a 
                    style={styles.listItem}
                     href="/">
                        Home
                     </a>
                </li>
                <li>
                    <a
                    style={styles.listItem}
                     href="/">
                        {aboutTxt}
                     </a>
                </li>
                <li>
                    <a
                    style={styles.listItem}
                     href="/">
                        {contactInfo}
                     </a>
                </li>
                <li>
                    <button onClick={()=>{
                        setIsLoggedIn(!isLoggedIn);
                        // console.log("logged in");
                        
                    }}
                    style={styles.listItem}>
                        {isLoggedIn ? "LOGOUT" : "LOGIN"}
                     </button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;