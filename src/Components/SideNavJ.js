import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SideNavJ = () => {
  return (
    <>
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
        <li >
          My Message
        </li>
        <li >
          My Inbox
        </li>
        <li >
          Sent
        </li>
        <li >
          <Link to="/Jobseeker/Jobseekerdetail" className="custom-link">My Account</Link>
        </li>
        <li >
          <Link to="/Jobseeker/jobmatch" className="custom-link">Job Match</Link>
        </li>
        <li >
          Applied Jobs
        </li>
        <li >
          Profile Matches
        </li>
        <li >
          <Link to="/Jobseeker/JPassChange" className="custom-link">Change Password</Link>
        </li>
        <li >
          <Link to="/login" className="custom-link">Log Out</Link>
        </li>  
      </ul>
    </div>
    <Outlet/>
    </>
  );
};

export default SideNavJ;
