import React from "react";
import Recipes from "./Recipes";

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchBar = document.getElementById("search-bar").value;
    this.setState({
      query: searchBar,
    });
    e.target.reset();
    // this.props.searchQuery(this.state.query)
  }

  render() {
    const renderRecipesComponent = () => {
      if (this.state.query !== "") {
        return <Recipes query={this.state.query} />;
      } else {
        return <h1>Search for any food or dish above!</h1>;
      }
    };
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <label class="col-form-label" for="inputDefault">
            Search for ingredients or dishes:
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            id="search-bar"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
        {renderRecipesComponent()}
      </div>
    );
  }
}

export default SearchForm;
