import React, { useState } from 'react'
import SideNav from '../SideNavA'
import { useDispatch } from 'react-redux';
import { createJob } from '../../features/jobDetailSlice';
import SideNavE from '../SideNavE';

const EmployerHome = () => {
  const [jobs,setJobs]=useState({});
  const dispatch =useDispatch();

  const handleChange= (e)=>{
     setJobs({...jobs,[e.target.name]:e.target.value} );
     console.log(jobs);
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
      dispatch(createJob(jobs));
  }


  return (
    <div className="AdminHome">
  <SideNavE/>

<div className="page-content   Adhomecon" id="content">
<section className="vh-100" >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-4">
                <h3 className="mb-4 text-center">Job Application Form</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label" htmlFor="jobTitle">Job Title</label>
                      <input type="text" name="jobtitle"  id="jobTitle" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label" htmlFor="degree">Degree</label>
                      <input type="text" name="degree" id="degree" className="form-control"onChange={handleChange}  />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label" htmlFor="skills">Skills</label>
                      <input type="text" name="skills" id="skills" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label" htmlFor="salary">Salary</label>
                      <input type="text" name="salary" id="salary" className="form-control"onChange={handleChange}  />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label" htmlFor="experience">Experience</label>
                      <input type="text" name="experince" id="experience" className="form-control" onChange={handleChange}  />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label" htmlFor="vacancies">Number of Vacancies</label>
                      <input type="number" name="vacancies" id="vacancies" className="form-control" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="jobDetails">Job Details</label>
                    <textarea id="jobDetails" name="jobdetails" className="form-control" rows="3" onChange={handleChange} ></textarea>
                  </div>
                  <button className="btn btn-primary btn-block" type="submit" onClick={handleSubmit}>Post Job</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 

</div>


</div>


  )
}

export default EmployerHome
