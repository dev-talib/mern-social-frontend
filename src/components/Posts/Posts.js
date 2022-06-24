import React,{useState, useEffect} from 'react'
import './Posts.css'
import mediaJSON from '../../Data'
import axios from 'axios'


function Posts() {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const response = await axios.get('http://localhost:4000/api/post/all')
        setPosts(response.data)
    }
    useEffect(() => {
        getPosts()
    }
    , [])

  return (
     <div className='posts'>
          {posts.map((post, id)=>{
            return (
                <div className='post shadow-lg' key={id}>
                    <img src={post.media} alt='img'/>
                    <div className='postFooter'>
                        <div className='postFooter_icons'>
                            <div className='item'>
                                <i className="fas fa-heart"></i>
                            </div>
                            <div className='item'>
                                <i className="fas fa-comment"></i>
                            </div>
                            <div className='item'>
                                <i className="fas fa-share"></i>
                            </div>
                        </div>      
                        <div className='postFooter_info'>
                            <span>1000 likes</span>
                             <h6>{post.title}</h6>
                        </div>      
                    </div>    
                </div>    
            )
        })}
     </div>
  )
}

export default Posts
