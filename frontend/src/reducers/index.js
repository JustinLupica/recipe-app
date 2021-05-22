import { combineReducers } from "redux";
import searchRecipe from "./searchRecipe";
import savedRecipes from "./savedRecipes";
import recipeResults from "./recipeResults";
import isRenderingRecipes from "./isRenderingRecipes";
import increment from "./increment";

const allReducers = combineReducers({
  search: searchRecipe,
  mySavedRecipes: savedRecipes,
  recipeResults: recipeResults,
  renderRecipes: isRenderingRecipes,
  increment: increment,
});

export default allReducers;
