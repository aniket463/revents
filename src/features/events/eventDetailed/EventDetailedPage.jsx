import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventDetailsHeader from './EventDetailsHeader'
import EventDetailsInfo from './EventDetailsInfo'
import { EvnentDetailsChat } from './EvnentDetailsChat'
import EventDetailsSideBar from './EventDetailsSideBar'
import { useSelector } from 'react-redux'

const EventDetailedPage = ({match}) => {
  const event = useSelector(state => state.event.events.find(e=>e.id === match.params.id));
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader event={event} />
        <EventDetailsInfo event={event} />
        <EvnentDetailsChat event={event} />
      </Grid.Column>
      <Grid.Column width={6}>
      <EventDetailsSideBar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  )
}

export default EventDetailedPage