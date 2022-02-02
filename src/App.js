import React, {useEffect,useState} from "react";
import two from "./two.jpeg";
import "./app.css";
import Home from "./home" 
import {BrowserRouter as Router,Routes,Route,Outlet} from "react-router-dom";





const App = () => {

  
let date = new Date().toDateString()



//<div className="elfsight-app-88efa5d2-456a-4695-b288-113742b78237"></div>
//<div className="elfsight-app-05b2452b-2cc6-48a3-b3d5-9eb7966da946"></div>

//<div class="elfsight-app-cadd403d-39d9-414f-9ba6-a5a077882a38"></div>

//<div class="elfsight-app-cb07187a-0507-4e70-973d-ddeeb59f69b7"></div>

return (

	<div className="container" >
      <Router>

      
      <div  className="sider" >

         <div className="damis" >
            <h1>damis news</h1> <h6>{date}</h6>
         </div>
         <div className="category" >
            <ul>
               <h3>category</h3>
               <li>hola <div></div></li>
               <li>hola <div></div></li>
               <li>hola <div></div></li>
               <li>hola <div></div></li>
               <li>hola <div></div></li>
               <li>hola <div></div></li>
               
               
            </ul>

         </div>

      </div>
    
         <Outlet/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
   
   
      </Router>
	</div>
);
};

export default App;
