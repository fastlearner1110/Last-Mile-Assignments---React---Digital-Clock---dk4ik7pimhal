import React,{useState} from 'react';
import '../styles/App.css';
const App = () => {
  setInterval(updateTime,1000);
  let [time,setTime]=useState(new Date().toLocaleTimeString());
  function updateTime(){
    setTime(new Date().toLocaleTimeString());
  }
  return (
    <div id="main">
      <div className="date-time">{time}</div>
    </div>
  )
}


export default App;