import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import RecipeDetails from "./components/RecipeDetails";
import "bootswatch/dist/slate/bootstrap.min.css";
import "./App.css";
import { connect } from "react-redux";
import SavedRecipes from "./components/SavedRecipes";
import Recipes from "./components/Recipes";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/">
          {this.props.renderRecipes === true ? (
            <Recipes />
          ) : (
            <h1>Search for any dish or cuisine in the search bar above.</h1>
          )}
        </Route>
        <Route exact path="/recipe/:id" component={RecipeDetails} />
        <Route exact path="/saved_recipes" component={SavedRecipes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    renderRecipes: state.renderRecipes,
  };
};

export default connect(mapStateToProps)(App);

//THUNK (middleware):
//When we pass an action creator to a connect function,
//the return value is passed as the arg to dispatch.
//But, when we make fetch requests, the return value is not a plain JS object, it is a promise.
//Allows us to wait to call dispatch until after a promise is resolved, instead of automatically
//calling dispatch and hitting the reducer and thus updating the Global State.
//We can call dispatch manually when we want I.E. When a fetch request comes back with the data we need, and the promise is resolved.
//Thunk provides a third party extension point between dispatching an action,
//and the moment it reaches the reducer.

// const mapDispatchToProps = (dispatch) => {
//   debugger;
//   return {};
// };

// dispatch(action) {
//   reducer(currentStore, action)
// }

//Dispatch:
//It's a part of the redux store object.
//Accepts an action object as an Arg, and it invokes our Reducer; and passes the reducer the current store and the action arg.
//Only way to update our redux store (to CRUD the global state)

//Actions:
//A JS Object
//MUST have a type property
//Second optional property, that holds the data that we want to incorporate into our state
//They are sent as args, to dispatch and ultimately our reducer

//Reducer:
//Responsible for updating the Global State

//export default App;

//same as:
//const returnedFunction = connect()
//export default returnedFunction(App)

// React Router
//BrowserRouter Component
//Route Component
//Link Component
