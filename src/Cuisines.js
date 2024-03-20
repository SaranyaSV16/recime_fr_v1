import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
 

export const Cuisines = () => {
  const {category} = useParams();
  let [categoryData,setCategoryData] =useState();

    const fetchData = () => {   
            axios.get("http://localhost:8080/recipe/cuisine/"+ category)
            .then((res) => {
                console.log("===Res===",category)
                setCategoryData(res.data);
                console.log(res.data)
            })

            .catch((err) => {
                console.log("error", err);
            })
               
        };

        useEffect(() => {
            fetchData();
        }, [])
  return (
    // <div>Italian</div>
    <div>
      <div className="row">
      {Array.isArray(categoryData) && categoryData.map((post) => (
        <div className="card col" style={{width: "18rem"}}>
  
  <div className="card-body">
    
      <div key={post.id}>
        <img src={`http://localhost:8080/uploads/${post.image}`} className="card-img-top" alt="..."/>
          <h5 className="card-title">{post.name}</h5>
          {/* <p className="card-text">{post.ingredients}</p> */}
          {/* <a href="#" className="btn btn-primary">View Recipe</a> */}

          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
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

export default Cuisines;