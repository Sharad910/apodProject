import React from "react";
import { useState, useEffect } from "react";
import Heading from "./heading.jsx";
import Image from "./image.jsx";
import Buttons from "./buttons.jsx";
import ImgExp from "./imgExp.jsx";
import Imgtitle from "./imgtitle.jsx";
import { getData } from "./Apidata.jsx";

let test=new Date();
function App() {
  const[Expl,setExpl]=useState("");
  const[url,setUrl]=useState("");
  const[Title,setTitle]=useState("");
  const[Date,setDate]=useState("");
  const[mediaType,setMediaType]=useState("image");
  const[DisplayDate,changeDate]=useState(test.toLocaleDateString("fr-CA",{timeZone:"UTC"}).slice(0,10));

  const[show,setShow]=useState(false);

  function prevDay(){
    test.setDate(test.getDate()-1);
    changeDate(test.toLocaleString("fr-CA",{timeZone:"UTC"}).slice(0,10));
  }

  function nextDay(){
    test.setDate(test.getDate()+1);
    changeDate(test.toLocaleString("fr-CA").slice(0,10));
  }
useEffect(()=>{
  getData(DisplayDate)
    .then((data)=>{
      setExpl(data.explanation);
      setUrl(data.url);
      setTitle(data.title);
      setDate(data.date);
      setMediaType(data.media_type);
      setShow(true);
    });
  
},[DisplayDate]);

function checkMedia(){
  if(mediaType==="image"){
    return "Astronomy";
  }
  else if(mediaType==="video"){
    return"Cannot display as media is of the type video"; 
  }
  else{
    return"Could not fetch the image,the reasons can be: image doesn't exist at the source";
  }
}
  return (show?
    <div id="container">
    <Heading date={Date}/>
    <div id="Content">
    <div id="aboutImg">
    <Imgtitle title={Title} date={Date}/>
    <hr/>
    <ImgExp explain={Expl} />
    <hr/>
    <Buttons prev={prevDay} next={nextDay}/>
    </div>
    <div id="Image">
    <Image url={url} type={`${checkMedia()}`} />
    
    </div>
    </div>
    </div>:<p>Loading...</p>
  );
}

export default App;
