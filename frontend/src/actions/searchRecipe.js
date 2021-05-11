export const searchRecipe = (query) => {
  return {
    type: "SEARCH",
    query,
  };
};
