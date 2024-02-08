// React component to fetch user data from JSONPlaceholder API and display user cards
import React, { useState, useEffect } from 'react'; // Importing necessary modules from React
import axios from 'axios'; // Importing axios for HTTP requests
import { Container } from 'react-bootstrap'; // Importing Container component from react-bootstrap
import Layout from '../components/Layout'; // Importing Layout component
import '../styles/Json.css'; // Importing CSS styles
import UserCard from '../components/UserCard'; // Importing UserCard component
import { User } from './type'; // Importing User type definition

export default function JSON() { // Defining functional component JSON
  const [users, setUsers] = useState<User[]>([]); // Initializing state variable for users

  useEffect(() => { // Effect hook for fetching data
    const fetchData = async () => { // Asynchronous function to fetch data
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // HTTP GET request to fetch users
        setUsers(response.data); // Updating users state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error); // Handling error if data fetching fails
      }
    };

    fetchData(); // Calling fetchData function
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return ( // JSX markup to render UI
    <Layout> {/* Rendering Layout component */}
      <div className="moving-background"> {/* Div with moving background */}
        <Container> {/* Bootstrap container */}
          <h3 className="user-list-header">User List</h3> {/* Header for user list */}
          <div className="user-card-container"> {/* Div for user card container */}
            {users.map((user) => ( // Mapping over users array to render UserCard component for each user
              <UserCard key={user.id} user={user} /> // Rendering UserCard component with unique key and user data
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
