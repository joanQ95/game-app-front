// import dotenv from "dotenv";
import axios from 'axios';
import { useState, useEffect } from "react";  
import './App.css';
require('dotenv').config();
const { URL} = process.env;
// import dotenv from 'dotenv';
// dotenv.config();

function App() {
  const [array, setArray] = useState([]);
   const callapi = async ()=> {
     console.log("por que",process.env)
    const info1 = await axios.get(process.env.URL)
    return info1
  }
  useEffect(() => {
    // setArray(callapi.then);
    callapi().then((e)=>console.log(e))
  },[]);

  return (
    <div className="App"> 
      <>probando</>
      {
        array.length?
          array.map((e)=>{
            console.log(e);
            return(
              <div>e.name</div>
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
