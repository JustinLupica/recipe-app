import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import SideBar from "./SideBar";

class RecipeDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: [],
      title: "",
    };
  }

  API_KEY = "142b402f15804516a38835cec56b9b54";

  componentDidMount() {
    this.fetchRecipe(this.props.match.params.id);
  }

  fetchRecipe(id) {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${this.API_KEY}`
    )
      .then((res) => res.json())
      .then((recipe) => {
        console.log(recipe);
        this.setRecipeToState(recipe);
      });
  }

  setRecipeToState = (recipe) => {
    recipe.extendedIngredients.map((ingredient) => {
      console.log(ingredient);
      this.setState({
        ingredients: [...this.state.ingredients, ingredient.original],
      });
    });
    const recipeTitle = recipe.title;
    this.setState({
      title: recipeTitle,
    });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm={3}>
              <SideBar
                ingredients={this.state.ingredients}
                title={this.state.title}
              />
            </Col>
            <Col sm={7}>
              <h1>{this.state.title}</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RecipeDetails;
