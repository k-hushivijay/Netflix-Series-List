import React from "react";
import ReactDOM from "react-dom";
import '../src/index.css';
import data from "./data";
import Card from "./Card";
// console.log(data);



ReactDOM.render(
  <>
 
  <div className="cards">
  <h1 >List of Netflix Series</h1>

  </div>


  {data.map((val) =>
  {
    return (
    <> 
      <Card
      key ={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      name={val.sname}
      link={val.link}/>
      </>
    )
  })
}



  {/* <Card imgsrc={data[0].imgsrc}
  title={data[0].title}
  name={data[0].sname}
  link={data[0].link}/> */}

  {/* <Card imgsrc={data[1].imgsrc}
  title={data[1].title}
  name={data[1].sname}
  link={data[1].link}/>

  <Card
  imgsrc={data[2].imgsrc}
  title={data[2].title}
  name={data[2].sname}
  link={data[2].link}/>

  <Card imgsrc={data[3].imgsrc}
  title={data[3].title}
  name={data[3].sname}
  link={data[3].link}/> */}
 
  </>,document.getElementById('root')
)