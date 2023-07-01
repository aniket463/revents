import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useSelector } from "react-redux";

export const EventDashboard = () => {

  const {events} = useSelector(state=>state.event)
  const handleDeleteEvent = (eventId) =>{
    // setEvents(events.filter(evt => evt.id !== eventId))
  }


  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events}  deleteEvent={handleDeleteEvent}/>
      </Grid.Column>
      <Grid.Column width={6}>
      <h2>Evnet Filter</h2>
      </Grid.Column>
    </Grid>
  );
};
