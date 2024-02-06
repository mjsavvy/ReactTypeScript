// Importing necessary React hooks, axios, Bootstrap components, Layout component, and CSS
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';
import Layout from '../components/Layout';
import '../styles/Json.css';

// Interface defining the structure of a user object
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

// Reusable UserCard component
const UserCard: React.FC<{ user: User }> = ({ user }) => (
  <Card key={user.id} className="user-card">
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Username: {user.username}</Card.Subtitle>
      <Card.Text>
        <strong>Email:</strong> {user.email}<br />
        <strong>Street:</strong> {user.address.street}<br />
        <strong>Suite:</strong> {user.address.suite}<br />
        <strong>City:</strong> {user.address.city}<br />
        <strong>Zipcode:</strong> {user.address.zipcode}
      </Card.Text>
    </Card.Body>
  </Card>
);

// Functional component for fetching and displaying JSON data
export default function JSON() {
  // State variable to store the fetched users data
  const [users, setUsers] = useState<User[]>([]);

  // useEffect hook to fetch data from an external API on component mount
  useEffect(() => {
    // Async function to fetch data and update state
    const fetchData = async () => {
      try {
        // Fetching user data from an external API
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // Updating the state variable with the fetched data
        setUsers(response.data);
      } catch (error) {
        // Logging an error message if there's an issue with fetching data
        console.error('Error fetching data:', error);
      }
    };

    // Calling the fetchData function when the component mounts
    fetchData();
  }, []);

  // Rendering the JSON component with layout, title, and user cards
  return (
    <Layout>
      {/* Adding a moving background to the component */}
      <div className="moving-background">
        <Container>
          {/* Displaying a title for the user list */}
          <h3 className="user-list-header">User List</h3>
          {/* Container for rendering user cards */}
          <div className="user-card-container">
            {/* Mapping through the users array and rendering UserCard component for each user */}
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
