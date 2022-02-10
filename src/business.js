import React, {useEffect,useState} from "react";
import axios from "axios";
import "./home.css";
import Template from "./template"

function Business() {
    const [image, setImage] = useState()
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [body, setBody] = useState()
    const [body1, setBody1] = useState()
    const [body2, setBody2] = useState()
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [section, setSection] = useState()
    const [section1, setSection1] = useState()
    const [section2, setSection2] = useState()
    const [link, setLink] = useState()
    const [link1, setLink1] = useState()
    const [link2, setLink2] = useState()
    const [list, setList] = useState()


useEffect(() => {
 axios.get("https://api.nytimes.com/svc/topstories/v2/business.json?api-key=KtHmfQGQoOYPBNUPUrN17ulVNFGkfdzf")
    .then( result => 
    {
        var res = result.data

        
       
      let ima =res.results[0].title ?  res.results[0].multimedia[0].url : res.results[2].multimedia[0].url
      let ima1 = res.results[3].abstract ? res.results[3].multimedia[0].url : res.results[5].multimedia[0].url
      let ima2 = res.results[4].multimedia[0].url
      let tit = res.results[0].title ? res.results[0].title : res.results[2].title
      let tle = res.results[0].title ?  res.results[0].abstract : res.results[2].abstract
      let tle1= res.results[3].abstract ? res.results[3].abstract : res.results[5].abstract
      let tle2= res.results[4].abstract
      let auth = res.results[0].title ? res.results[0].byline : res.results[2].byline
      let sect = res.results[0].title ? res.results[0].section : res.results[2].section
      let sect1 =  res.results[3].abstract ? res.results[3].section : res.results[5].section
      let sect2 = res.results[4].section
      let ink = res.results[0].title ? res.results[0].short_url : res.results[2].short_url
      let ink1 = res.results[3].short_url
      let ink2 = res.results[4].short_url

      res.results.splice(0,5)
      let slic = res.results
     setList(slic)
     
     setTitle(tit)
     setBody(tle)
     setBody1(tle1)
     setBody2(tle2)
     setImage(ima)
     setImage1(ima1)
     setImage2(ima2)
     setAuthor(auth)
     setSection(sect)
     setSection1(sect1)
     setSection2(sect2)
     setLink(ink)
     setLink1(ink1)
     setLink2(ink2)

     
    
    } )
},[])

var talk = list




    return (
        <div>
            hollla
             
            <Template
            author={author}
            image={image}
            image1={image1}
            image2={image2}
            body={body}
            body1={body1}
            body2={body2}
            link={link}
            link1={link1}
            link2={link2}
            section={section}
            section1={section1}
            section2={section2}
            title={title}
            list = {talk}
            
            >
               
               
            </Template>
        </div>
    )
}

export default Business