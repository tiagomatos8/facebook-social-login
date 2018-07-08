import React, { Component } from 'react'

class CommonLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleEmailCHange = this.handleEmailCHange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleEmailCHange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmitClick() {
    this.props.validateLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="common-login">
        <form action="javascript:void(0)">
          <input type="text" className="email" placeholder="E-mail" onChange={this.handleEmailCHange} />
          <br />
          <input type="password" className="password" placeholder="Password" onChange={this.handlePasswordChange} />
          <br /><br />
          <input type="submit" value="Login" onClick={this.handleSubmitClick} />
        </form>
      </div>
    )
  }
}

export default CommonLogin;