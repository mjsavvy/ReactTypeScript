import React from 'react'; // Import React library for using React components
import Layout from '../components/Layout'; // Importing custom Layout component
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import { Container, Row, Col, Card } from 'react-bootstrap'; // Importing necessary components from React Bootstrap library

// Defining interface for Hobby object
interface Hobby {
  title: string;
  description: string;
  imageSrc: string;
}

// Defining interface for props of HobbyCard component
interface HobbyCardProps {
  hobby: Hobby;
}

// HobbyCard component definition
const HobbyCard: React.FC<HobbyCardProps> = ({ hobby }) => (
  // Column with medium width 4 and margin bottom 4
  <Col md={4} className="mb-4">
    {/* Card component from React Bootstrap */}
    <Card className="h-100">
      {/* Container for image with fixed height and overflow hidden */}
      <div style={{ height: '200px', overflow: 'hidden' }}>
        {/* Image for hobby with specific styling */}
        <Card.Img variant="top" src={hobby.imageSrc} alt={hobby.title} className="card-img-top" style={{ height: '100%', objectFit: 'cover' }} />
      </div>
      {/* Body of the card */}
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          {/* Title of the hobby */}
          <Card.Title className="text-center">{hobby.title}</Card.Title>
          {/* Description of the hobby */}
          <Card.Text className="text-center">{hobby.description}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  </Col>
);

// Hobbies component definition
const Hobbies: React.FC = () => {
  // Array of Hobby objects
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
      imageSrc: 'https://www.vhv.rs/dpng/f/405-4056956_earth-travel-world-png-transparent-image-travel-around.png',
    },
  ];

  return (
    // Layout component wrapper
    <Layout>
      {/* Container for hobbies with margin top 4 */}
      <div className="moving-background">
        <Container className="mt-4">
          {/* Heading for hobbies */}
          <h1 className="mb-4 text-center">My Hobbies</h1>
          {/* Row for displaying hobbies */}
          <Row>
            {/* Mapping hobbies to HobbyCard components */}
            {hobbies.map((hobby, index) => (
              <HobbyCard key={index} hobby={hobby} />
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

// Exporting Hobbies component as default
export default Hobbies;
