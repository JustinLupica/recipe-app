import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import NavBar from "./components/NavBar";
import RecipeDetails from "./components/RecipeDetails";
import "bootswatch/dist/slate/bootstrap.min.css";
import "./App.css";
import { connect } from "react-redux";
import SavedRecipes from "./components/SavedRecipes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  searchQuery = (query) => {
    this.setState({
      query: query,
    });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/">
          <SearchForm searchQuery={this.searchQuery} />
        </Route>
        <Route exact path="/recipe/:id" component={RecipeDetails} />
        <Route exact path="/saved_recipes" component={SavedRecipes} />
      </div>
    );
  }
}

//export default App;

export default connect(null)(App);
//same as:
//const returnedFunction = connect()
//export default returnedFunction(App)

// React Router
//BrowserRouter Component
//Route Component
//Link Component
