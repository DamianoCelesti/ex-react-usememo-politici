import { useState, useEffect, useMemo } from 'react'
import './App.css'
import React from 'react';



function PoliticiCard({ politico }) {
  return (
    <li>
      <h3>{politico.name}</h3>
      <img src={politico.image} alt="img rotta" />
      <p>{politico.position}</p>
      <p>{politico.biography}</p>
    </li>
  )
}
const PoliticiMemo = React.memo(PoliticiCard);



function App() {
  const [politici, setPolitici] = useState([]);
  const [cerca, setCerca] = useState("");

  useEffect(() => {
    fetch('http://localhost:3333/politicians')
      .then(res => res.json())
      .then(data => { setPolitici(data) });
  }, []);

  const filtroPolitici = useMemo(() => {
    return politici.filter(politico =>
      politico.name.toLowerCase().includes(cerca.toLowerCase()) ||
      politico.biography.toLowerCase().includes(cerca.toLowerCase())
    );
  }, [politici, cerca]);


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
          <PoliticiMemo key={politico.id} politico={politico} />
        ))}
      </ul>
    </>
  )
}

export default App
