import React from 'react';
import {Link} from 'react-router-dom';
import './Entry.css';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


export const HomePage = () => {
  return (
    <div>
      <div className='text-info bg-primary'> Welcome to HomePage </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className='navbar-brand' href="#">ReciMe</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

       
        <span className='fs-1'> Welcome to Recime </span>

        {/* animation */}
        {/* <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img className="animated-image" src="jpgfood6.jpg" alt="Animated Image 1" />
        </div>
        <div className="col-md-3">
          <img className="animated-image" src="food8.jpg" alt="Animated Image 2" />
        </div>
        <div className="col-md-3">
          <img className="animated-image" src="food9.jpg" alt="Animated Image 3" />
        </div>
        <div className="col-md-3">
          <img className="animated-image" src="food10.jpg" alt="Animated Image 4" />
        </div>
      </div>
    </div> */}

      <div className='bg-warning'> Every cuisine in the world has its own identity 
      and speaks for the region, tradition, and culture it belongs to.</div>
      
      {/* <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img className="ani-image" src="path/to/image1.jpg" alt="Animated Image 1" />
        </div>
        <div className="col-md-4">
          <img className="ani-image" src="path/to/image2.jpg" alt="Animated Image 2" />
        </div>
        <div className="col-md-4">
          <img className="ani-image" src="path/to/image3.jpg" alt="Animated Image 3" />
        </div>
      </div>
    </div> */}

      <div className='bg-warning'> Discover Delicious Soups, Desserts, And Much More.
        Find Dishes From Around The World And Discover Your Next Favorite Go-To Meal Today!</div>

        {/* <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img className="animated-image" src="jpgfood6.jpg" alt="Animated Image 1" />
        </div>
        <div className="col-md-3">
          <img className="animated-image" src="food8.jpg" alt="Animated Image 2" />
        </div>
        <div className="col-md-3">
          <img className="animated-image" src="food9.jpg" alt="Animated Image 3" />
        </div>
        <div className="col-md-3">
          <img className="animated-image" src="food10.jpg" alt="Animated Image 4" />
        </div>
      </div>
    </div> */}
    
        <button><Link to = "/allrecipes"> All Recipes </Link></button>
    </div>
  )
}
