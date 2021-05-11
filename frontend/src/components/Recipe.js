import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faBreadSlice,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

class Recipe extends React.Component {
  constructor(props) {
    super();
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
              <button
                onClick={(e) => this.postRecipeToDb(e, this.props.details.id)}
                className="btn btn-outline-info"
              >
                Save This Recipe
              </button>
            </Card.Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.search,
  };
};

export default connect(mapStateToProps)(Recipe);
