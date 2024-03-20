import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const AddRecipe = () => {

    //image
    const [selectedImage, setSelectedImage] = useState(null);
    let uploadedFile = null;

    const handleFile = () => {
        console.log("Image Uploaded")
        const formData = new FormData();
        formData.append("file", selectedImage);
        fetch("http://localhost:8080/recipe/upload", {
            method: 'POST',
            body: formData,
            dataType: "jsonp"
        })
            .then(response => response.text())
            .then(text => {
                uploadedFile = text
                console.log(text)
                // alert("imageuploded")
            })
    }

    
    //addFile

    const [file, setFile] = useState({
        recipename: "",
        ingredients: "",
        recipesteps:"",
        cuisine: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFile({ ...file, [name]: value })
        console.log(name, value);
    }

    const Addfiles = () =>{
        const files = {
            name: file.recipename,
            ingredients: file.ingredients,
            steps:file.recipesteps,
            image:uploadedFile,
            cuisine:file.cuisine


        }
        console.log("===Files====", JSON.stringify(files));
        fetch("http://localhost:8080/recipe/addfile", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(files)
        })
        .then(response => {
            if (response.ok) {
                return(
                     response.json()      
                );   
            } else {
                throw new Error(`Server returned status: ${response.status}`);
            }
        })
    }

    //get
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

        // replaceget
        // const [rep, setrep] = useState();
        // const handleReplace = () => {
        //     axios.get(`http://localhost:8080/recipe/replace/${data.id}`)
        //     .then((resp) => {
        //         setrep(resp.data)
        //         console.log(resp.data)
        //     })
        // }

        // const [rep, setRep] = useState();
        // const handleReplace = (id) => {
        //     axios.get("http://localhost:8080/recipe/replace" + id)
        //     .then((resp) => {
        //         setRep(resp.data)
        //         console.log(resp.data)
        //     })
        // }


    return (


        <div>
            
            {/* <button> Add Recipes </button> */}

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Recipes
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Recipes Here! </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Recipe Name: <input type='text' name='recipename' value={file.recipename} onChange={handleChange}></input><br></br>
                            Key Ingredients:  <textarea name='ingredients' value={file.ingredients} onChange={handleChange}></textarea><br></br>
                            Recipe Steps:  <textarea name='recipesteps' value={file.recipesteps} onChange={handleChange}></textarea><br></br>
                            Cuisine: <input type='text' name='cuisine' value={file.cuisine} onChange={handleChange}/><br></br>
                           
                            {selectedImage && (
                <div>
                    <img
                        alt="not found"
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br/>
                    <button onClick={() => setSelectedImage(null)}>RemoveImage</button>
                    <button onClick={() => { handleFile() }}>UploadImage</button>
                </div>
            )}
                            Recipe Image:
                            <input type="file" name="image" onChange={(event) => {
                                console.log(event.target.files[0]);
                                setSelectedImage(event.target.files[0]);
                            }} />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={Addfiles}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>


    {/* table */}


            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Count</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(data) && data.map((post) => (
                         <tr key={post.id}>
                         <td>{post.id}</td>
                         <td>{post.name}</td>
                         <td>{post.image}</td>
                         <td> 


                            {/* <button> Edit </button> &nbsp; */}
                           
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
  Edit
</button>


<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
                    Recipe Name: <input type='text' name='recipename' value={file.recipename} onChange={handleChange}></input><br></br>
                    Key Ingredients:  <textarea name='ingredients' value={file.ingredients} onChange={handleChange}></textarea><br></br>
                    Recipe Steps:  <textarea name='recipesteps' value={file.recipesteps} onChange={handleChange}></textarea><br></br>
                    Cuisine: <input type='text' name='cuisine' value={file.cuisine} onChange={handleChange}/><br></br>
                    {selectedImage && (
                <div>
                    <img
                        alt="not found"
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br/>
                    <button onClick={() => setSelectedImage(null)}>RemoveImage</button>
                    <button onClick={() => { handleFile() }}>UploadImage</button>
                </div>
            )}
                            Recipe Image:
                            <input type="file" name="image" onChange={(event) => {
                                console.log(event.target.files[0]);
                                setSelectedImage(event.target.files[0]);
                            }} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                <button> Delete </button> 
                        </td>
                         </tr>
                    ))}
                    
                    </tbody>        
                </table>
            </div>
        </div>
    )
}

export default AddRecipe;