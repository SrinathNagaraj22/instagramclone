import React from 'react'

function Sidebar() {
  return (
    <div className='m-3'>
      <>
          <div className='d-flex flex-column gap-3'>
              <img className='logotext' src='src/assets/instagram text.png' />
              <div><i class="bi bi-house-door"></i>Home</div>
              <div><i class="bi bi-search"></i>Search</div>
              <div><i class="bi bi-compass"></i>Explore</div>
              <div><i class="bi bi-camera-reels"></i>Reels</div>
              <div><i class="bi bi-send-plus"></i>Messages</div>
              <div><i class="bi bi-heart"></i>Notifications</div>
              <div><i class="bi bi-plus-lg"></i>Create</div>
              <div><i class="bi bi-person-circle"></i>Profile</div>
          </div>
          <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
            <div><i class="bi bi-list"></i>More</div>
            <div><i class="bi bi-boxes"></i>Also from Meta</div>
            <div>just for testing</div>
          </div>
      </>
    </div>
  )
}

export default Sidebar
