import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#9C27B0',
    background: '-webkit-linear-gradient(#9C27B0, #AB47BC)',
    background: '-o-linear-gradient(#9C27B0, #AB47BC)',
    background: '-moz-linear-gradient(#9C27B0, #AB47BC)',
    background: 'linear-gradient(#9C27B0, #AB47BC)'
  },
  button: {
    width: '300px',
    height: '60px',
    lineHeight: '60px',
    backgroundColor: '#E0E0E0'
  },
  label: {
    color: '#424242'
  },
  overlay: {
    height: '60px'
  }
}

class HomePage extends Component {
    handleSignin(button) {
        this.props.signUserIn();
    }

    render() {
      return (
          <div style = {styles.root}>
            <RaisedButton primary ={true} label="Sign in with Blockstack" labelPosition="before" buttonStyle = {styles.button} 
            overlayStyle={styles.overlay} labelStyle={styles.label} onClick = {this.handleSignin.bind(this)}/>
          </div>
      );
    }
  }
  
  export default HomePage;