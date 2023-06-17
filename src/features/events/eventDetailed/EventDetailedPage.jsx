import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventDetailsHeader from './EventDetailsHeader'
import EventDetailsInfo from './EventDetailsInfo'
import { EvnentDetailsChat } from './EvnentDetailsChat'
import EventDetailsSideBar from './EventDetailsSideBar'

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader />
        <EventDetailsInfo />
        <EvnentDetailsChat />
      </Grid.Column>
      <Grid.Column width={6}>
      <EventDetailsSideBar />
      </Grid.Column>
    </Grid>
  )
}

export default EventDetailedPage