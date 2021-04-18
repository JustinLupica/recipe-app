import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const API_KEY = '142b402f15804516a38835cec56b9b54';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getRecipes();
  }, [query])
  
  const getRecipes = () => {fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setRecipes(data.results)
    })};
    
  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    console.log(query)
    setQuery(search)
    setSearch('')
  }

  return (
    <div className='App'>
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe => (
        <Recipe key={recipe.title} title={recipe.title} image={recipe.image}/>
      ))}
      </div>
    </div>
  )
}


export default App;
