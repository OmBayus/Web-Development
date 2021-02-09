import React,{useState} from "react"

function App(){

      var [time,setTime] = React.useState(new Date().toLocaleTimeString())
      function GetTime(){
            setTime(new Date().toLocaleTimeString())
      }

      setInterval(GetTime,1000)

      return <div className="container">
            <h1>{time}</h1>
            <button onClick={GetTime}>Get Time</button>
      </div>
}

export default App