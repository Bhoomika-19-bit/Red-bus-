import React from 'react'

function BusResults({bus}) {
  return (
    <div className='bg-white p-2 d-flex justify-content-between m-3 align-items-center'>
        <h4>{bus.busName}</h4>
        <div className='d-flex flex-column'>
          <div>Departure</div>
          <h4>{bus.departureTime}</h4>
        </div>
        <div className='d-flex flex-column'>
          <div>Arrival</div>
          <h4>{bus.arrivalTime}</h4>
        </div>
        <h4>{bus.ticketPrice}/-</h4>
    </div>
  )
}

export default BusResults