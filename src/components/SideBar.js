import React from "react";
import { ListGroup } from "react-bootstrap";

const SideBar = (props) => {
  return (
    <div className="col-md-12">
      <h1>Ingredients:</h1>
      <ListGroup variant="flush">
        {props.ingredients.map((ingredient) => (
          <ListGroup.Item>{ingredient}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SideBar;
