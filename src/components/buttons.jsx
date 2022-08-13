import React from "react";

function Buttons(props){
    return(<div id="buttonContainer"><div><button onClick={props.prev}>{"< Previous Day"}</button></div>
                <div><button onClick={props.next}>{"Next Day >"}</button></div></div>)
}

export default Buttons;