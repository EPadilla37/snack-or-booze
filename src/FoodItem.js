import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate

  let snack = items.find(snack => snack.id === id);
  if (!snack) {
    navigate(cantFind); // Redirect to the specified route
    return null; // Return null to prevent rendering anything for the invalid route
  }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
