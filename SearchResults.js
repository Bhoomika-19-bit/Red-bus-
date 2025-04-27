import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import BusResults from './BusResults';
import JourneyContext from '../context/JourneyContext';
import { useNavigate } from 'react-router-dom';


function SearchResults() {
  const [buses, setBuses] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { from, to } = useContext(JourneyContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!from || !to) {
      navigate("/");
    }
  }, [from, to, navigate]);

  async function fetchBuses() {
    setLoading(true);
    const response = await fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${to}`
    );
    const allBuses = await response.json();
    setLoading(false);
    setBuses(allBuses);
  }

  useEffect(() => {
    fetchBuses();
  }, [from, to]);

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  return (
    <div className="bg-danger p-2 d-flex flex-column">
      <div className="bg-white p-2 d-flex w-75 align-self-center">
        <h4 className="w-50">SORT BY</h4>
        <div className="d-flex justify-content-around w-100">
          {["Departure", "Arrival", "Price"].map((criteria) => {
            return (
              <Button key={criteria} variant="danger" className="rounded-0">
                {criteria}
              </Button>
            );
          })}
        </div>
      </div>

      {buses.map((bus) => {
        return (
          <div
            key={bus.id}
            onClick={() => navigate("/bus-tickets", { state: { bus } })}
            style={{ cursor: "pointer" }}
          >
            <BusResults bus={bus} />
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
