import React from "react";

function Header(props){
    return (<div id="heading"><h1>Astronomy picture for the day</h1><h3>{props.date}</h3><hr/></div>);
}

export default Header;