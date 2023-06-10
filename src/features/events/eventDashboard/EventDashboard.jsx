import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";

export const EventDashboard = ({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) => {
  const [events, setEvents] = useState(sampleData);

  const handleCreateEvent = (event) => {
    setEvents([...events, event]);
  };

  const handleUpdateEvent = (updatedEvent) =>{
    setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent:evt))
    selectEvent(null)
  }

  const handleDeleteEvent = (eventId) =>{
    setEvents(events.filter(evt => evt.id !== eventId))
  }


  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent}  deleteEvent={handleDeleteEvent}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            updatedEvent={handleUpdateEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};