import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SideNav = () => {
  return (
    <>
      <div className="vertical-nav bg-white Adhomenav" id="sidebar">
        <div className="py-4 px-3 mb-4 bg-light">
          <div className="media d-flex align-items-center">
            <img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm me-1"/>
            <div className="media-body">
              <h4 className="m-2">Jason Doe</h4>
              <p className="font-weight-light text-muted mb-0 m-2">Admin</p>
            </div>
          </div>
        </div>
    
        <ul className="nav flex-column nvitemsA">
          <li className="nav-item">
            <Link to="/Admin/Jobseekerlist" className="custom-link">JobSeeker Report</Link>
          </li>
    
          <li className="nav-item">
            <Link to="/Admin/Employerlist" className="custom-link">Employer Report</Link>
          </li>
          
          <li className="nav-item">
            <Link to="/feedback" className="custom-link">FeedBack Report</Link>
          </li>
          
          <li className="nav-item">
            <Link to="/login" className="custom-link">Log Out</Link>
          </li>  
        </ul>
      </div>
      <Outlet/>
    </>
  );
};

export default SideNav;
