import React, { Component } from 'react'

class LoggedUserDetails extends Component {
  render() {
    return (
      <div className='logged-user-details'>
        <div>
          <h1>Welcome</h1>
          <img src={this.props.picture} alt={this.props.name} />
          <h2>{this.props.name === '' ? '' : 'Name: '+this.props.name}</h2>
          <h3>E-mail: {this.props.email}</h3>
        </div>
      </div>
    )
  }
}

export default LoggedUserDetails;