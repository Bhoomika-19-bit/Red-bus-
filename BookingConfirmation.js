import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, seats } = location.state || {};

  if (!bus || !seats) {
    return (
      <Container className="text-center mt-5">
        <h2>No booking information found.</h2>
        <Button variant="danger" onClick={() => navigate('/results')}>Back to Results</Button>
      </Container>
    );
  }

  return (
    <Container className="bg-white mt-5 p-4 rounded shadow text-center">
      <h2 className="text-success mb-4"> Booking Confirmed!</h2>
      <h4>{bus.busName}</h4>
      <p><strong>Departure:</strong> {bus.departureTime}</p>
      <p><strong>Arrival:</strong> {bus.arrivalTime}</p>
      <p><strong>Ticket Price:</strong> ₹{bus.ticketPrice} × {seats.length} = ₹{bus.ticketPrice * seats.length}</p>
      <p><strong>Seats:</strong> {seats.join(', ')}</p>

      <Button variant="danger" onClick={() => navigate('/home')}>Back to Home</Button>
    </Container>
  );
}

export default BookingConfirmation;
