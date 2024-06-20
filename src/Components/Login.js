import React, {  useState } from 'react';
 // Import Bootstrap CSS
import reg from '../images/13.jpg'
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {

  const nav=useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

 const  handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
      if(userId === "Admin") nav('/adminhome')
      else if(userId=='Employer') nav('/emphome')
      else if(userId=='Student') nav('/Jobseeker')
       };

  return (
          <div className="container-fluid mt-0 mb-0  d-flex  Regi">
          <div className="row d-flex justify-content-center " >
            
        <div className="col-5   align-content-center justify-content-center mt-5 ">
          <img src={reg} className='img-fluid' alt="Responsive image" />
          </div>
          <div className="col-5 h-100 ms-5 d-flex align-items-center">
          <div className="container mt-2 px-5">
          <h2 className='text-center'>Login</h2>
          <div className="row ">
          
              <form  onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="userId">User ID:</label>
                  <input
                    type="text"
                    id="userId"
                    className="form-control   border-dark "
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control  border-dark"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Login</button>
                <p  className='mt-3 cur d-flex justify-content-center ' onClick={()=>{nav('/Register')}}>Dont have an Account? Signup</p>
              </form>
              
              </div>
              </div>
              </div>
              </div>
              </div>
              ); };
       export default Login;
