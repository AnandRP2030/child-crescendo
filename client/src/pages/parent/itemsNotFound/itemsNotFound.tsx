import React from "react";
import { Container, Image } from "react-bootstrap";
import "./itemsNotFound.css";
import notFoundImg1 from "../../../assets/not-found-1.jpg";

export const ItemsNotFound: React.FC = ({
  title = "No Todo Items Found",
  description = "  You have no pending tasks. Enjoy your free time!",
}) => {
  return (
    <Container className="no-todo-container text-center">
      <Image src={notFoundImg1} alt="No Todo Items" className="no-todo-image" />
      <h2 className="no-todo-text">{title}</h2>
      <p className="no-todo-subtext">{description}</p>
    </Container>
  );
};
