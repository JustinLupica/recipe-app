import React from "react";
import { connect } from "react-redux";
import Recipe from "./Recipe";
// import { recipeResults } from "../actions/recipeResults";
import { fetchRecipes } from "../actions/recipeResults";

class Recipes extends React.Component {
  API_KEY = "142b402f15804516a38835cec56b9b54";

  componentDidMount() {
    // this.fetchRecipes(this.props.query);
    //Incorporating Thunk and calling dispatch in the actions
    this.props.fetchRecipes(this.props.query);
    console.log("Recipes Container Component Mounted");
  }

  setRecipesToState(recipes) {
    //REDUX CODE ---
    this.props.recipeResults(recipes);
  }

  render() {
    return (
      <div className="recipes">
        {this.props.recipes !== undefined ? (
          this.props.recipes.map((recipe) => (
            <Recipe key={recipe.id} details={recipe} />
          ))
        ) : (
          <h1>
            We're Sorry. It looks like you have reached your daily limit of
            queries. Please come back tomorrow
          </h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipeResults.recipeResults,
    query: state.search.searchQuery,
  };
};

export default connect(mapStateToProps, { fetchRecipes })(Recipes);
