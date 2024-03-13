import axios from 'axios';
import React, { useEffect, useState } from 'react'

//get
export const AllRecipe = () => {
//   const [rend, setRend] = useState([]);

//   useEffect(() => {
//     fetchDataFromDatabase(); 
//   }, []);

//   const fetchDataFromDatabase = () => {
//     try {
//     const response = fetch('http://localhost:8080/recipe/getfile');
//     const jsonData = response.json();
//     setRend(jsonData);
//   } 
//   catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

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

    <div className="card" style={{width: "18rem"}}>
       
    <div className="card-body">
    {Array.isArray(data) && data.map((post) => (
        <div key={post.id}>
           <img src={`http://localhost:8080/uploads/${post.image}`} className="card-img-top" alt="..."/>
        <h5 className="card-title">{post.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    ))}
      
      
    </div>
    </div>
   )
}

export default AllRecipe;