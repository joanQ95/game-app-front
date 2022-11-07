import axios from 'axios';
import { useState, useEffect } from "react";  
import './App.css';

function App() {
  const [array, setArray] = useState([]);
   const callapi = async ()=> {
     console.log(process.env.REACT_APP_URL_BACK)
    const info1 = await axios.get(process.env.REACT_APP_URL_BACK)
    console.log(info1)
    setArray(info1.data)
    return info1
  }
  useEffect(() => {
    callapi();
  },[]);

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
