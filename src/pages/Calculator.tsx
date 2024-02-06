// Importing necessary React hooks and components from dependencies
import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/Calculator.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Defining the Calculator functional component
export default function Calculator() {
  // State variable to manage the input expression
  const [input, setInput] = useState<string>("");
  // State variable to track whether an operator has been clicked
  const [operatorClicked, setOperatorClicked] = useState<boolean>(false);

  // Function to handle button clicks and update the input expression
  const handleButtonClick = (value: string) => {
    if (!operatorClicked || !"0+-*/".includes(value)) {
      if (input === "0") {
        setInput(value);
      } else {
        setInput((prevInput) => prevInput + value);
      }
      if ("+-*/".includes(value)) {
        setOperatorClicked(true);
      } else {
        setOperatorClicked(false);
      }
    } else {
      setInput((prevInput) => prevInput.slice(0, -1) + value);
    }
  };

  // Function to clear the input expression
  const handleClear = () => {
    setInput("");
    setOperatorClicked(false);
  };

  // Function to evaluate the input expression
  const handleEvaluate = () => {
    try {
      const result = eval(input);
      setInput(Number.isInteger(result) ? result.toString() : result.toFixed(2));
      setOperatorClicked(false);
    } catch (error) {
      setInput("Error");
    }
  };

  // Function to create buttons dynamically
  const createButton = (value: string, onClick: () => void, variant: string) => (
    <Col key={value}>
      <Button variant={variant} onClick={onClick}>
        {value}
      </Button>
    </Col>
  );

  // Rendering the Calculator component with input, buttons, and layout
  return (
    <Layout>
      <div className="moving-background">
        <Container className="calculator-container">
          <Row>
            <Col>
              <input className="form-control" type="text" value={input} readOnly />
            </Col>
          </Row>
          <Row>
            {createButton("C", handleClear, "danger")}
            {createButton("/", () => handleButtonClick("/"), "secondary")}
            {createButton("*", () => handleButtonClick("*"), "secondary")}
          </Row>
          <Row>
            {[7, 8, 9, "-"].map((value) =>
              createButton(value.toString(), () => handleButtonClick(value.toString()), "secondary")
            )}
          </Row>
          <Row>
            {[4, 5, 6, "+"].map((value) =>
              createButton(value.toString(), () => handleButtonClick(value.toString()), "secondary")
            )}
          </Row>
          <Row>
            {[1, 2, 3, "="].map((value) =>
              createButton(value.toString(), value === "=" ? handleEvaluate : () => handleButtonClick(value.toString()), value === "=" ? "success" : "secondary")
            )}
          </Row>
          <Row>
            {createButton("0", () => handleButtonClick("0"), "secondary")}
            {createButton(".", () => handleButtonClick("."), "secondary")}
          </Row>
        </Container>
      </div>
    </Layout>
  );
}