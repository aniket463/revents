import React from "react";
import EventListitem from "./EventListitem";

function EventList({ events }) {
  return (
    <>
      {events.map((event) => (
        <EventListitem
          event={event}
          key={event.id}

        />
      ))}
    </>
  );
}

export default EventList;
