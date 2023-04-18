import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{
    return(
    <div id="cont">
     <div className="name">
        RANDOM QUOTE
     </div>
     <div className="name">
        GENERATOR
     </div>
     <Link to="/Quotes">
     <button id="gen">Generate a quote</button>
     </Link>
     
     </div>
    )
}
export default Home;