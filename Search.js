import { useState,useContext } from 'react'
import React from 'react'
import {Container} from 'react-bootstrap'
import {Form, InputGroup, Button} from 'react-bootstrap'
import { BsArrowLeftRight } from 'react-icons/bs'
import toast from 'react-hot-toast'
import { useNavigate,useLocation } from 'react-router-dom'
import JourneyContext from '../context/JourneyContext'


function Search() {
  const {from,to,setFrom,setTo}=useContext(JourneyContext);
  const [journeyDate,setJourneyDate]=useState("");
  const navigate = useNavigate();
  const location = useLocation(); // <-- useLocation hook
  const isUserDetailsPage = location.pathname === '/user-details'; // <--  check the path

  //  Don't show Search UI on /user-details route
  if (isUserDetailsPage) return null;

  function interchangeLeftRight(){
    const startPoint = from;
    const endPoint = to;
    setFrom(endPoint);
    setTo(startPoint);
  }
  function searchBuses(){
    if(!from || !to || !journeyDate){
    toast.error("All fields are required");
    }else{
      navigate("/results");
    }
  }



  return (
    <Container>
    <div className='m-5'>
       <InputGroup className="mb-3 flex align-items-center">
       <Form.Control value={from} onChange={(e)=>{setFrom(e.target.value)}} placeholder='From' aria-label="Text input with dropdown button" /> 
       <BsArrowLeftRight onClick={interchangeLeftRight}/>
       <Form.Control value={to} onChange={(e)=>{setTo(e.target.value)}} placeholder='To' aria-label="Text input with dropdown button" /> 
       <Form.Control value={journeyDate} onChange={(e)=>{setJourneyDate(e.target.value)}} placeholder='Date' type='date' aria-label="Text input with dropdown button" /> 
       <Button onClick={searchBuses} variant='danger'>Search Buses</Button>
       </InputGroup>
    </div>
    </Container>
  )
}

export default Search