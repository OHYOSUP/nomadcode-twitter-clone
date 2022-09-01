import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter,Routes, Route, Link, NavLink} from "react-router-dom"



function Home(){
  return(
   <div>
     <h2>Home</h2>
     Hoem...
   </div> 
  )
}

function Topics(){
  return(
   <div>
     <h2>Topics</h2>
     <ul>
       <li><NavLink to = '/topics/1'>HTML</NavLink></li>
       <li><NavLink to = '/topics/2'>JS</NavLink></li>
       <li><NavLink to = '/topics/3'>React</NavLink></li>
     </ul>
     <Routes>
      <Route path ='/topics/1' element={'Html'}></Route>
       <Route path = '/topics/*'>
         JS is...
       </Route>
       <Route path = '/topics/*'>
         React is...
       </Route>
     </Routes>
   </div> 
  )
}
function Contact(){
  return(
   <div>
     <h2>Contact</h2>
     Contact...
   </div> 
  )
}

function App(){
  return(
    <div>
      <h1>Hello Router</h1>
      <ul>
        <li><NavLink to ='/'>Home</NavLink></li>
        <li><NavLink to ="/topics">Topics</NavLink></li>
        <li><NavLink to ="/contact">Contact</NavLink></li>
      </ul>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/topics" element={<Topics/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/*" element= {'errorPage'}></Route>
      </Routes>
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <HashRouter>
        <App />
    </HashRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
