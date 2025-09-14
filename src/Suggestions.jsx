import axios from 'axios';
import React, {useEffect, useState} from 'react'

function Suggestions() {
  const [profile, setProfile]= useState(null);
  const [Suggestions, setSuggestions] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/profile')
    .then(data=>data.json())
    .then(data=>setProfile(data[0]))
    .catch(err=>console.log(err))

    fetch('http://localhost:3000/suggestions')
    .then(data=>data.json())
    .then(data=>setSuggestions(data))
    .catch(err=>console.log(err))
  },[]);

  const handleFollow = async (id,username)=>
  {
    axios.post('http://localhost:3000/followers', {'id':id, 'username':username})
    .then(alert('followed'))
    .catch(err=>console.log(err))
  }

  return (
    <div>
      <div className='suggestions w-75 m-4'>
      {profile && (
      <div className='d-flex'>
        <img className='dp rounded-circle mt-3 ms-4' src={profile.profilePic} alt="profilepicture"  />
        <h5 className='my-3'>{profile.username}</h5>
        <small className='ms-auto text-primary mt-3 '>Switch</small>
      </div>
      )}
      <div className='d-flex'>
        <h5 className='mx-4 mt-2 mb-0'>Suggested for you</h5>
        <small className='ms-auto mt-2'>See All</small>
      </div>
      </div>
      {Suggestions.length>0 ?(
      <div className='w-75 ms-4 mt-2'>
        {Suggestions.map((suggestion)=>(
          <div className='ms-4 my-1' key={suggestion.id}>
            <div className='d-flex'>
              <img className='dp rounded-circle' src={suggestion.profilePic} alt='suggestionprofilepic' />
              <h5 className='suggestionsusername  my-2'>{suggestion.username}</h5>
              <a className='ms-auto text-primary my-2 ' onClick={()=>{handleFollow(suggestion.id, suggestion.username)}}>Follow</a>
            </div>
          </div>
        ))}
      </div>
    ):(
      <div>
        Loading
      </div>
      )}
  </div>
  )
}


export default Suggestions
