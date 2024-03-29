import React from 'react'
import { Item, Segment, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteEvent } from "../eventAction"
import { format } from 'date-fns'


function EventListitem({ event }) {
    const dispatch = useDispatch();

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted By {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>

            <Segment>
                <span>
                    <Icon name='clock' />{format(event.date,'MMMM d, yyyy h:mm a') }
                    <Icon name='marker' />{event.venue}
                </span>
            </Segment>

            <Segment>
                <List horizontal>
                    {event.attendees.map((attendee) => (
                        <EventListAttendee key={attendee.id} attendee={attendee} />
                    ))}


                </List>
            </Segment>

            <Segment clearing>
                <div>
                    {event.description}
                </div>
                <Button
                    onClick={() => dispatch(deleteEvent(event.id))}
                    color='red'
                    floated='right'
                    content='Delete'
                />
                <Button
                    as={Link} to={`/events/${event.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>

        </Segment.Group>
    )
}

export default EventListitem