import React, { Component } from 'react';
import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <h2>b a s s d o l l</h2>
        </Header>
        <Body>
        <h2>Title Heading</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
        <h2>Title Heading</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
        <h2>Title Heading</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
        <h2>Title Heading</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Body>
        <MusicBar>
          <AudioPlayer 
            autoPlay
            loop
            src={'music.mp3'}
          />
          Song Title
        </MusicBar>
      </React.Fragment>
    );
  }
}

export default App;

const HeaderWrapper = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 30px;
  color: white;
  background-color: black;
  h2 {
    display: inline;
  }
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
  background-color: black;
  display: flex;
  overflow: visible;
  min-height: 0;
`;

const BodyInterior = styled.div`
  max-height: inherit;
  overflow-y: scroll;
  text-align: center;
  margin: 0px 20%;
  background-color: rgba(0,0,0,.5);
  padding: 10px 5px;
  line-height: 200%;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
  ::-webkit-scrollbar { /* WebKit */
  width: 0px;
  }
  @media screen and (max-width: 500px){
    margin: 0px 10%;
  }
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
  height: 70px;
  text-align: center;
  background-color: black;
  font-size: .5em;
  padding-bottom: 5px;
`;