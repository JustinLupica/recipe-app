import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const API_KEY = '142b402f15804516a38835cec56b9b54';

  useEffect( () => {
    
  }, [])

  //Refactor using typical fetch request and .then
  // const getRecipes = async () => {
  //   const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${API_KEY}`)
  //   const data = await response.json();
  //   console.log(data)
  //  }

   fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => console.log(data))

  return (
    <div className='App'>
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  )
}


export default App;
