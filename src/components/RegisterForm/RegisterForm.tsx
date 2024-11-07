import { ChangeEvent, useState } from "react";
import "./index.scss";
import { IUserData } from "../../interfaces";
import { formInputList } from "../../data";


interface Iprops {
    setIsLoggedIn:(val: boolean)=>void;
    userData: IUserData
    setUserData:(user:IUserData)=> void;
}
const RegisterForm = ({setIsLoggedIn,userData,setUserData}:Iprops)=>{
    const [inputArr, setInputArr] = useState(formInputList);
    // const [username, setUsername] = useState("");
    // const [email,setEmail] = useState("");
    // const [address, setAddress] = useState("");
    // const [password,setPassword] = useState("");
    // insitial state is object

    // ** Handlers
    const onChangeHandler =(event: ChangeEvent<HTMLInputElement>)=>{
        // setUsername(event.target.value);
        // setsetEmail(event.target.value);
        // setsetAddress(event.target.value);
        // setsetPassword(event.target.value);
        const {value, name}= event.target
        setUserData({
            ...userData,
            [name] :value,
        })
    };
    // ** Renders
    const renderFormInputList = inputArr.map((input,idx)=>(
        <div key={idx}>
            <div className="input-wrapper">
            <label htmlFor={input.id}>{input.label}</label>
            <input type={input.type} name={input.name} id={input.id}  placeholder="Enter Your UserName" value={userData[input.name]} onChange={onChangeHandler}/>
        </div>
        <button onClick={()=>{
            console.log(`Remove ${idx}`);
            
        }}>❌{idx}</button>
        </div>
    ))
    return (
        <div>
            {/* <h3 style={{margin:"30px"}}>Your Email : {email}</h3> */}
            <form
            onSubmit={(event)=>{
            event.preventDefault;
            }} 
            action=""
            className="login-form">
                {renderFormInputList}
                {/* <br />
                <div className="input-wrapper">
                    <label htmlFor="email">Email :</label>
                    <input type="text"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        value={userData.email}
                    //     onChange={(event)=>{
                    //     setEmail(event.target.value);
                    // }}
                    onChange={onChangeHandler}
                    />
                </div>
                <br />
                <div className="input-wrapper">
                    <label htmlFor="address">Address :</label>
                    <input type="text"
                        name="address"
                        id="address"
                        placeholder="Enter Your Address"
                        value={userData.address}
                    //     onChange={(event)=>{
                    //     setAddress(event.target.value);
                    // }}
                    onChange={onChangeHandler}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="phone">Phone :</label>
                    <input type="text"
                        name="phone"
                        id="phone"
                        placeholder="Enter Your Phone Number"
                        value={userData.phone}
                    //     onChange={(event)=>{
                    //     setAddress(event.target.value);
                    // }}
                    onChange={onChangeHandler}
                    />
                </div>
                <br />
                <div className="input-wrapper">
                    <label htmlFor="password">Password :</label>
                    <input type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Your Password"
                        value={userData.password}
                    //     onChange={(event)=>{
                    //     setPassword(event.target.value);
                    // }}
                    onChange={onChangeHandler}
                    />
                </div> */}
                <br />
                <button onClick={()=>setIsLoggedIn(true)}>LOGIN</button>
            </form>
        </div>
    )
}
export default RegisterForm;