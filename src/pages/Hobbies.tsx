// Importing React, Layout component, and Bootstrap styles and components
import React from 'react';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

// Functional component for displaying hobbies
export default function Hobbies() {
  // Array containing hobby objects with title, description, and image source
  const hobbies = [
    {
      title: 'Reading',
      description: 'I enjoy reading books, especially manga, and fiction.',
      imageSrc: 'https://news.virginia.edu/sites/default/files/article_image/science_of_reading.jpg', // Replace with the actual path to your image
    },
    {
      title: 'Coding',
      description: "Programming is not just a job for me; it's also one of my favorite hobbies.",
      imageSrc: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg', // Replace with the actual path to your image
    },
    {
      title: 'Travelling',
      description: 'Exploring and experiencing different things is a great way for me to unwind.',
      imageSrc: 'https://clipart-library.com/newhp/26-266233_people-traveling-png-transparent-background-travel-clipart-png.png', // Replace with the actual path to your image
    },
  ];

  // Rendering the Hobbies component with layout, title, and hobby cards
  return (
    <Layout>
      <div className="moving-background">
        <Container className="mt-4">
          {/* Displaying the title */}
          <h1 className="mb-4">My Hobbies</h1>
          <Row>
            {/* Mapping through the hobbies array to create Card components */}
            {hobbies.map((hobby, index) => (
              <Col key={index} md={4} className="mb-4">
                {/* Card component displaying hobby information */}
                <Card>
                  {/* Image component for displaying the hobby image */}
                  <Image src={hobby.imageSrc} alt={hobby.title} fluid />

                  <Card.Body>
                    {/* Displaying hobby title */}
                    <Card.Title>{hobby.title}</Card.Title>
                    {/* Displaying hobby description */}
                    <Card.Text>{hobby.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
