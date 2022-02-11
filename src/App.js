import React from "react";
import two from "./two.jpeg";
import "./app.css";
import Home from "./home" ;
import Business from "./business";
import Sports from "./sports";
import Travel from "./travel";
import Movies from "./movies";
import Food from "./food";
import Technology from "./technology";
import Science from "./science";
import Fashion from "./fashion";
import Insider from "./insider";
import {BrowserRouter as Router,Routes,Route,Outlet,Link} from "react-router-dom";





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
               
               <li><Link to="/business" >business</Link><div></div></li>
               <li><Link to="/" >world</Link><div></div></li>
               <li><Link to="/sports" >sports </Link><div></div></li>
               <li><Link to="/travel" >travel</Link> <div></div></li>
               <li><Link to="/movies" >movies</Link> <div></div></li>
               <li><Link to="/food" >food</Link> <div></div></li>
               <li><Link to="/technology" >technology</Link> <div></div></li>
               <li><Link to="/science" >science</Link> <div></div></li>
               <li><Link to="/fashion" >fashion</Link> <div></div></li>
               <li><Link to="/insider" >insider</Link> <div></div></li>
               
               
            </ul>

         </div>

      </div>
    
         <Outlet/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/business" element={<Business/>}></Route>
        <Route path="/sports" element={<Sports/>}></Route>
        <Route path="/travel" element={<Travel/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/food" element={<Food/>}></Route>
        <Route path="/technology" element={<Technology/>}></Route>
        <Route path="/science" element={<Science/>}></Route>
        <Route path="/fashion" element={<Fashion/>}></Route>
        <Route path="/insider" element={<Insider/>}></Route>
      </Routes>
   
   
      </Router>
	</div>
);
};

export default App;
