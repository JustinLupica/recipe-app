import React from "react";
import { connect } from "react-redux";
import { mySavedRecipes } from "../actions/mySavedRecipes";
import Recipe from "./Recipe";

class SavedRecipes extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

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
        console.log(data);
        this.setRecipesToState(data);
      });
  }

  setRecipesToState(recipes) {
    console.log("Recipes:", recipes);
    // recipes.map((recipe) => {
    //   this.setState({
    //     recipes: [
    //       ...this.state.recipes,
    //       {
    //         id: recipe.id,
    //         title: recipe.title,
    //         image: recipe.image,
    //         healthScore: recipe.healthScore,
    //         glutenFree: recipe.glutenFree,
    //         vegan: recipe.vegan,
    //       },
    //     ],
    //   });
    // });
    //REDUX CODE:
    this.props.mySavedRecipes(recipes);
  }

  render() {
    return (
      <div className="recipes">
        {this.props.myRecipes.map((recipe) => (
          <Recipe
            details={recipe[0]}
            // id={recipe.id}
            // key={recipe.id}
            // title={recipe.title}
            // image={recipe.image}
            // // summary={recipe.summary}
            // healthScore={recipe.healthScore}
            // vegan={recipe.vegan}
            // glutenFree={recipe.glutenFree}
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
  };
};

const mapStateToProps = (state) => {
  return {
    myRecipes: state.mySavedRecipes.mySavedRecipes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipes);