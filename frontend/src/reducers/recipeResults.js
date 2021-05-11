export default function recipeResults(
  state = {
    recipeResults: [],
  },
  action
) {
  //switch
  switch (action.type) {
    case "ADD_RECIPE_RESULTS":
      return {
        recipeResults: action.recipeResults,
      };
    default:
      return state;
  }
}
