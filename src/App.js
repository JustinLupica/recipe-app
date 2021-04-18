import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const API_KEY = '142b402f15804516a38835cec56b9b54';

  const [recipes, setRecipes] = useState([])


  useEffect(() => {
    getRecipes();
  }, [])
  
  const getRecipes = () => {fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setRecipes(data.results)
    })};
    

  return (
    <div className='App'>
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-button">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.title} title={recipe.title} image={recipe.image}/>
      ))}
    </div>
  )
}


export default App;
