import React, {useEffect, useState} from 'react'

function Suggestions() {
  const [profiles, setProfile]= useState(null);
  const [Suggestions, setSuggestions] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/profiles')
    .then(data=>data.json())
    .then(data=>setProfile(data))
    .catch(err=>console.log(err))

    // fetch('http://localhost:3000/suggestions')
    // .then(data=>data.json())
    // .then(data=>setsuggestions(data))
    // .catch(err=>console.log(err))
  },[]);

  return (
    <div>
      <div className='d-flex'>
        <img className='dp rounded-circle' src={profiles.profilePic} alt='profilepicture' />
        <h5>{profiles.username}</h5>
      </div>
    </div>
  )
}

export default Suggestions
