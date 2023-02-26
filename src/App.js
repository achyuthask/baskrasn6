import './App.css';

import { useState } from 'react';


function App() {
  const [dark,setdark] = useState(false)
  return(
      <div className="App"  style={ dark ? {backgroundColor:"black",color:"white"} : {backgroundColor:"White",color:"black"}}>
      <button on onClick={()=>
      setdark(!dark)
      }>click me</button>
      <br></br>
          <h3 style={{color :"pink" }}>
            come waste time 
          </h3>
          <br></br>

          <h3 style={{color :"pink" }}>witth me</h3>
          <br></br>
          <br></br>
            <h1 style={{color :"pink" }}>THE WET CODE BASE</h1>
            <br></br>
          <br></br>
          <br></br>
          <h3 style={{color :"pink" }}>
            come waste time 
          </h3>
          <br></br> <br></br>
          <br></br>
          <h3 style={{color :"pink" }}>
            come waste time with me
          </h3>
          <br></br>
          <h3 style={{color :"pink" }}>
            come waste time with me
          </h3>
          <br></br>
          <h1 style={{color :"pink" }}>GOOD BYE,CLEAN CODE</h1>
          <br></br>
          <br></br>
          <h3  style={{color :"pink" }}>
            come waste time
          </h3>
          <br></br>
          <h3 style={{color :"pink" }}>
            come waste time with me
          </h3>
          <br></br>
          <h1 style={{color :"pink" }}>MY DECADE IN REVIEW</h1>

      </div>
    );
}
export default App;