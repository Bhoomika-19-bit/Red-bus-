import React, { useState, useEffect } from 'react';
import '../style/seat.css';
import { Container, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function SeatSelection() {
  const [selectedSeat, setSelectedSeat] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const bus = location.state?.bus; // 🔹 Get selected bus from navigation state

  // 🔸 Redirect if bus is not available
  useEffect(() => {
    if (!bus) {
      navigate('/results');
    }
  }, [bus, navigate]);

  function seatNum(i, j) {
    return 8 * i + j + 1;
  }

  return (
    <Container className='bg-danger mw-100 p-4 d-flex justify-content-center align-items-center'>
      <div className='bg-white p-2'>

        {/* 🔹 Optional: Show selected bus info */}
        {bus && (
          <div className='text-center mb-3 bg-light p-2'>
            <h4>{bus.busName}</h4>
            <p>
              {bus.departureTime} ➡ {bus.arrivalTime} | ₹{bus.ticketPrice}
            </p>
          </div>
        )}

        {[1, 2, 3].map((seatRow, i) => (
          <div className={`row mt-${Math.ceil(seatRow * 1.5)}`} key={seatRow}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((seat, j) => (
              <div
                className={`seat ${selectedSeat.includes(seatNum(i, j)) ? 'bg-success' : ''}`}
                key={8 * i + j}
                onClick={() => {
                  const seatNumber = seatNum(i, j);
                  if (selectedSeat.includes(seatNumber)) {
                    setSelectedSeat(selectedSeat.filter((s) => s !== seatNumber));
                  } else {
                    setSelectedSeat([...selectedSeat, seatNumber]);
                  }
                }}
              ></div>
            ))}
          </div>
        ))}

        {selectedSeat.length ? (
          <Button variant='success mt-4 rounded-0' onClick={() => navigate('/booking-confirmation', { state: { bus, seats: selectedSeat } })}>Book seats</Button>
        ) : null}
      </div>
    </Container>
  );
}

export default SeatSelection;
