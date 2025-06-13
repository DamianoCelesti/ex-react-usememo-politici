import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [politici, setPolitici] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3333/politicians')
      .then(res => res.json())
      .then(data => { setPolitici(data) });
  }, []);
  return (
    <ul>
      {politici.map(politico => (
        <li key={politico.id}>
          <h3>{politico.name}</h3>
          <img src={politico.image} alt="img rotta" />
          <p>{politico.position}</p>
          <p>{politico.biography}</p>
        </li>
      ))}
    </ul>
  )
}

export default App
