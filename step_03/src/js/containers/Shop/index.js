import React, { Component } from 'react'
import { Nav, Header, SelectMenu } from '../../components'

export default class Shop extends Component {
  render() {
    return (
      <div>
        <Header />
        <SelectMenu />
        <Nav />
      </div>
    )
  }
}