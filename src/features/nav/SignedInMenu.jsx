import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { signOutUser } from "../auth/authAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const SignedInMenu = () => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state=>state.auth)
  const history = useHistory();
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={currentUser.photoURL || '/assets/user.png'} />
      <Dropdown pointing="top left" text={currentUser.email }>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item
            onClick={() => {
              dispatch(signOutUser());
              history.push("/");
            }}
            text="Sign out"
            icon="power"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
