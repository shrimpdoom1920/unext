import React from 'react'
import { Button } from 'reactstrap'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem 
} from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

import Unex from '../../../Assets/images/unext.png'

const NoAuthNavbar = ({ history, toggle, state}) => (
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
          <Button
            outline
            onClick={(e) => {
              e.preventDefault()
              history.push('/login')
            }}
            color="secondary">
            <Link
              className="nav-link"
              to="/login">
              Login
            </Link>
          </Button>
        </NavItem>
        <NavItem>
          <Button
            style={{ 
              backgroundColor: '#8c54a1',
              border: 0,
            }}
            onClick={(e) => {
              e.preventDefault()
              history.push('/signup')
            }}
            color="primary">
            <Link
              style={{ color: '#fff' }}
              className="nav-link"
              to="/signup">
              Sign Up
            </Link>
          </Button>
        </NavItem>
        {/* <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> */}
      </Nav>
    </Collapse>
  </Navbar>
)

export default withRouter(NoAuthNavbar)