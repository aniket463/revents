import cuid from "cuid";
import React from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { updateEvent, createEvent } from "../eventAction";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryData } from "../../../app/api/categoryOption";

function EventForm({ match, history }) {
    const dispatch = useDispatch();
    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));


    const initialValues = selectedEvent ?? {
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: "",
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("You must provide a title"),
        category: Yup.string().required("You must provide a category"),
        description: Yup.string().required(),
        city: Yup.string().required(),
        venue: Yup.string().required(),
        date: Yup.string().required(),
    })

    const handleSubmitHandler = (values) => {
        selectedEvent ?
            dispatch(updateEvent({ ...selectedEvent, ...values })) :
            dispatch(createEvent({
                ...values,
                id: cuid(),
                hostedBy: "Anket",
                attendees: [],
                hostPhotoURL: '/assets/user.png',
            }));
        history.push('/events')
    };



    return (
        <Segment clearing>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmitHandler(values)}
            >
                <Form className="ui form">
                    <Header sub color="teal" content={"Event Details"} />
                    <MyTextInput name='title' placeholder="Enter title" />
                    <MySelectInput name='category' placeholder="Category" options={categoryData}/>
                    <MyTextArea name='description' placeholder="Description"  rows={3}/>
                    <Header sub color="teal" content={"Event Location Details"} />
                    <MyTextInput name='city' placeholder="City" />
                    <MyTextInput name='venue' placeholder="Vanue" />
                    <MyTextInput name='date' placeholder="Date" type="date" />

                    <Button type="submit" floated="right" positive content="Submit" />
                    <Button
                        as={Link} to="/events"
                        type="submit"
                        floated="right"
                        content="Cancel"
                    />
                </Form>

            </Formik>
        </Segment >
    );
}

export default EventForm;
