import React, { useState } from 'react';
import SideNavJ from '../SideNavJ';



function JobSeekerDetail() {
  const [formData, setFormData] = useState({
    company: 'Your Company Name', // Pre-filled company name
    email: 'youremail@example.com',  // Pre-filled email address
    phone: '1234567',
    address: 'noda',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="AdminHome">
    <SideNavJ/>
  
  <div className="page-content   Adhomecon" id="content">
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <h1>Contact Information</h1>
        <form>
          <div className="form-group">
            <label htmlFor="company">Name:</label>
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Number:</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone} // Corrected from formData.email to formData.phone
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default JobSeekerDetail;
