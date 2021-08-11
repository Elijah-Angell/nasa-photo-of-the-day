import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'











function App() {
  const [nasapic, setNasaPic] = useState([]);
  const [title, setTitle] = useState([]);
  const [date, setDate] = useState([]);
  const [explanation, setExplanation] = useState([])
  const [author, setAuthor] = useState([])

  useEffect(() => {
    axios.get(" https://api.nasa.gov/planetary/apod?api_key=AKjTj8JDEFEIdVmr3yzGcAgNvyr3cxz5UjROP886")
      .then(res => {
        setNasaPic(res.data)
        setTitle(res.data)
        setDate(res.data)
        setExplanation(res.data)
        setAuthor(res.data)
      })
      .catch(err => console.log(err))
  }, []);


  console.table(nasapic)




  return (
    <div className="App">
      <h1>{title.title}</h1>
      <h2>By {author.copyright}</h2>
      <img src={nasapic.hdurl}></img>
      <p>{explanation.explanation}</p>
      <p>{date.date}</p>

    </div>
  );
}

export default App;
