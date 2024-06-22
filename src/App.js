import React from "react";
import { Car } from "./Components/Gallery";
import carinfo from "./Components/data";
import Home from "./Components/Home";
//  const elementdata = <Car brand="Ford"/>

export default function App(){
  // console.log(carinfo[0].brand);
  return(
    <>
    <Car 
    brand={carinfo[0].brand}
    imgsrc={carinfo[0].imgscr}
    price={carinfo[0].price} />


    <Car brand={carinfo[1].brand}
    imgsrc={carinfo[1].imgscr}
    price={carinfo[1].price} />

    <Car brand={carinfo[2].brand}
    imgsrc={carinfo[2].imgscr}
    price={carinfo[2].price}/>

    <Car brand={carinfo[3].brand}
    imgsrc={carinfo[3].imgscr}
    price={carinfo[3].price}/>

    <Car brand={carinfo[4].brand}
    imgsrc={carinfo[4].imgscr}
    price={carinfo[4].price}/>
    

   
    </>
  )
}