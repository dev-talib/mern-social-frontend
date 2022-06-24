import React from 'react'
import './InfoCard.css'
import ProfileCard from '../ProfileCard/ProfileCard'

function InfoCard() {
  return (
    <div className='InfoCard shadow-sm'>
        <div className='InfoCard_header'>
           <h5>Your Info</h5>
           {/* edit icon */}
            <div><i className="fas fa-edit"></i></div>
        </div>
        <div className='InfoCard_body'>
           <ProfileCard/>
        </div>
    </div>
  )
}

export default InfoCard