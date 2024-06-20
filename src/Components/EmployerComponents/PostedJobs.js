import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteJobs, readJobs } from '../../features/jobDetailSlice';
import SideNavE from '../SideNavE';
import { Link } from 'react-router-dom';
import ECustomModel from './ECustomModel';

const PostedJobs = () => {
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
            <SideNavE/>
          
          <div className="page-content   Adhomecon" id="content">
            <h1 className="">Loding....</h1>
            </div>
            </div>
        )
    }
  return (
    <>
    { showpopup ? <ECustomModel
     id={id}
     Setshowpopup={Setshowpopup}
    /> :
    <div className="AdminHome">
    <SideNavE/>
  
  <div className="page-content   Adhomecon" id="content">
    <div className=' ' >
        {jobs && jobs.map((items)=>(
        <div key={items.id} class="card " >
        <div class="card-body">
          <h5 class="card-title">{items.jobtitle}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{items.degree}</h6>
          <p class="card-text">{items.experince}</p>
          <button  onClick={()=>[Setid(items.id),Setshowpopup(true)] }  class="card-link">View Details</button>
          <button  onClick={()=>dispatch(deleteJobs(items.id))} class="card-link">RemoveJob</button>
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

export default PostedJobs
