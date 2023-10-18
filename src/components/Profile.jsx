import React,{useContext} from 'react'
import userContext from '../context/userContext'



function Profile() {
    const {user} = useContext(userContext)
  if(!user) return <div> Please log in</div>

  return <div> welcome {user.username}</div>
}
export default Profile