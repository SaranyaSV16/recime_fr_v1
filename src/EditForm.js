// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom';

// export const EditForm = () => {
// const [categories, setCategories] = useState([]);
// const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [uploadImage, setUploadImage] = useState('');
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [product, setProduct] = useState({
//     recipename: "",
//         ingredients: "",
//         recipesteps:"",
//         cuisine: "",
//         image: ""
//   });

//     const { recipename, ingredients, recipesteps,cuisine, image  } = product;

//     useEffect(() => {
//         loadProduct();
//         // loadCategories(); 
//     }, []);

//     const loadProduct = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8080/recipes/update/${id}`);
//           setProduct(response.data);
//           setSelectedCategory(response.data.categoryname); 
//         } catch (error) {
//           console.error("Error fetching product:", error);
//         }
//       };

//       const handleFile = async () => {
//         try {
//           const formData = new FormData();
//           formData.append("file", selectedImage);
    
//           const response = await axios.post("http://localhost:8080/file/upload", formData);
//           setUploadImage(response.data);
//           alert("Image uploaded successfully");
//         } catch (error) {
//           console.error("Error uploading image:", error);
//           alert("Failed to upload image");
//         }
//       };

//       const handleSelectChange = (event) => {
//         setSelectedCategory(event.target.value);
//       };
    
//       const onInputChange = (e) => {
//         setProduct({ ...product, [e.target.name]: e.target.value });
//       };
    
//       const onSubmit = async (e) => {
//         e.preventDefault();
//         const updatedProduct = { ...product, image: uploadImage, categoryname: selectedCategory };
//         try {
//           await axios.put(`http://localhost:8080/product/update/${id}`, updatedProduct);
//           navigate("/admin");
//         } catch (error) {
//           console.error("Error updating product:", error);
//           alert("Failed to update product");
//         }
//       };

//   return (
//      <div>
//       <form onSubmit={(e) => onSubmit(e)}>
//               <p>
//           Recipe Name: <input type='text' name='recipename' value={recipename} onChange={(e) => onInputChange(e)} />
//         </p>
//         <p>
//           Ingredients: <input type='text' name='ingredients' value={ingredients} onChange={(e) => onInputChange(e)} />
//         </p>
//         <p>
//           Recipe Steps: <input type='number' name='recipesteps' value={recipesteps} onChange={(e) => onInputChange(e)} />
//         </p>
//         <p>
//           Cuisine: 
//         </p>
//         {image && ( 
//           <div>
//             <img src={image} alt="Product" style={{ width: "250px" }} />
//             <br />
//           </div>
//         )}
//         <input
//           type="file"
//           name="myImage"
//           onChange={(event) => {
//             setSelectedImage(event.target.files[0]);
//           }}
//         />
//         <button type="button" onClick={handleFile}>Upload Image</button><br></br>
  
        
//         <button type="submit" className="btn btn-outline-primary">Submit</button>
//         <Link className="btn btn-outline-primary" to="/admin">Cancel</Link>
//       </form>
//     </div>
//   );
// }
