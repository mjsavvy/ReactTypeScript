// Importing necessary React hooks and components from dependencies
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col, Form } from 'react-bootstrap';

// Importing the CSS file for styling
import '../styles/Home.css';

// Defining the functional component Home
const Home: React.FC = () => {
  // State variables for managing typed text and index for the typing effect
  const [text, setText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  // Static text and typing speed for the typing effect
  const words = 'Digital Transformation';
  const typingSpeed = 100; // Adjust typing speed (milliseconds per character)

  // useEffect hook for simulating typing effect and cleaning up the interval
  useEffect(() => {
    // Interval to simulate typing effect
    const typingInterval = setInterval(() => {
      // Checking if there are characters left to type
      if (index < words.length) {
        // Updating the text and index
        setText((prevText) => prevText + words[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        // Clearing the interval when typing is complete
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    // Cleanup function to clear the interval on component unmount
    return () => {
      clearInterval(typingInterval);
    };
  }, [index]);

  // Rendering the layout with components and elements
  return (
    <Layout>
      <Container fluid>
        <Row className="moving-background">
          <Col className="content">
            {/* Displaying the dynamically typed text */}
            
            <h1>{text}</h1>
            {/* Form section with input for the user's name */}
            <div className='form'>
              <p>Created by:</p>
              <Form.Control type="text" placeholder="Enter your name" className="transparent-input" />
            </div>
            {/* Line divider */}
            <div className="line"></div>
            {/* Subheading */}
            <h2>React Bootstrap And TypeScript Activity</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

// Exporting the Home component as the default export
export default Home;
