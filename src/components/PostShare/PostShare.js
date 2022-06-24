import React from 'react'
import './PostShare.css'
import Profile from "../../img/profileImg.jpg";
import PostModal from '../PostModal/PostModal'

function PostShare() {
  const [modalOpened, setModalOpened] = React.useState(false);
  return (
    <div className="PostShare shadow-sm">
        <div className='PostShare_input'>
            <img src={Profile} alt='avatar' className='avatar' />
            <input class="form-control" placeholder="what's in your mind..." ></input>
        </div>
        <div className="PostShare_icons" >
            <div className='item' >
              <i className="fas fa-camera" ></i>
            </div>
            <div className='item'>
                <i className="fas fa-video"></i>
            </div>
            <div className='item' onClick={()=>setModalOpened(true)}>
                <i className="fas fa-image"></i>
            </div>
            <div className='item'>
                <i className="fas fa-location"></i>
            </div>
            <div className='item'>
               <button className='btn btn-primary'>share</button>
            </div>            
        </div>
        <PostModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> 
    </div>
  )
}

export default PostShare