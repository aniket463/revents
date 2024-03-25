import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Header, Menu } from 'semantic-ui-react';


const EventFilter = () => {
  return (
    <>
    <Menu vertical size='large' style={{width:"100%"}}>
        <Header icon='filter' attached color='teal' content="Filter" />
        <Menu.Item content ="All Event" />
        <Menu.Item content ="All Event" />
        <Menu.Item content ="All Event" />
    </Menu>
    <Header icon='calendar'  attached color='teal' content='Select date'/>
    <Calendar />
    </>
  )
}

export default EventFilter