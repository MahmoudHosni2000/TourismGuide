import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Styles/FamousActivities.css";
import giza from "../Assets/giza.jpg";
import kings from "../Assets/kings.jpg";
import luxor from "../Assets/luxor.jpg";
import simple from "../Assets/abosimple.jpg";

const activities = [
  {
    id: 1,
    title: "Pyramids of Giza",
    description:
      "Explore the iconic pyramids and the Sphinx, one of the Seven Wonders of the Ancient World.",
    imageUrl: giza,
    cost: "Starts from $299.00",
  },
  {
    id: 2,
    title: "Luxor Temple",
    description:
      "Discover the magnificent Luxor Temple with its grand columns and historical significance.",
    imageUrl: luxor,
    cost: "Starts from $199.00",
  },
  {
    id: 3,
    title: "Valley of the Kings",
    description:
      "Visit the Valley of the Kings and explore the tombs of ancient Egyptian kings and queens.",
    imageUrl: kings,
    cost: "Starts from $499.00",
  },
  {
    id: 4,
    title: "Abu Simbel",
    description:
      "Marvel at the colossal statues of Ramses II and his queen at Abu Simbel.",
    imageUrl: simple,
    cost: "Starts from $250.00",
  },
];

export default function FamousActivities() {

  return (
    <>
      {activities.map((activity) => (
        <Card key={activity.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={activity.imageUrl} />
          <Card.Body>
            <Card.Title>{activity.title}</Card.Title>
            <Card.Text>{activity.description}</Card.Text>
            <Button
              variant="primary"
            >
              Explore More
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
