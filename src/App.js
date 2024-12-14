import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
function App() {

  const [user, setUser] = useState([]);

  const fetchData = ()=>{
    fetch("https://randomuser.me/api/?results=1")
    .then(response => response.json())
    .then(data => setUser(data))
  }

  useEffect(() => {
    fetchData();
  },[]);
  
  return ( Object.keys(user).length > 0 ? (
    <div>
      <h1>Data Returned</h1>
      <h2>First Name: {user.results[0].name.first} </h2>
      <h2>First Name: {user.results[0].name.last} </h2>
    </div>
  ): (
      <h1>Peding Data</h1>
  )
     );
}

export default App;
