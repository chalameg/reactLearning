import React, { useEffect, useState } from 'react'
import EventsList from '../components/EventsList';

const EventsPage = () => {

  const [events, setEvents]= useState([]);
  const [error, setError]= useState("");

  useEffect(()=>{
    const getEvents = async () =>{
      try {
        const response = await fetch("http://localhost:8080/events");

        if(!response.ok){
          throw new Error("Something went wrong");
        }

        const events = await response.json();

        console.log("running ", events)
        
        setEvents(events.events);
      } catch (error) {
        setError(error.message)
      }
    }
    
    getEvents();
  }, []);

  return (
    <>
    {!error && <EventsList events={events}/>}
    {error&& <div>{error}</div>}
    </>
  )
}

export default EventsPage