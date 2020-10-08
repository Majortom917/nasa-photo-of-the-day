import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Head/>
      <Main/>
    </div>
  );

  function Head(props) {
    return (
      <div>
        
        <a>home</a>
        <a>contact</a>
        <a>about</a>
        <a>home</a>
      
      </div>
    )
  }

  function Main(props) {
    const [pic, setPic] = useState([])
      useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
            console.log(response.data.results);
            setPic(response.data.results);
  })
      .catch(error => {
             console.log(error);
  });
}, []);
}
}
      
export default App;
