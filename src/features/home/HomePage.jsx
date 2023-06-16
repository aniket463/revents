import React from 'react'
import { Container, Header, Segment, Image, Button, Icon } from 'semantic-ui-react'

const HomePage = ({history}) => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' style={{ marginBottom: 12 }} />
                    Re-vents
                </Header>
                <Button onClick={()=>history.push('/events')} size='huge' inverted>
                    Get Started
                </Button>
                <Icon name='right arrow' inverted />
            </Container>
        </Segment>
    )
}

export default HomePage