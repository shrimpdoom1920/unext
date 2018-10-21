import React, { Component } from 'react'
import {
  Container,
} from 'reactstrap'
import './Wizard.css'

import Path from './Path/Path'


class Wizard extends Component {

  constructor(props) {
    super(props)

    console.log('qwe')

    this.state = {
      path: null,
      course: null
    }
  }

  render() {
    return (
      <Container>
        <div>
          <Path />
        </div>
      </Container>
    )
  }

}

export default Wizard