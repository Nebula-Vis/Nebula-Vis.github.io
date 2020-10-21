import React, { useState } from 'react'
import './homepage.css'

export default class Homepage extends React.Component {
  componentDidMount() {
    window.location.pathname = '/examples'
  }

  render() {
    return <span></span>
  }
}
