import React from 'react'
import EventListitem from './EventListitem'

function EventList({events,selectEvent}) {
    return (
        <>
            {events.map(event =>
                <EventListitem event={event} key={event.id} selectEvent={selectEvent} />
            )}


        </>
    )
}

export default EventList