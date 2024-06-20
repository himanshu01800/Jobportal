import React from 'react'
import { useNavigate } from 'react-router-dom';

const SideNavJ= () => {
    const nav =useNavigate();

    const handlelogout =()=>{
     nav('/login');
    }
    const handlePassword =()=>{
        nav('/JPassChange')
    }
    const handleJobMatch=()=>{
        nav('/jobmatch')
    }
    const handleAccount=()=>{
      nav('/Joobseekerdetail')
    }

  return (
    <div className="vertical-nav bg-white Adhomenav" id="sidebar">
    <div className="py-4 px-3 mb-4 bg-light ">
      <div className="media d-flex align-items-center ">
          <img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm me-1"/>
        <div className="media-body">
          <h4 className="m-2">Jason Doe</h4>
          <p className="font-weight-light text-muted mb-0 m-2">Job seeker</p>
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
      <li className="nav-item"  onClick={handleAccount}>
         My Account
      </li>
      <li className="nav-item" onClick={handleJobMatch}>
        Job Match
      </li>
      <li className="nav-item">
     Applied Jobs
      </li>
      <li className="nav-item">
        Profile Matches
      </li>
     
      <li className="nav-item" onClick={handlePassword}>
        Change Password
      </li>
      <li className="nav-item" onClick={handlelogout}>
       Log Out
      </li>  
    </ul>
  </div>
  
  )
}

export default SideNavJ;
