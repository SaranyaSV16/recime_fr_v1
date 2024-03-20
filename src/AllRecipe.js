import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

//get
export const AllRecipe = () => {
const [data, setData] = useState([]);
const fetchData = () => {   
        axios.get("http://localhost:8080/recipe/getfile")
        .then((res) => {
            Object.keys(res.data).forEach(key => {
                console.log(key, res.data[key]);
                console.log("===img==" + res.data[key].image);
            });
            setData(res.data);
        })

        .catch((err) => {
            console.log("error", err);
        })
           
    };

    useEffect(() => {
        fetchData();
    }, [])



  return (
    // <div>AllRecipe</div>
<div>

<div className='col-lg-2 bg-secondary'>

<ul>
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Cuisines
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" > <Link to="/cuisines/Italian">Italian</Link></a></li>
    <li><a className="dropdown-item" > <Link to="/cuisines/Chinese">Chinese</Link></a></li>
    <li><a className="dropdown-item" > <Link to="/cuisines/Indian">Indian</Link></a></li>
  </ul>
</div>
  {/* <li> My Recipes </li>
  <li> Collection </li> */}
</ul>
</div> 

{/* card */}
<div className='row'>
{Array.isArray(data) && data.map((post) => (
    <div className="card col" style={{width: "18rem"}}>
       
    <div className="card-body">
   
        <div key={post.id}>
           <img src={`http://localhost:8080/uploads/${post.image}`} className="card-img-top" alt="..."/>
        <h5 className="card-title">{post.name}</h5>
        {/* <p className="card-text"><b>Ingredients:</b>{post.ingredients}</p> */}
      
       
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  View Recipe
</button>

<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{post.name}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <b>Ingredients: </b> {post.ingredients}<br></br>
        <hr></hr>
        <b>Procedure: </b> {post.steps}
      </div>
      <div className="modal-footer">
        Cuisine: {post.cuisine}
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    </div>
    </div>
      ))}
</div>
    </div>
   )
}

export default AllRecipe