import React from 'react'
import './FollowersCard.css'

const FollowersCard = () => {
    const Followers = [
        { name: "Andrew Thomas", username: "AndrewThomas", },
        { name: "Hulk Buster", username: "HulkBuster",  },
        { name: "Thor", username: "ThunderMaster",},
        { name: "Natasha", username: "Natasha", },
      ];

  return (
    <div className="FollowersCard">
        <h3>Who is following you</h3>

        {Followers. map((follower, id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src="" alt="img" className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard