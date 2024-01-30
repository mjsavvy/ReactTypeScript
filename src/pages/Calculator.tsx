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

  // Function to handle button clicks and update the input expression
  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to clear the input expression
  const handleClear = () => {
    setInput('');
  };

  // Function to evaluate the input expression
  const handleEvaluate = () => {
    try {
      // Using eval to calculate the result
      const result = eval(input);
      // Formatting and updating the input with the result
      setInput(Number.isInteger(result) ? result.toString() : result.toFixed(2));
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
