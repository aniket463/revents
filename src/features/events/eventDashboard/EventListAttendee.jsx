import React from 'react'
import { List,Image } from 'semantic-ui-react'

function EventListAttendee({attendee}) {
  return (
    <List.Item>
        <Image size='mini' circular src={attendee.photoURL} />
    </List.Item>
  )
}

export default EventListAttendee