import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import { HomePage } from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/l" element={<Login/>}/>
        <Route path="/r" element={<Register/>}/>
        <Route path='/hp' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;