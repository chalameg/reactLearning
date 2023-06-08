import React from 'react'
import EventItem from '../components/EventItem'
import { json, redirect, useRouteLoaderData } from 'react-router-dom';

const EventDetailPage = () => {

  const data = useRouteLoaderData('event-detail');

  console.log("Data ####",data)

  // const [event, setEvent] = useState({});

  // const params = useParams();
  
  // useEffect(()=> {
  //   const getEvent = async (eventId) => {
  //     const response  = await fetch(`http://localhost:8080/events/${eventId}`);

  //     const event = await response.json();

  //     setEvent(event.event);

  //   }

  //   getEvent(params.id);

  // }, [])

  return (
    <div>
      <EventItem event={data.event}/>
    </div>
  )
}

export default EventDetailPage

export const eventDetailLoader = async ({request, params}) => {
  const response = await fetch("http://localhost:8080/events/"+params.id);
  console.log("params:", params, await response)

  if (!response.ok) {
    return json({ message: "Error loading event for a given Id" }, { status: 500 });
  } else {
    return response;
  }
};

export const eventDeleteAction = async ({request, params}) => {

  const response = await fetch("http://localhost:8080/events/"+params.id, {
    method: request.method,
  });
  
  if (!response.ok) {
    return json({ message: "Cannot delete an event!" }, { status: 500 });
  }

  return redirect("/events");
};

