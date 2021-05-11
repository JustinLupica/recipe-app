export const mySavedRecipes = (recipes) => {
  return {
    type: "ADD_SAVED_RECIPES",
    recipes,
  };
};
