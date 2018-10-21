import React, { Component } from 'react'
import AuthNavbar from './AuthNavbar/AuthNavbar'
import NoAuthNavbar from './NoAuthNavbar/NoAuthNavbar'
import './MainNavbar.css'

class MainNavbar extends Component {
  
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render() {

    if (!!this.props.userSession) {
      const { currentUser } = this.props.userSession
      
      return (
        <AuthNavbar 
          toggle={this.toggle} 
          state={this.state}
          currentUser={currentUser} />
      )
    } 

    return <NoAuthNavbar toggle={this.toggle} state={this.state} />

  }
}

export default MainNavbar