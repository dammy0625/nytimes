import React from "react";
import two from "./two.jpeg";
import "./home.css"

function Template(prop) {
    
    return (
        <div>
              <div  className="main" >
                <h1 className="trending" >today's headlines in {prop.section}</h1>

                {
                 prop.image ?
                 <div>
      <div className="parent">
<div className="div1" >
   <img src={prop.image ? prop.image : two} alt="news" ></img>
   <h3>{prop.section? prop.section : "" }</h3><p>{prop.author ? prop.author : "muyiwa opeyemi damilola"}</p>
   <h1>{prop.title }</h1>
   <h6>{prop.body ? prop.body : "NO STORY"}</h6>
   <a href={prop.link} >read more ...</a>
   
   </div>


<div className="div2">
<img src={prop.image1 ? prop.image1 : two} alt="image" ></img>
<h3>{prop.section1 ? prop.section1 : ""}</h3>
<h6>{prop.body1 ? prop.body1 : "NO STORY"}</h6>
   
   <a href={prop.link1} >read more ...</a>
 </div>

<div className="div3">
<img src={prop.image2 ? prop.image2 : two} alt="alat" ></img>
<h3>{prop.section2 ? prop.section2 : ""}</h3>
<h6>{prop.body2 ? prop.body2 : "NO STORY"}</h6>
   
   <a href={prop.link2} >read more ...</a>
 </div>
</div>
<h1 className="trending" >covid-19 world stats</h1>
<div className="wid" ><iframe src="https://covid-19.dataflowkit.com/assets/widget/c19-top-widget.html"
 width="800" height="540" frameborder="0"></iframe></div>

<h1 className="trending" >trending</h1>
<ul className="sec" >
{ prop.list ? prop.list.map(red =>
  (
    <li>
    {red.multimedia ? <img src={red.multimedia[1].url} alt={red.section }></img> : ''}
    <div>
      <h1>{red.title}</h1>
      <h6>{red.abstract}</h6>
    </div>
    </li>
  )
  ) : "loading"}

</ul>
              

 

</div>

:  <div className="parent" id="par" >
  <div className="div1" id="anime" ></div>
  <div className="div2" id="anime"></div>
  <div className="div3" id="anime"></div>
</div>

}
 
   
      </div> 
    
        </div>
    )
}

export default Template