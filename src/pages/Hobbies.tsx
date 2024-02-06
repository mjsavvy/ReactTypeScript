// Importing React, Layout component, and Bootstrap styles and components
import React from 'react';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

// Interface for the hobby object
interface Hobby {
  title: string;
  description: string;
  imageSrc: string;
}

// Props interface for the HobbyCard component
interface HobbyCardProps {
  hobby: Hobby;
}

// Reusable HobbyCard component
const HobbyCard: React.FC<HobbyCardProps> = ({ hobby }) => (
  <Col md={4} className="mb-4">
    <Card>
      {/* Displaying an image for the hobby */}
      <Image src={hobby.imageSrc} alt={hobby.title} fluid />

      <Card.Body>
        {/* Displaying the title of the hobby */}
        <Card.Title>{hobby.title}</Card.Title>
        {/* Displaying the description of the hobby */}
        <Card.Text>{hobby.description}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

// Functional component for displaying hobbies
const Hobbies: React.FC = () => {
  // Array of hobby objects with title, description, and image source
  const hobbies: Hobby[] = [
    {
      title: 'Reading',
      description: 'I enjoy reading books, especially manga, and fiction.',
      imageSrc: 'https://news.virginia.edu/sites/default/files/article_image/science_of_reading.jpg',
    },
    {
      title: 'Coding',
      description: "Programming is not just a job for me; it's also one of my favorite hobbies.",
      imageSrc: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg',
    },
    {
      title: 'Travelling',
      description: 'Exploring and experiencing different things is a great way for me to unwind.',
      imageSrc: 'https://clipart-library.com/newhp/26-266233_people-traveling-png-transparent-background-travel-clipart-png.png',
    },
  ];

  return (
    <Layout>
      {/* Adding a moving background to the component */}
      <div className="moving-background">
        <Container className="mt-4">
          {/* Displaying a title for the hobbies section */}
          <h1 className="mb-4">My Hobbies</h1>
          {/* Container for rendering hobby cards in a row */}
          <Row>
            {/* Mapping through the hobbies array and rendering HobbyCard component for each hobby */}
            {hobbies.map((hobby, index) => (
              <HobbyCard key={index} hobby={hobby} />
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Hobbies;

