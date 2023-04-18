import React from "react";
import { useState } from "react";
import twittericon from "../images/twitter2.png"
import leftQuote from "../images/icons8-quote-left-50.png"
import { useEffect } from "react";

const QuoteWin=()=>{
  const[quote,setQuote]=useState("");
  const[author,setAuthor]=useState("");
 
  
  useEffect(()=>{
    getQuotes();
  },[]);

  const getQuotes=()=>{
    fetch("https://type.fit/api/quotes")
  .then(res=>res.json())
  .then(data=>{
    const num=Math.floor(Math.random()*data.length);
    const quote=data[num];
    if(quote.author===null){
        // getQuotes();
    }else{
    setQuote(quote.text);
    setAuthor(quote.author);
    }
  
  });
  }
  return(
    
      <div id="quote-box">
        <div id="quote">
         <p id="text">
        <span id="left-quote">
        <img src={leftQuote} alt="left-quote" id="lquote"></img>
        </span>
        {quote} 
         </p>
         <div id="author"><p>- {author}</p></div>
        </div>
        <div id="links">
        <div id="tweet">
           <a href={`https://twitter.com/compose/tweet?text=${quote.replace('.','')} - ${author}`}>
            <img src={twittericon} alt="twitter-icon"></img>
           </a>
        </div>
        <button id="new" onClick={getQuotes}>New Quote</button>
        </div>
      </div>
    
  )
}
export default QuoteWin