import React from "react";
import {
  Container,
  Col,
  Row,
  ListGroup,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import SideBar from "./SideBar";

class RecipeDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: [],
      title: "",
      instructions: [],
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
      image: recipe.image,
      servings: recipe.servings,
      cookTime: recipe.readyInMinutes,
      healthScore: recipe.healthScore,
    });
    recipe.analyzedInstructions[0].steps.map((step) => {
      this.setState({
        instructions: [...this.state.instructions, step.step],
      });
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
            <Col sm={6}>
              <h1>{this.state.title}</h1>
              <ListGroup as="ul">
                {this.state.instructions.map((step) => (
                  <ListGroup.Item>{step}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col sm={3}>
              <h1>About This Recipe:</h1>
              <Card>
                <Card.Img variant="top" src={this.state.image} />
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Servings: {this.state.servings}</ListGroupItem>
                  <ListGroupItem>
                    Cook Time: {this.state.cookTime} minutes
                  </ListGroupItem>
                  <ListGroupItem>
                    Health Score: {this.state.healthScore}/100
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">
                    <button
                      onClick={(e) =>
                        this.postRecipeToDb(e, this.props.match.params.id)
                      }
                      className="btn btn-primary"
                    >
                      Save This Recipe
                    </button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RecipeDetails;
