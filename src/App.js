import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <p>BassDoll Music</p>
          <p>Links go here</p>
        </Header>
        <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Body>
        <MusicBar>
        music bar goes here
        </MusicBar>
      </React.Fragment>
    );
  }
}

export default App;

const HeaderWrapper = styled.div`
  text-align: center;
  background-color: black;
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        {this.props.children}
      </HeaderWrapper>
    );
  }
}

const BodyWrapper = styled.div`
  flex-grow: 1;
  background: url('bg.png') no-repeat;
  background-size: cover;
  background-position: bottom;
  display: flex;
  overflow: visible;
  min-height: 0;
`;

const BodyInterior = styled.div`
  max-height: inherit;
  overflow-y: scroll;
  text-align: center;
  margin: 50px 10%;
`;

class Body extends Component {
  render() {
    return (
      <BodyWrapper>
        <BodyInterior>
          {this.props.children}
        </BodyInterior>
      </BodyWrapper>
    );
  } 
}

const MusicBar = styled.div`
  height: 50px;
  background-color: black;
`;