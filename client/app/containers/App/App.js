import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HomePage from '../../components/HomePage';
import AppPage from '../../components/AppPage';

const blockstack = require('blockstack');

class App extends Component {
  constructor(props) {
    super(props);
  }

  signIn() {
    blockstack.redirectToSignIn();
  }
  
  signOut() {
    blockstack.signUserOut('/');
  }

  render() {
    // To learn more about Blockstack Authentication, read here: 
    // https://blockstack.github.io/blockstack.js/index.html#authentication

    let logInContent = null;

    if (blockstack.isUserSignedIn()) {
      // Show the current user
      const userData = blockstack.loadUserData();

      logInContent = (
        <MuiThemeProvider>
        <div>
          <AppPage profileName = {userData.profile.name} signUserOut = {this.signOut.bind(this)}/>
        </div>
      </MuiThemeProvider>
      );
    } else if (blockstack.isSignInPending()) {
      blockstack.handlePendingSignIn(
        'https://core.blockstack.org/v1/names'
      ).then((userData) => {
        location.reload();
      });

      logInContent = (
        <MuiThemeProvider>
        <div>
        </div>
        </MuiThemeProvider>
      );
    } else {
      logInContent = (
        <MuiThemeProvider>
        <div>
          <HomePage signUserIn = {this.signIn.bind(this)}/>
        </div>
      </MuiThemeProvider>
      );
    }
    return (
      <div>
        {logInContent}
      </div>
    );
  }
}

export default App;