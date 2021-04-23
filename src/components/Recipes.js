import React from "react";
import Recipe from "./Recipe";

class Recipes extends React.Component {
  constructor(props) {
    super();
    this.state = {
      recipes: [],
    };
    console.log(props);
  }

  API_KEY = "142b402f15804516a38835cec56b9b54";

  componentDidMount() {
    this.fetchRecipes(this.props.query);
  }

  fetchRecipes(query, API_KEY) {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&apiKey=${this.API_KEY}&number=12`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setRecipesToState(data.results);
      });
  }

  setRecipesToState(recipes) {
    console.log(recipes);
    recipes.map((recipe) => {
      this.setState({
        recipes: [
          ...this.state.recipes,
          {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            healthScore: recipe.healthScore,
            glutenFree: recipe.glutenFree,
            vegan: recipe.vegan,
          },
        ],
      });
    });
  }

  render() {
    return (
      <div className="recipes">
        {this.state.recipes.map((recipe) => (
          <Recipe
            id={recipe.id}
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            // summary={recipe.summary}
            healthScore={recipe.healthScore}
            vegan={recipe.vegan}
            glutenFree={recipe.glutenFree}
          />
        ))}
      </div>
    );
  }
}

export default Recipes;
