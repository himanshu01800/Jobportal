import React, { useState } from 'react'
import SideNavE from '../SideNavE'
import SideNavJ from '../SideNavJ';

const JChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add password change logic here
      console.log('Current Password:', currentPassword);
      console.log('New Password:', newPassword);
      console.log('Confirm Password:', confirmPassword);
    };
  return (

    <div className="AdminHome">
  
  
  <div className="page-content   Adhomecon" id="content">
  <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header text-center">
              <h3>Change Password</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="currentPassword"
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block w-100">Change Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  
  </div>
  
  
  </div>
  
  
  )
}

export default JChangePassword
