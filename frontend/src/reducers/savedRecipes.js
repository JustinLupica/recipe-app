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
    default:
      return state;
  }
}
