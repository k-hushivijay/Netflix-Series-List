import '../Components/styling.css';
import Home from './Home';
import { CARDATA } from './data';


const jump = (CARDATA) =>{console.log(CARDATA);}

export function Car(props){
    // console.log(props);
    return(
      <>
      
      <div className="CARS">

      
      <div className='CARS1'>

      <img onClick={jump} src={props.imgsrc}/>
      <h1>Iam a {props.brand} car</h1>
      <h2>It's price is {props.price}</h2>
      </div>
      </div>
      </>
    )
  }