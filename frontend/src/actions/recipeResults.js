// export const recipeResults = (recipes) => {
//   return {
//     type: "ADD_RECIPE_RESULTS",
//     recipes,
//   };
// };

export const fetchRecipes = (query) => {
  return (dispatch) => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&apiKey=142b402f15804516a38835cec56b9b54&number=12`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetching Recipes!", data);
        dispatch({ type: "ADD_RECIPE_RESULTS", recipeResults: data.results });
        // this.setRecipesToState(data.results);
      });
  };
};
