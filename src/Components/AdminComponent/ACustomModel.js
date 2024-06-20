import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const ACustomModel = ( {id,Setshowpopup}) => {

  const allUsers =useSelector((state)=> state.app1.users )
  console.log(allUsers);
  const singleUser= allUsers.filter((ele)=> ele.id===id);
  console.log(singleUser);
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
         <p>Job Title: {singleUser[0].name}</p>
          <p>Degree: {singleUser[0].email}</p>
          <p>Skills: {singleUser[0].role}</p>
          
          
       
    </div>
    <div className="w-100 d-flex justify-content-center mt-3">
    <button className=" btn btn-primary w-50">Apply Job</button>
    </div>
    

      </div>
    </div>
  );
};

export default ACustomModel;