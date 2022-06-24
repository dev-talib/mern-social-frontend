import React,{useContext} from 'react'
import axios from 'axios';
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import './ProfileCard.css'
import { Context } from '../../context/Context'

function ProfileCard(){
  return (
    <div className='ProfileCard'>
        <div className='ProfileCard_cover'>
            <img src={Cover} alt='cover' />
        </div>
        <div className='ProfileCard__avatar'>
            <img src={Profile} alt='avatar' />
        </div>    
        <div className='ProfileCard__info'>
            <div className='ProfileCard__info__name text-center'>
                <h5>Helena</h5>
                <h6>web designer</h6>
            </div>
        </div>         
    </div>
  )
}

export default ProfileCard