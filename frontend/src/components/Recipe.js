import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faBreadSlice,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";

class Recipe extends React.Component {
  constructor(props) {
    super();
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
          <img src={this.props.image} className="card-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Vegan: {calculateVegan(this.props.vegan)}
                <span className="badge badge-primary badge-pill">
                  <FontAwesomeIcon icon={faSeedling} />
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Gluten Free: {calculateGlutenFree(this.props.glutenFree)}
                <span className="badge badge-primary badge-pill">
                  <FontAwesomeIcon icon={faBreadSlice} />
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                HealthScore: {this.props.healthScore}/100
                <span className="badge badge-primary badge-pill">
                  <FontAwesomeIcon icon={faWeight} />
                </span>
              </li>
              <ProgressBar
                animated
                now={this.props.healthScore}
                label={this.props.healthScore}
              />
            </ul>
            <Link to={`/recipe/${this.props.id}`}>
              <button className="btn btn-primary">View Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
