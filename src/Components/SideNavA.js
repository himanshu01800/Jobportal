import React from 'react'
import { useNavigate } from 'react-router-dom';

const SideNav = () => {
    const nav =useNavigate();

    const handlelogout =()=>{
     nav('/login');
    }
    const handleEdetails=()=>{
      nav('/Aemployer')
    }
   

  return (
    <div className="vertical-nav bg-white Adhomenav" id="sidebar">
    <div className="py-4 px-3 mb-4 bg-light ">
      <div className="media d-flex align-items-center ">
          <img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm me-1"/>
        <div className="media-body">
          <h4 className="m-2">Jason Doe</h4>
          <p className="font-weight-light text-muted mb-0 m-2">Admin</p>
        </div>
      </div>
    </div>
  
    
  
    <ul className="nav flex-column nvitemsA ">
  
      <li className="nav-item" >
        JobSeeker Report
      </li>
  
      <li className="nav-item" onClick={handleEdetails}>
        Employer Report
      </li>
      <li className="nav-item">
        FeedBack Report
      </li>
      <li className="nav-item" onClick={handlelogout}>
       Log Out
      </li>  
    </ul>
  </div>
  
  )
}

export default SideNav
