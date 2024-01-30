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

// Functional component for fetching and displaying JSON data
export default function JSON() {
  // State variable to store the fetched users data
  const [users, setUsers] = useState<User[]>([]);

  // useEffect hook to fetch data from an external API on component mount
  useEffect(() => {
    // Async function to fetch data and update state
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Calling the fetchData function
    fetchData();
  }, []);

  // Rendering the JSON component with layout, title, and user cards
  return (
    <Layout>
      <div className="moving-background">
        <Container>
          {/* Displaying the header */}
          <h3 className="user-list-header">User List</h3>
          {/* Container for user cards */}
          <div className="user-card-container">
            {/* Mapping through the users array to create Card components */}
            {users.map((user) => (
              <Card key={user.id} className="user-card">
                {/* Card body with user information */}
                <Card.Body>
                  {/* Displaying user name */}
                  <Card.Title>{user.name}</Card.Title>
                  {/* Displaying username as a subtitle */}
                  <Card.Subtitle className="mb-2 text-muted">Username: {user.username}</Card.Subtitle>
                  {/* Displaying additional user details */}
                  <Card.Text>
                    <strong>Email:</strong> {user.email}<br />
                    <strong>Street:</strong> {user.address.street}<br />
                    <strong>Suite:</strong> {user.address.suite}<br />
                    <strong>City:</strong> {user.address.city}<br />
                    <strong>Zipcode:</strong> {user.address.zipcode}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}