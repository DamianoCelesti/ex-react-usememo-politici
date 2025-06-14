import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [politici, setPolitici] = useState([]);
  const [cerca, setCerca] = useState("");

  useEffect(() => {
    fetch('http://localhost:3333/politicians')
      .then(res => res.json())
      .then(data => { setPolitici(data) });
  }, []);

  const filtroPolitici = politici.filter(politico =>
    politico.name.toLowerCase().includes(cerca.toLowerCase()) ||
    politico.biography.toLowerCase().includes(cerca.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Cerca"
        value={cerca}
        onChange={(event) => setCerca(event.target.value)}
      />
      <ul>
        {filtroPolitici.map(politico => (
          <li key={politico.id}>
            <h3>{politico.name}</h3>
            <img src={politico.image} alt="img rotta" />
            <p>{politico.position}</p>
            <p>{politico.biography}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
