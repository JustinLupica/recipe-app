const increment = (state = 0, action) => {
  let index;
  let recipe;

  switch (action.type) {
    case "INCREMENT":
      return (state += 1);
    default:
      return state;
  }
};

export default increment;
