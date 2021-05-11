import { combineReducers } from "redux";
import searchRecipe from "./searchRecipe";
import savedRecipes from "./savedRecipes";
import recipeResults from "./recipeResults";
import isRenderingRecipes from "./isRenderingRecipes";

const allReducers = combineReducers({
  search: searchRecipe,
  mySavedRecipes: savedRecipes,
  recipeResults: recipeResults,
  renderRecipes: isRenderingRecipes,
});

export default allReducers;
