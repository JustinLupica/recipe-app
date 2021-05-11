export default function savedRecipes(
  state = {
    mySavedRecipes: [],
  },
  action
) {
  //switch

  switch (action.type) {
    case "ADD_SAVED_RECIPES":
      return {
        ...state,
        mySavedRecipes: [...state.mySavedRecipes, action.recipes],
      };
    case "REMOVE_RECIPE":
      debugger;
      return {
        mySavedRecipes: [
          state.mySavedRecipes.filter(
            (recipe) => recipe.id !== action.recipe_id
          ),
        ],
      }; //state.mySavedRecipes.filter(
    //   (recipe) => recipe.id !== action.recipe_id
    // );
    default:
      return state;
  }
}
