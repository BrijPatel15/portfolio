import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [text, setText] = useState('');
  useEffect(() => {
    fetch("http://localhost:3000")
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setText(data);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, []);

  return (
    <h1>{text}</h1>
  );
}

export default App;
