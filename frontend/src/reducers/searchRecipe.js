export default function searchRecipe(state = {}, action) {
  //switch
  switch (action.type) {
    case "SEARCH":
      return {
        searchQuery: action.query,
      };
    default:
      return state;
  }
  //recieves a previous state and action
  //return a newly updated state
  //reduce the previous state and action into a new state
  //does NOT mutate the state directly, but instead returns a brand new state to replace the old one
}
