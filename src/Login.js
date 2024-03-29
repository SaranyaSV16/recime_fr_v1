import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Entry.css';
// import { useParams } from 'react-router-dom';
import axios from 'axios';

export let Login = () => {
  const navigate = useNavigate();
  let [data1,setData1] = useState({
       
    email: "",
    password:""
}) 

let Data1 = (event) => {
    let {name,value} = event.target; 
    console.log('Data1---->',name,"===",value)

    setData1({...data1,[name]:value})
    console.log(name,value);
}
const handleSubmit1 = (event) => {
    event.preventDefault();
    console.log(data1);

    axios.get(`http://localhost:8080/register/check?email=${data1.email}&password=${data1.password}`)
    .then((response)=>{
      if(response.data === !data1.email && response.data === !data1.password){
        return  alert("Email or Password Incorrect");
      }else {
        if(response.data.role === 'admin'){
          navigate("/addrecipes");
        }
        else {
          navigate("/homepage")
        }
          // console.log("Data",response.data)
          // navigate("/hp");
          // setData1(response.data)
      }
      

    })
    .catch((error)=>{
      console.error("Error during fetch", error);

    })
 }

  return (

    <div>
      <div className='recime'> ReciMe </div>
      <br></br>
      <div className='discovery'> Your recipes are waiting.<br>
      </br> Login to customize your recipe discovery. </div>
       <br></br>

    <div className= 'text-center'>
       <div className='box'>
      
            <input type='text' placeholder="Email" name='email' value={data1.email} onChange={Data1}/><br></br>
            <input type='password' placeholder="Password" name='password' value={data1.password} onChange={Data1}/><br></br><br></br>
            <button className="btn btn-info"onClick={handleSubmit1}>Log in</button><br></br>
            
            <Link to ="/register" className='link'>Don't have an account?</Link>
        
    </div>
    </div>
    </div>
  )
} 

export default Login;
