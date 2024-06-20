import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideNavA = () => {
    const nav =useNavigate();

    const handlelogout =()=>{
     nav('/login');

    }
    const handlePostJob =()=>{
      nav('/emphome')
    }
    const handlePostedJob =()=>{
      nav('/postedjob')
    }
    const handleDetail=()=>{
      nav('/EmployerdDetail')
    }
    const handlePassChange=()=>{
      nav('/passChange')
    }
   

  return (
    <div className="vertical-nav bg-white Adhomenav" id="sidebar">
    <div className="py-4 px-3 mb-4 bg-light ">
      <div className="media d-flex align-items-center ">
          <img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm me-1"/>
        <div className="media-body">
          <h4 className="m-2">Jason Doe</h4>
          <p className="font-weight-light text-muted mb-0 m-2">Employer</p>
        </div>
      </div>
    </div>
  
    
  
    <ul className="nav flex-column nvitems mb-0">
  
      <li className="nav-item">
        My Message
      </li>
  
      <li className="nav-item">
        My Inbox
      </li>
      <li className="nav-item">
        Sent
      </li>
      <li className="nav-item" onClick={handlePostJob}>
        Post New Job
      </li>
      <li className="nav-item" onClick={handlePostedJob} >
        My Posted Jobs
      </li>
      <li className="nav-item" onClick={handleDetail}>
        My Account
      </li>
      <li className="nav-item">
        Profile Matches
      </li>
      <li className="nav-item" onClick={handlePassChange} >
        Change Password
      </li>
      <li className="nav-item" onClick={handlelogout}>
       Log Out
      </li>  
    </ul>
  </div>
  
  )
}

export default SideNavA
