import React,{useState,useEffect, useContext} from 'react'
import SuggestedUser from '../SuggestedUser/SuggestedUser'
import axios from 'axios'
import Profile from "../../img/profileImg.jpg";
import './UsersList.css'
import { Context } from '../../context/Context'

function UsersList() {
  const { dispatch, user } = useContext(Context)
  const [users, setUsers] = useState([])
  const [follow, setFollow] = useState()
  const [unfollow, setunFollow] = useState()
  const [search, setSearch] = useState([])
  const [loading,setLooading] = useState(true)
  const [following, setFollowing] = useState();


  const getUser = async () => {
      const response = await axios.get(`http://localhost:4000/api/user/?search=${search}`)
      setUsers(response.data)
      setLooading(false)
  }
  useEffect(() => {
      getUser()
      console.log(users)
  }
  , [search])

  useEffect(() => {
    if(follow){
    console.log('current user',user._id)  
    axios.post(`http://localhost:4000/api/user/${follow}/follow`, {
        userId: user._id,
      })
      .then(function (response) {
        console.log(response);
        alert('user has been followed..')
        getUser()
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}
, [follow])
useEffect(() => {
  if(unfollow){
  console.log('current user',user._id)  
  axios.post(`http://localhost:4000/api/user/${unfollow}/unfollow`, {
      userId: user._id,
    })
    .then(function (response) {
      console.log(response);
      alert('user has been unfollowed..')
      getUser()
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
, [unfollow])

  const handleFollow = (id)=>{
    console.log('--------',id)
    // console.log(user)
    // axios.post(`http://localhost:4000/api/user/${id}/follow`, {
    //   UserId: user.id,
    // })
    // .then(function (response) {
    //   console.log(response);
    //   alert('user has been followed..')
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    
  }

  return (
    <div className='UsersList'>
      <input 
        class="form-control" 
        placeholder="what's in your mind..." 
        onChange={(e)=>{setSearch(e.target.value)}}
        value={search}
        ></input>
      { loading?(
         <>
         <h3>Loading..</h3>
         </>
      ):(
        <div className='Users'>
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
                <button className='btn btn-info follow_btn'
                 onClick={()=>{setunFollow(user._id)}}
                >unfollow</button>
                ):(
                <button className='btn btn-info follow_btn'
                 onClick={()=>{setFollow(user._id)}}
                >follow</button>
                )}
              </div>
            )
          }
          )}
        </div>
      )}
    </div>
    
  )
}

export default UsersList