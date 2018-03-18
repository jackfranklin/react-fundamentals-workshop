import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserInput extends Component {
  state = {
    userPostInput: '',
    onSearchInputChange: PropTypes.func.isRequired,
  }

  userInputChange = e => {
    this.setState({ userPostInput: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    // todo: call this.props.onSearchInputChange with the right ID
    // so the parent knows that we have a new ID
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="search-form">
        <label>
          Please enter the ID of a post
          <input
            type="text"
            name="post-id"
            value={this.state.userPostInput}
            onChange={this.userInputChange}
          />
        </label>
        <button type="submit">Go</button>
      </form>
    )
  }
}
