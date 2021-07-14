import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'










function App() {
  const [nasapic, setNasaPic] = useState('');

  useEffect(() => {
    axios.get(" https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1")
      .then(res => {
        setNasaPic(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, []);







  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <img src={nasapic} alt="a random space pic" />
    </div>
  );
}

export default App;
