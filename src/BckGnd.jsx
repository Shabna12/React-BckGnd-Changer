import React from "react"

function BckGnd(){
    const violetChange =()=>{
      var body = document.body
      body.style.backgroundColor = "violet"
    }
    const indigoChange =()=>{
      var body = document.body
      body.style.backgroundColor = "indigo"
    }
    const blueChange =()=>{
      var body = document.body
      body.style.backgroundColor = "blue"
    }
    const greenChange =()=>{
      var body = document.body
      body.style.backgroundColor = "green"
    }
    const yellowChange =()=>{
      var body = document.body
      body.style.backgroundColor = "yellow"
    }
    const orangeChange =()=>{
      var body = document.body
      body.style.backgroundColor = "orange"
    }
    const redChange =()=>{
      var body = document.body
      body.style.backgroundColor = "red"
    }
   
    
    
    return(
      
      <>
        <div className="container">  
          <div>
            <button onClick={violetChange} style={{backgroundColor:'violet'}} className="color"></button>
            <button onClick={indigoChange} style={{backgroundColor:'indigo'}} className="color"></button>
            <button onClick={blueChange} style={{backgroundColor:'blue'}} className="color"></button>
            <button onClick={greenChange} style={{backgroundColor:'green'}} className="color"></button>
            <button onClick={yellowChange} style={{backgroundColor:'yellow'}} className="color"></button>
            <button onClick={orangeChange} style={{backgroundColor:'orange'}} className="color"></button>
            <button onClick={redChange} style={{backgroundColor:'red'}} className="color"></button>
          </div>
        </div>
      </>
     
    )
  }
  export default BckGnd