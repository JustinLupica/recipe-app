import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faBreadSlice,
  faWeight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increment } from "../actions/increment";

class RecipeCard extends React.Component {
  handleClick(e, id) {
    console.log(id);
    e.preventDefault();
    this.props.increment(id);
  }

  postRecipeToDb(e, id) {
    e.preventDefault();
    console.log(id);
    const recipe = {
      recipe_id: id,
    };
    fetch(`http://localhost:3000/recipes`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    }).then((res) => console.log(res));
  }

  removeRecipeFromDb(id) {
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE",
    });
  }

  // renderCounters() {
  //   return this.props.count.map((value, i) => {
  //     return (
  //       <div>
  //         <p>{value}</p>
  //         <p>
  //           <button onClick={() => this.props.increment(i)}> + </button>
  //         </p>
  //       </div>
  //     );
  //   });
  // }

  render() {
    const calculateVegan = (vegan) => {
      if (vegan === false) {
        return (vegan = "No");
      } else {
        return (vegan = "Yes");
      }
    };
    const calculateGlutenFree = (glutenFree) => {
      if (glutenFree === false) {
        return (glutenFree = "No");
      } else {
        return (glutenFree = "Yes");
      }
    };

    return (
      <div className="col-lg-3">
        <div className="card mb-3">
          <img
            src={this.props.details.image}
            className="card-image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.details.title}</h5>
            <p className="card-text"></p>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Vegan: {calculateVegan(this.props.details.vegan)}
                <span className="badge badge-primary badge-pill">
                  <FontAwesomeIcon icon={faSeedling} />
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Gluten Free:{" "}
                {calculateGlutenFree(this.props.details.glutenFree)}
                <span className="badge badge-primary badge-pill">
                  <FontAwesomeIcon icon={faBreadSlice} />
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                HealthScore: {this.props.details.healthScore}/100
                <span className="badge badge-primary badge-pill">
                  <FontAwesomeIcon icon={faWeight} />
                </span>
              </li>
              <ProgressBar
                animated
                now={this.props.details.healthScore}
                label={this.props.details.healthScore}
              />
            </ul>
            <Link to={`/recipe/${this.props.details.id}`}>
              <button className="btn btn-primary">View Recipe</button>
            </Link>
            <Card.Link href="#">
              {this.props.recipe === "saved-recipe" ? (
                <Button
                  variant="danger"
                  onClick={
                    () => this.props.removeRecipe(this.props.details.id)
                    // () => this.removeRecipeFromDb(this.props.details.id))
                  }
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              ) : (
                <Button
                  variant="info"
                  onClick={(e) => this.postRecipeToDb(e, this.props.details.id)}
                >
                  Save This Recipe
                </Button>
              )}
              <button
                onClick={() => this.props.increment(this.props.details.id)}
              >
                +
              </button>
              <span>{this.props.count}</span>
            </Card.Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (id) => {
      dispatch(increment(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    recipes: state.search,
    count: state.increment,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
