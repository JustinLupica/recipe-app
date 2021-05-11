import React from "react";
import Recipes from "./Recipes";
import { connect } from "react-redux";
import { searchRecipe } from "../actions/searchRecipe";
import { isRenderingRecipes } from "../actions/isRenderingRecipes";

class SearchForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const searchBar = document.getElementById("search-bar").value;
    //REDUX CODE --
    this.props.searchQuery(searchBar);
    {
      /* Trigger a Toggle in the Global State to render out the Recipes Container when something has been searched */
    }
    this.props.renderRecipes();
    //-------------
    e.target.reset();
  }

  render() {
    // const renderRecipesComponent = () => {
    //   if (this.props.query !== undefined) {
    //     return <Recipes query={this.props.query} />;
    //   } else {
    //     return null;
    //   }
    // };
    return (
      <div>
        <div>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              id="search-bar"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchQuery: (query) => {
      dispatch(searchRecipe(query));
    },
    renderRecipes: () => {
      dispatch(isRenderingRecipes());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    query: state.search.searchQuery,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

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
