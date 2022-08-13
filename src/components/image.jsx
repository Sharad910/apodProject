import React from "react";

function Image(props){
    return(<img src={props.url} alt={props.type}/>);
}

export default Image;