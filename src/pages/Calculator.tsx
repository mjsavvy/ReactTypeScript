import React, { useState } from "react"; // Import React library for using React components and useState hook
import Layout from "../components/Layout"; // Importing custom Layout component
import "../styles/Calculator.css"; // Importing custom CSS for the calculator
import { Button, Container, Row, Col } from "react-bootstrap"; // Importing necessary components from React Bootstrap library
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS

// Calculator component definition
export default function Calculator() {
  // State for input value
  const [input, setInput] = useState<string>("");
  // State for tracking if an operator button is clicked
  const [operatorClicked, setOperatorClicked] = useState<boolean>(false);
  // State for error message
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Function to handle button click
  const handleButtonClick = (value: string) => {
    // Check if input already contains a decimal point
    if (value === "." && input.includes(".")) {
      return;
    }

    // Clear error message if present
    if (errorMessage) {
      setInput("");
      setErrorMessage("");
    }

    // Check if operator button is clicked
    if (!operatorClicked || !"+-*/".includes(value)) {
      // Set input value based on button clicked
      if (input === "0" && value !== ".") {
        setInput(value);
      } else {
        setInput((prevInput) => prevInput + value);
      }
      // Set operatorClicked state
      if ("+-*/".includes(value)) {
        setOperatorClicked(true);
      } else {
        setOperatorClicked(false);
      }
    } else {
      // Replace last operator with new one
      setInput((prevInput) => prevInput.slice(0, -1) + value);
    }
  };

  // Function to handle clear button click
  const handleClear = () => {
    setInput("");
    setOperatorClicked(false);
    // Clear error message on clear
    setErrorMessage("");
  };

  // Function to handle evaluate button click
  const handleEvaluate = () => {
    try {
      // Remove leading zeros
      const sanitizedInput = input.replace(/\b0+(?!\b)/g, '');
      // Evaluate input expression
      const result = eval(sanitizedInput);
      // Display result with 2 decimal places if not an integer
      setInput(Number.isInteger(result) ? result.toString() : result.toFixed(5));
      setOperatorClicked(false);
    } catch (error) {
      setInput("Error");
      // Set error message if evaluation fails
      setErrorMessage("Error");
    }
  };

  // Function to create calculator button
  const createButton = (value: string, onClick: () => void, variant: string) => (
    <Col key={value}>
      <Button variant={variant} onClick={onClick}>
        {value}
      </Button>
    </Col>
  );

  return (
    // Layout component wrapper
    <Layout>
      <div className="moving-background">
        {/* Container for calculator */}
        <Container className="calculator-container">
          {/* Input field for displaying the input */}
          <Row>
            <Col>
              <input className="form-control" type="text" value={input} readOnly />
            </Col>
          </Row>
          {/* Row for operator buttons */}
          <Row>
            {createButton("C", handleClear, "danger")}
            {createButton("/", () => handleButtonClick("/"), "secondary")}
            {createButton("*", () => handleButtonClick("*"), "secondary")}
          </Row>
          {/* Rows for numeric buttons */}
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
          {/* Row for zero and decimal point */}
          <Row>
            {createButton("0", () => handleButtonClick("0"), "secondary")}
            {createButton(".", () => handleButtonClick("."), "secondary")}
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
