import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

function Profile() {

    const[profile, setProfile]=useState(null);
    const[followers, setFollowers]=useState([]);
    const[Unfollowed, setUnfollowed]=useState(0);
    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then(data=>setProfile(data.data[0]))
        .catch(err=>console.log(err))


        axios.get('http://localhost:3000/followers')
        .then(data => setFollowers(data.data))
        .catch(err => console.log(err))
    },[Unfollowed])

    function HandleOnChange(e)
    {
        setProfile(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }));
    }
    const handleUpdate=async()=>{
        axios.put(`http://localhost:3000/profile/${profile.id}`,profile)
        .then(console.log("updated"))
        .catch(err => console.log(err))
    }
    const handleUnFollow=async(id)=>{
        axios.delete(`http://localhost:3000/followers/${id}`)
        .then(alert("Unfollowed"))
        .then(setUnfollowed(!Unfollowed))
        .catch(err => console.log(err))
    }


  return (
    <div className='m-5'>
        {profile ? (
            <div>
                <img src={profile.profilePic} className='profile rounded-circle' alt='profilepic' />
            
                <h6>{profile.username}</h6>
                <input type='text'
                    value={profile.username}
                    name='username'
                    className='form-control my-4'
                    onChange={HandleOnChange}
                />
                <input type='text'
                    name='profilePic'
                    value={profile.profilePic}
                    className='form-control'
                    onChange={HandleOnChange}
                />
                <button className='btn btn-primary my-4' onClick={handleUpdate} >
                    update
                </button>


            </div>

        ):(
            <div>Loading</div>
        )}
        {followers.length>0 ?(
            followers.map(followers=>(
                <div key={followers.id} className='d-flex my-2'>
                    {followers.username}
                    <button className='btn btn-secondary ms-auto' onClick={()=>{handleUnFollow(followers.id)}} >unfollow </button>
                </div>
            ))):(
                <div>Loading</div>
            )}
    </div>
  )
}

export default Profile
