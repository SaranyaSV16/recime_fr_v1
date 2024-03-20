// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import { HomePage } from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AllRecipe } from './AllRecipe';
import { AddRecipe } from './AddRecipe';
import { Cuisines } from './Cuisines';
import { EditForm } from './EditForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/allrecipes' element={<AllRecipe/>}/>
        <Route path='/addrecipes' element={<AddRecipe/>}/>
        <Route path='/cuisines/:category' element={<Cuisines/>}/>
        <Route path='/editform' element={<EditForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;