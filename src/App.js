import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import EmployerHome from './Components/EmployerComponents/EmployerHome';
import EChangePassword from './Components/EmployerComponents/EChangePassword';
import JobSeekerHome from './Components/JobSeekerComponents/JobSeekerHome';
import PostedJobs from './Components/EmployerComponents/PostedJobs';
import Jobmatch from './Components/JobSeekerComponents/Jobmatch';
import Adminhome from './Components/AdminComponent/Adminhome';
import JChangePassword from './Components/JobSeekerComponents/JPasswordChange';

import CustomModel from './Components/EmployerComponents/ECustomModel';
import EmployerDetail from './Components/EmployerComponents/EmployerDetail';
import JobSeekerDetail from './Components/JobSeekerComponents/JobSeekerDetail';
import EmployerDetailsA from './Components/AdminComponent/EmployerDetailsA';
import SideNavA from './Components/SideNavA';
import SideNavE from './Components/SideNavE';
import SideNavJ from './Components/SideNavJ';
import JobSeekerDetailsA from './Components/AdminComponent/JobSeekerDetailsA';



function App() {
  return (
     <Router>
            
              
                <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Home />} />
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />

                  </Route>

                    <Route path="/Employer" element={<SideNavE/>}>
                    <Route index element={<EmployerHome />} />
                    <Route path="PassChange" element={<EChangePassword/>}/>
                    <Route path="EmployerdDetail"  element={<EmployerDetail/>}/>
                    <Route path="postedjob" element ={<PostedJobs/>} />
                    </Route>
                    
                    <Route path="/Jobseeker" element={<SideNavJ/>} >
                    <Route index element={<Jobmatch/>}/>
                    <Route path="JPassChange" element={<JChangePassword/>}/>
                    <Route path="Jobseeker" element ={<JobSeekerHome/>} />
                    <Route path="jobmatch" element ={<Jobmatch/>} />
                    <Route path="Jobseekerdetail" element ={<JobSeekerDetail/>} />
                    </Route>

                       
                    <Route path="/Admin" element ={<SideNavA/>} >
                    <Route path="Employerlist" element={<EmployerDetailsA/>}/>
                    <Route path="Jobseekerlist" element={<JobSeekerDetailsA/>}/>


                    </Route>


                </Routes>
        
        </Router>
  );
}

export default App;
