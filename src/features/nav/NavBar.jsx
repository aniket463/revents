import React, { useState } from 'react'
import { NavLink,useHistory } from 'react-router-dom/cjs/react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedOutMenu from './SignedOutMenu'
import SignedInMenu from './SignedInMenu'


const NavBar = ({ setFormOpen }) => {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);


    const handleSignOut = () =>{
        setAuthenticated(false);
        history.push('/');
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '15px' }} />
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events' />
                <Menu.Item as={NavLink} to='/sandbox' name='SandBox' />
                {authenticated && (<>
                    
                    <Menu.Item as={NavLink} to='/createEvent'>
                        <Button positive inverted content='Create Event' />
                    </Menu.Item>
                </>)}

                {authenticated ? <SignedInMenu signOut={handleSignOut} /> : <SignedOutMenu setAuthenticated={setAuthenticated} />}



            </Container>

        </Menu>
    )
}

export default NavBar