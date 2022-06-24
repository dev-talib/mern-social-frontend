import React from 'react'
import './Home.css'
import PostShare from '../../components/PostShare/PostShare'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import Posts from '../../components/Posts/Posts'
import InfoCard from '../../components/InfoCard/InfoCard'
import SuggestedUser from '../../components/SuggestedUser/SuggestedUser'
import TrendCard from '../../components/TrendCard.js/TrendCard'
import NavIcons from '../../components/NavIcons/NavIcons'
import axios from 'axios'

function Home() {
  
  // profile detail
  




  return (
    <div className='HomeContainer bg-light'>
      <div className='row'>
        <div className='col-md-3 col_1' >
          <InfoCard />
          <SuggestedUser />
        </div>
        <div className='col-md-6  col_2'>
          <PostShare />
          <Posts />
        </div>  
        <div className='col-md-3 col_3'>
          <NavIcons/>
          <TrendCard />
        </div>  
      </div>
    </div>
  )
}

export default Home