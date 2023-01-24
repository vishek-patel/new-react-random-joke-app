import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [joke, setJoke] = useState('{Random joke shows here}')

  async function getJoke(){
    
    // const res = await fetch("https://icanhazdadjoke.com",{header:{Accept:'application/json'}})
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    const res = await fetch('https://icanhazdadjoke.com',config)
    const data = await res.json();

    setJoke(data.joke)
  }

  const style={
    color:'#547be8',
  }

  const styles = {
    padding:"10px 20px",
    marginTop:"10px"
  }

  return (

    <div className="App">
      
      <h1>Random Joke Application</h1>
      <h2 style={style}>{joke}</h2>
      <button onClick={getJoke} style={styles}>Get Joke</button>
      <footer><a href="https://github.com/vishek-patel">@Vishek-patel</a></footer>
    </div>
  )
}

export default App
