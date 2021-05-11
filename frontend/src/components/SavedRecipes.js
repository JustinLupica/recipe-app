import React from "react";
import { connect } from "react-redux";
import { mySavedRecipes } from "../actions/mySavedRecipes";
import RecipeCard from "./RecipeCard";
import { removeRecipe } from "../actions/mySavedRecipes";

class SavedRecipes extends React.Component {
  API_KEY = "142b402f15804516a38835cec56b9b54";

  componentDidMount() {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.map((recipe) => this.fetchRecipeBulk(recipe.recipe_id));
      });
  }

  fetchRecipeBulk(id) {
    console.log(id);
    const recipe_ids = [];
    recipe_ids.unshift(id);
    const arrayString = recipe_ids.toString();
    console.log("IDS:", arrayString);
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?ids=${arrayString}&apiKey=${this.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("API Fetch Call: ", data);
        this.setRecipesToState(data);
      });
  }

  setRecipesToState(recipes) {
    console.log("Recipes:", recipes);
    //REDUX CODE:
    this.props.mySavedRecipes(recipes);
  }

  render() {
    return (
      <div className="recipes">
        {this.props.myRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe="saved-recipe"
            details={recipe[0]}
            removeRecipe={this.props.removeRecipe}
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mySavedRecipes: (recipes) => {
      dispatch(mySavedRecipes(recipes));
    },
    removeRecipe: (recipe) => {
      dispatch(removeRecipe(recipe));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myRecipes: state.mySavedRecipes.mySavedRecipes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipes);
