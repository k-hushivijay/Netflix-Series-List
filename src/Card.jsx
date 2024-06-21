import React from "react";
// import data from "./data";


function Card(props){

    console.log(props);
    return(
      <>
      <div className="cardss">
   <div className="Card1">
    <img className="cardimg" src={props.imgsrc}/>
    <span className="cardspan">Netflix Original Series</span>
    <h1 className="cardname">{props.name}</h1>
    <a  className="cardbutton" target="_blank" href={props.link}>
    <button>
      Watch Now
    </button>
    </a>
  
    </div>
   </div>
      </>
    )
  }

  export default Card;