import React, { Component } from 'react'

class SocialLogin extends Component {
  render() {
    return (
      <div className='social-login'>
        <div className="fb-login-button"
          data-max-rows="1"
          data-size="large"
          data-button-type="continue_with"
          data-show-faces="false"
          data-auto-logout-link="false"
          data-use-continue-as="true"
          data-scope="email">
        </div>
      </div>
    )
  }
}

export default SocialLogin;