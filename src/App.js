// import dotenv from "dotenv";
import axios from 'axios';
import { useState, useEffect } from "react";  
import './App.css';
// import dotenv from 'dotenv';
// dotenv.config();

function App() {
  const [array, setArray] = useState([]);
   const callapi = async ()=> {
    const info1 = await axios.get(process.env.REACT_APP_URL_BACK)
    setArray(info1.data)
    return info1
  }
  useEffect(() => {
    // setArray(callapi.then);
    callapi();
  },[]);
//background_image

console.log(array)
  return (
    <div className="App"> 
      {
        array.length?
          array.map((e)=>{
            console.log(e.background_image);
            return(
              <div>
               <img style={{width:"50rem"}} src={e.background_image} alt="MDN"/></div>
            )
          }
          )
        :
          <label>NO TENGO NADA</label>
      }
    </div>
  );
}

export default App;
