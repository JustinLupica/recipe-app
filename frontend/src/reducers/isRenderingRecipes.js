const isRenderingRecipes = (state = false, action) => {
  switch (action.type) {
    case "RENDER_RECIPES":
      return true;
    default:
      return state;
  }
};

export default isRenderingRecipes;
