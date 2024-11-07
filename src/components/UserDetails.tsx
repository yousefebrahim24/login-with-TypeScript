import { IUserData } from "../interfaces"

interface Iprops {
    user: IUserData
    
}
const UserDetails = ({user}:Iprops) => {
  return (
    <div style={{margin:"30px"}}>
    <h3>Username:{user.username}</h3>
    <h3>Email:{user.email}</h3>
    <h3>Adress:{user.address}</h3>
    <h3>Phone:{user.phone}</h3>
    </div>
  )
}

export default UserDetails