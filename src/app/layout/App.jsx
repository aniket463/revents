import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import { EventDashboard } from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import "./style.css";
import { Route } from "react-router-dom/cjs/react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";


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
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar setFormOpen={handleCreateFormOpen} />
          <Container className="main">
            <Route exact path='/events' component={EventDashboard} />
            <Route path='/events/:id' component={EventDetailedPage} />
            <Route path='/createEvent' component={EventForm} />
          </Container>
        </>
      )} />

    </>
  );
}

export default App;
