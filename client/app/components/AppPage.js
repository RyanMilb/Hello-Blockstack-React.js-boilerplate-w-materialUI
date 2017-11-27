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
    background: '#FFFFFF'
  },
  header: {
    color: '#424242',
    fontSize: '25px',
    marginLeft: '20px',
    marginRight: '20px',
    textAlign: 'center',
    fontWeight: 200
  },
  button: {
    width: '300px',
    height: '60px',
    lineHeight: '60px',
    backgroundColor: '#9C27B0'
  },
  label: {
    color: '#FFFFFF',
  },
  overlay: {
    height: '60px'
  }
}

class AppPage extends Component {
    handleSignout(button) {
        this.props.signUserOut();
    }

    render() {
      return (
          <div style = {styles.root}>
            <h1 style={styles.header}>👋 {this.props.profileName}</h1>
            <RaisedButton primary ={true} label="Sign out" labelPosition="before" buttonStyle = {styles.button} 
            overlayStyle={styles.overlay} labelStyle={styles.label} onClick = {this.handleSignout.bind(this)}/>
          </div>
      );
    }
  }
  
  export default AppPage;