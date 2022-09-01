import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Start from './component/Start';
import About from './component/About';
import Contact from './component/Contact';
import App from './App'




function Hompage(){
  return(
  <>
    
  <BrowserRouter>
  <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/Contact'>Contact</Link>
    </nav>
    <Routes>
      <Route path='/' element ={<Start></Start>}></Route>
      <Route path='about' element ={<About></About>}></Route>
      <Route path='contact' element ={<Contact></Contact>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
