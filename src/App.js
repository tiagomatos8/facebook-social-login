import React, { Component } from 'react';
import './App.css';
import CommonLogin from './components/CommonLogin';
import SocialLogin from './components/SocialLogin';
import Header from './components/Header';
import LoggedUserDetails from './components/LoggedUserDetails';
import LineSeparator from './components/LineSeparator';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoggedIn: false,
      userName: '',
      userEmail: '',
      userPicture: ''
    }
  }
  
  componentWillMount() {

    let updateLoggedUserDetailsState = (response) => {
      console.log('updateLoggedUserDetailsState');
      this.setState({
        isLoggedIn: true,
        userName: response.name,
        userEmail: response.email,
        userPicture: response.picture.data.url
      });
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '229170431040835',
        autoLogAppEvents: true,
        status: true,
        xfbml: true,
        cookie: true,
        version: 'v3.0'
      });
      
      window.FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          window.FB.api('/me', {fields: 'name,picture,email'}, function(response) {
            updateLoggedUserDetailsState(response);
          });
        }
      });

      window.FB.Event.subscribe('auth.statusChange', response => {
        if (response.authResponse) {
          window.FB.api('/me', {fields: 'name,picture,email'}, function(response) {
            updateLoggedUserDetailsState(response);
          });
        } else {
          console.log('No authorized');
          console.log(response);
        }
      });
      
    };
    
    (//Facebook call to SDK
      function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return; 
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk')
    );

  }

  handleCommonLogin = (email, password) => {
    //Here i could handle this data tho match with user data from the data base
    this.setState({
      isLoggedIn: true,
      userEmail: email
    });
  }

  render() {
    let content;

    if (this.state.isLoggedIn) {
      content = (
        <LoggedUserDetails 
          picture={this.state.userPicture}
          name={this.state.userName}
          email={this.state.userEmail} />
      );
    } else {
      content = (
        <div className="signup-form">
          <Header />
          <SocialLogin />
          <LineSeparator />
          <CommonLogin validateLogin={this.handleCommonLogin}  />
        </div>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default App;
