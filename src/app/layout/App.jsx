import React from "react";
import { Container } from "semantic-ui-react";
import { EventDashboard } from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import "./style.css";
import { Route, useLocation } from "react-router-dom/cjs/react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import SnadBox from "../../features/sendbox/SnadBox";
import ModalManager from "../common/modals/ModalManager";
import { ToastContainer } from "react-toastify";

//Adding Comment



function App() {
  const { key } = useLocation();

  return (
    <>
      <ModalManager />
      <ToastContainer theme="colored" position="bottom-right" hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container className="main">
            <Route exact path='/events' component={EventDashboard} />
            <Route exact path='/sandbox' component={SnadBox} />
            <Route path='/events/:id' component={EventDetailedPage} />
            <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />
          </Container>
        </>
      )} />

    </>
  );
}

export default App;
