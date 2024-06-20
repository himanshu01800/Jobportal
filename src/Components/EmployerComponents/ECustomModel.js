import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const CustomModel = ( {id,Setshowpopup}) => {

  const allJobs =useSelector((state)=> state.app.jobs )
  console.log(allJobs);
  const singleJob= allJobs.filter((ele)=> ele.id===id);
  console.log(singleJob);
  const nav=useNavigate();
 
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="w-100 d-flex justify-content-end">
      <button onClick={()=> Setshowpopup(false)} type="button " class="close " aria-label="Close">
     <span aria-hidden="true">&times;</span>
     </button>
     </div>
     <div className="d-flex flex-column align-items-center h-75 mt-4 justify-content-evenly">
         <p>Job Title: {singleJob[0].jobtitle}</p>
          <p>Degree: {singleJob[0].degree}</p>
          <p>Skills: {singleJob[0].skills}</p>
          <p>Salary: {singleJob[0].salary}</p>
          <p>Experience: {singleJob[0].experience}</p>
          <p>Job Details: {singleJob[0].jobdetails}</p>
          <p>ID: {singleJob[0].id}</p>
          <p>Experience: {singleJob[0].experince}</p>
          <p>Vacancies: {singleJob[0].vacancies}</p>
       
    </div>
    <div className="w-100 d-flex justify-content-center mt-3">
    <button className=" btn btn-primary w-50">Remove Job</button>
    </div>
    

      </div>
    </div>
  );
};

export default CustomModel;