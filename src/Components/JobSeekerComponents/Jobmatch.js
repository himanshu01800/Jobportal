import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { readJobs } from '../../features/jobDetailSlice';
import SideNav from '../SideNavA';
import SideNavJ from '../SideNavJ';
import JCustomModel from'./JCustomModel'

const Jobmatch = () => {
    const dispatch=useDispatch();
    const [showpopup,Setshowpopup]=useState(false);
    const [id,Setid]=useState();
    const {jobs,loading}=  useSelector((state)=>state.app)
    useEffect(()=>{
        dispatch(readJobs());

    },[]);
    if(loading){
        return(
            <div className="AdminHome">
            <SideNavJ/>
          
          <div className="page-content   Adhomecon" id="content">
            <h1 className="">Loding....</h1>
            </div>
            </div>
        )
    }
  return (
    <>
    { showpopup ? <JCustomModel
    id={id}
     Setshowpopup={Setshowpopup}
    /> :
    <div className="AdminHome">
    <SideNavJ/>
  
  <div className="page-content   Adhomecon" id="content">
    <div className=' ' >
        {jobs && jobs.map((items)=>(
        <div class="card " >
        <div class="card-body">
          <h5 class="card-title">{items.jobtitle}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{items.degree}</h6>
          <p class="card-text">{items.experince}</p>
          <button  onClick={()=>[Setid(items.id),Setshowpopup(true)] }  class="card-link">View Details</button>
          <a href="#" class="card-link">ApplyJob</a>
        </div>
      </div>
        ))}
        

    </div>
    </div>
    </div>
}
</>
    
  )
}

export default Jobmatch
