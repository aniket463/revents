import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import { EventDashboard } from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import "./style.css";

function App() {
  const [formOpen, setFormOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleSelectedEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true)
  }

  const handleCreateFormOpen = () => {
    setSelectedEvent(null)
    setFormOpen(true)
  }
  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectedEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </>
  );
}

export default App;
