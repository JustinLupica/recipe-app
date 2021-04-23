import React, { useEffect, useState } from "react";
import "./bootstrap.min.css";


function RecipeDetail(id) {

  useEffect(() => {fetchRecipe()}, []);

  const [recipe, setRecipe] = useState({});

  const fetchRecipe = () => {};

    return (
    <div>
      <h1>Recipe</h1>
    </div>
    );
}


export default RecipeDetail;
