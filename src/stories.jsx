import React, { useEffect, useState } from 'react'

function Stories() {
  const[Stories, setStories]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/story')
    .then(data=>data.json())
    .then(data=>setStories(data))
  })
  return (
    <div className='story d-flex ms-4 mt-3'>
      {Stories.length>0?(
        Stories.map((story)=>(
          <div className='ms-2' key={story.id}>
            <div className='gradient-border'>
              <img src={story.user.profilePic} alt="storiesprofilepicture" className='story-dp rounded-circle' />
            </div>
            <p className='text-truncate' style={{width:"50px"}}>{story.user.username}</p>
          </div>
        ))
      ):(
        <div>
          <p>Loading</p>
        </div>
      )} 
    </div>
  )
}

export default Stories
