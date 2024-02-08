import React from 'react';
import { Card } from 'react-bootstrap';
import { User } from '../pages/type';

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

export default UserCard;
