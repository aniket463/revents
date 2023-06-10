import cuid from "cuid";
import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

function EventForm({ setFormOpen, setEvents, createEvent,selectedEvent }) {
    const initialState = selectedEvent ??{
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: "",
    };

    const [values, setValues] = useState(initialState);

    const handleSubmitHandler = () => {
        createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Anket",
            attendees: [],
            hostPhotoURL:'/assets/user.png',
        });
        setFormOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return (
        <Segment clearing>
            <Header content="Create new event" />
            <Form onSubmit={handleSubmitHandler}>
                <Form.Field>
                    <input
                        type="text"
                        placeholder="Event title"
                        name="title"
                        value={values.title}
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type="text"
                        placeholder="Category"
                        name="category"
                        value={values.category}
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        value={values.description}
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={values.city}
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type="text"
                        placeholder="Vanue"
                        name="venue"
                        value={values.venue}
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type="date"
                        placeholder="Date"
                        name="date"
                        value={values.date}
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Button type="submit" floated="right" positive content="Submit" />
                <Button
                    onClick={() => setFormOpen(false)}
                    type="submit"
                    floated="right"
                    content="Cancel"
                />
            </Form>
        </Segment>
    );
}

export default EventForm;
