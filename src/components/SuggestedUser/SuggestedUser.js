import React,{useEffect,useState} from 'react'
import './SuggestedUser.css'
import Profile from "../../img/profileImg.jpg";
import axios from 'axios';

function SuggestedUser() {
  const [users, setUsers] = useState([])


  const getSuggestedUser = async () => {
    const response = await axios.get('http://localhost:4000/api/user/random')
     setUsers(response.data)
  }
  useEffect(() => {
    getSuggestedUser()
  }
  , [])

  return (
    <div className='SuggestedUsers shadow-sm mt-2'>
        <h6>Who is following you</h6>
        {users.map((user, id)=>{
          return (
            <div className='User' key={id}>
              <div className='d-flex'>  
                <img src={Profile} alt='avatar' />
                <div className='userInfo mt-3 ml-1'>
                  <h6>{user.username}</h6>
                </div>  
              </div>  
              {user.isFollowing?(
               <button className='btn btn-info follow_btn'>follow</button>
              ):(
               <button className='btn btn-info unfollow_btn'>Unfollow</button>
              )}
            </div>
          )
        }
        )}
    </div>
  )
}

export default SuggestedUser