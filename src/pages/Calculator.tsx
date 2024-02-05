// Importing necessary React hooks and components from dependencies
import React, { useState } from 'react';
import Layout from '../components/Layout';

// Importing CSS for styling
import '../styles/Calculator.css';

// Importing Bootstrap components and styles
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Defining the Calculator functional component
export default function Calculator() {
  // State variable to manage the input expression
  const [input, setInput] = useState<string>('');
  // State variable to track whether an operator has been clicked
  const [operatorClicked, setOperatorClicked] = useState<boolean>(false);

  // Function to handle button clicks and update the input expression
  const handleButtonClick = (value: string) => {
// Check if an operator is not clicked or the current value is not an operator
if (!operatorClicked || !'+-*/'.includes(value)) {
  // Check if the current input is '0'
  if (input === '0') {
    // If '0', replace it with the new value
    setInput(value);
  } else {
    // If not '0', append the new value to the existing input
    setInput((prevInput) => prevInput + value);
  }

  // Check if the current value is an operator
  if ('+-*/'.includes(value)) {
    // Set operatorClicked state to true if an operator is clicked
    setOperatorClicked(true);
  } else {
    // Set operatorClicked state to false if a non-operator button is clicked
    setOperatorClicked(false);
  }
} else {
  // If an operator is clicked again, replace the last operator with the new one
  setInput((prevInput) => prevInput.slice(0, -1) + value);
}

  };

  // Function to clear the input expression
  const handleClear = () => {
    setInput('');
    setOperatorClicked(false);
  };

  // Function to evaluate the input expression
  const handleEvaluate = () => {
    try {
      // Using eval to calculate the result
      const result = eval(input);
      // Formatting and updating the input with the result
      setInput(Number.isInteger(result) ? result.toString() : result.toFixed(2));
      setOperatorClicked(false);
    } catch (error) {
      // Handling errors and updating the input with an error message
      setInput('Error');
    }
  };

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
            <Col>
              <Button variant="danger" onClick={handleClear}>
                C
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('/')}>
                /
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('*')}>
                *
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('7')}>
                7
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('8')}>
                8
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('9')}>
                9
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('-')}>
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('4')}>
                4
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('5')}>
                5
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('6')}>
                6
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('+')}>
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('1')}>
                1
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('2')}>
                2
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('3')}>
                3
              </Button>
            </Col>
            <Col>
              <Button variant="success" onClick={handleEvaluate}>
                =
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('0')}>
                0
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleButtonClick('.')}>
                .
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
