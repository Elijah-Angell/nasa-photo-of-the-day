import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Explanation from "./components/Explanation";










function App() {
  const [nasapic, setNasaPic] = useState("");

  useEffect(() => {
    axios.get(" https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1")
      .then(res => {
        setNasaPic(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, []);


  console.table(nasapic)




  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Explanation />

    </div>
  );
}

export default App;
