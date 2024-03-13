import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export let Register = () => {
    let [data,setData] = useState({
        name:"",
        email: "",
        password:"",
        mobileNumber: "",
        city: ""
    }) 

    let Data = (event) => {
    let {name,value} = event.target
    setData({...data,[name]:value})
    console.log(name,value);
    }


    let handleSubmit = () => {
        let register = {
            name: data.name,
            email: data.email,
            password: data.password,
            mobileNumber: data.mobileNumber,
            city: data.city
            

        }
            fetch("http://localhost:8080/register/add", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "post",
                body: JSON.stringify(register)
            })  
                .then(Response => {
                    console.log("Data Received" + Response);
                })
        }
    
  return (
    <div className='bg-info text-center'>
        <div className='box'>
    
            <input type='text' placeholder="Name" name="name" value={data.name} onChange={Data}/><br></br>
            <input type='text' placeholder="Email" name='email' value={data.email} onChange={Data} /><br></br>
            <input type='password' placeholder="Password" minLength="8" maxLength="15" name='password' value={data.password} onChange={Data}/><br></br><br></br>
            <input type='tel' placeholder="Mobile Number" name='mobileNumber' value={data.mobileNumber} onChange={Data}/><br></br>
            <input type='text' placeholder='City' name='city' value={data.city} onChange={Data}/><br></br>
            
            <button className="btn btn-info" onClick={handleSubmit}>Create my account</button><br></br>
            <Link to="/login">Already have an account</Link>
        
    </div>
    </div>
  )
}
export default Register;

