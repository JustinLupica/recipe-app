export const mySavedRecipes = (recipes) => {
  return {
    type: "ADD_SAVED_RECIPES",
    recipes,
  };
};

export const removeRecipe = (recipe_id) => {
  return {
    type: "REMOVE_RECIPE",
    recipe_id,
  };
};
