import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap'
import './AuthNavbar.css'
import { Link, withRouter } from 'react-router-dom'

import Unex from '../../../Assets/images/unext.png'

const NoAuthNavbar = ({ history, toggle, state, currentUser }) => (
  <Navbar color="light" light expand="md">
    <div className="navbar-brand">
      <Link to="/">
        <img style={{ marginLeft: '10px'}} height="45" width="auto" src={Unex} />
      </Link>
    </div>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={state.isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link
            id="become-instructor"
            className="nav-link"
            to="/login">
            Become a partner
          </Link>
        </NavItem>
        <NavItem>
          <Link
            id="become-instructor"
            className="nav-link"
            to="/login">
            Courses
          </Link>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle id="current-user" nav caret>
            {currentUser.email}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Profile
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => history.push('/logout')}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </Navbar>
)

export default withRouter(NoAuthNavbar)