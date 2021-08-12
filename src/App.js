import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import React , {useEffect, useState} from 'react'


function App() {
  let state = useSelector((state) => state.store.foo);
  const [time, setTime] = useState(undefined)
  const dispatch = useDispatch();


  useEffect(() => {
    const interval = setInterval(() => {
      var randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    dispatch({ type: "CHANGE_COLOR", payload: randColor });
   
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  setInterval(()=>{
    var dateFormat = require('dateformat');
    var now = new Date();
    var date = dateFormat(now, "yyyy-mm-dd, HH:MM:ss");
    setTime(date);
  },1000)

  return (
    <div style={{ backgroundColor: state, height:"100vh"}}>
      <header className="App-header">
        <p>{time}</p>
      </header>
    </div>
  );
}

export default App;
