import React,{useState} from 'react'
import './NavIcons.css'
import {Link} from 'react-router-dom'
import UserModal from '../UserModal/UserModal';

function NavIcons() {
    const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='NavIcons'>
        <div className='item'>
           <Link to='/'><i className="fas fa-home"></i></Link> 
        </div>
        <div className='item' onClick={() => setModalOpened(true)}>
            <i className="fas fa-search"></i>
        </div>
        <div className='item'>
            <Link to='/profile'><i className="fas fa-user"></i></Link>
        </div>
        <div className='item'>
            <i className="fas fa-ellipsis-h"></i>
        </div>
      <UserModal modalOpened={modalOpened} setModalOpened={setModalOpened} />          
    </div>
  )
}

export default NavIcons