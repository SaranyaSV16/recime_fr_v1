import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export let Register = () => {
    let [data,setData] = useState({
        name:" ",
        email: " ",
        password:" ",
        mobilenumber: " ",
        city: " "
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
            mobilenumber: data.mobilenumber,
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
    <div  className='bg-info text-center'>
        <div className='box'>
        <form>
            <input type='text' placeholder="Name" name="name" value={data.name} onChange={Data}/><br></br>
            <input type='text' placeholder="Email" name='email' value={data.email} onChange={Data} /><br></br>
            <input type='password' placeholder="Password" minLength="8" maxLength="15" name='password' value={data.password} onChange={Data}/><br></br><br></br>
            <input type='tel' placeholder="Mobile Number" pattern="[0-9]{5}-[0-9]{5}" name='mobilenumber' value={data.mobilenumber} onChange={Data}/><br></br>
            <input type='text' placeholder='City' name='city' value={data.city} onChange={Data}/><br></br>
            
            <button className="btn btn-info" onClick={handleSubmit}>Create my account</button><br></br>
            <Link to="/l">Already have an account</Link>
        </form>
    </div>
    </div>
  )
}
export default Register;

