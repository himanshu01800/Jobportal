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



function App() {
  return (
     <Router>
            
              
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/emphome" element={<EmployerHome/>}/>
                    <Route path="/PassChange" element={<EChangePassword/>}/>
                    <Route path="/EmployerdDetail"  element={<EmployerDetail/>}/>
                    <Route path="/JPassChange" element={<JChangePassword/>}/>
                    <Route path="/Jobseeker" element ={<JobSeekerHome/>} />
                    <Route path="/postedjob" element ={<PostedJobs/>} />
                    <Route path="/jobmatch" element ={<Jobmatch/>} />
                    <Route path="/Joobseekerdetail" element ={<JobSeekerDetail/>} />
                    <Route path="/adminhome" element ={<Adminhome/>} />
                    <Route path="/jobpopup" element ={<CustomModel/>} />
                    <Route path="/Aemployer" element={<EmployerDetailsA/>}/>
                    


                </Routes>
        
        </Router>
  );
}

export default App;
