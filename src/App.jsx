import React from 'react'
import Sidebar from './sidebar'

function App() {
  return (
    <div className='d-flex vh-100' >
      <div className='w-20'><Sidebar /></div>
      <div className='w-50 bg-primary'>Newsfeed</div>
      <div className='w-30'>Suggestions</div>
    </div>
  )
}

export default App
