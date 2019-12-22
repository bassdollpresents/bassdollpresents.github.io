
import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Story from './Story';

class App extends Component {

  state = {
    play: true
  }

  togglePlay = () => {
    this.setState({play: !this.state.play});
  }

  isChrome() {
    // please note, 
    // that IE11 now returns undefined again for window.chrome
    // and new Opera 30 outputs true for window.chrome
    // but needs to check if window.opr is not undefined
    // and new IE Edge outputs to true now for window.chrome
    // and if not iOS Chrome check
    // so use the below updated condition
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");

    if (isIOSChrome) {
      // is Google Chrome on IOS
      return true;
    } else if(
      isChromium !== null &&
      typeof isChromium !== "undefined" &&
      vendorName === "Google Inc." &&
      isOpera === false &&
      isIEedge === false
    ) {
      // is Google Chrome
      return true;
    } else { 
      // not Google Chrome 
      return false;
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Body>
          <Switch>
            <Route exact path="/">
              <Story />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
            <Route path="/writing/ensorcelled">
              <Story />
            </Route>
            <Route path="/writing">
              <Writing />
            </Route>
            <Route path="/media">
              <Media />
            </Route>
          </Switch>
        </Body>
        <MusicBar id='MusicBar'>
          <ReactPlayer url='https://soundcloud.com/stzuko/twdwo' playing={this.state.play} mute={this.isChrome()} />
          <div className='show' onClick={this.togglePlay}>{this.state.play ? 'pause' : 'play'}</div>
        </MusicBar>
      </Router>
    );
  }
}

export default App;

const HeaderImage = styled.img`
  max-width: 50%;
  @media screen and (max-width: 670px){
    max-width: 100%;
  }
`;

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
        <Link to='/'>
          <HeaderImage src='headerimage.png' alt='Bassdoll Presents Ensorcelled' />
        </Link>
          <LinkMenu className='show'>
            <Icon src='axe_white.png' alt='music' href='https://linktr.ee/bass.doll' />
            <Icon src='book_white.png' alt='writing' href='/' />
            <Icon src='swords_white.png' alt='socials' href='https://www.instagram.com/bass.doll/' />
          </LinkMenu>
      </HeaderWrapper>
    );
  }
}

const LinkMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

const BodyWrapper = styled.div`
  flex-grow: 1;
  flex-flow: column nowrap;
  background: url('bg.png') no-repeat;
  background-size: cover;
  background-position: bottom;
  background-color: black;
  display: flex;
  overflow: visible;
  min-height: 0;
  height: 100%;
`;

const BodyInterior = styled.div`
  height: inherit;
  overflow-y: scroll;
  text-align: center;
  margin: 0px 20%;
  background-color: rgba(0,0,0,.5);
  padding: 10px 40px;
  line-height: 200%;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
  ::-webkit-scrollbar { /* WebKit */
  width: 0px;
  }
  @media screen and (max-width: 670px){
    margin: 0px 10%;
    padding: 5px 10px;
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
  z-index: 200;
  height: 70px;
  text-align: center;
  background-color: black;
  font-size: .5em;
  // padding-bottom: 5px;
`;

const IconBox = styled.div`
  padding: 5px;
  img {
    height: 30px;
    width: 30px;
  }
`;

const IconCaption = styled.div`
  text-align: center;
  font-size: 8px;
`;

class Icon extends Component {
  render() {
    return (
      <a href={this.props.href}>
        <IconBox>
          <img src={this.props.src} alt={this.props.alt}/>
          <IconCaption>{this.props.alt}</IconCaption>
        </IconBox>
      </a>
    );
  }
}

const Br2 = styled.div`
  width: 100%;
  height: 10px;
`;

class Music extends Component {
  render() {
    return (
      <React.Fragment>
        <Br2 />
        <i><a href="https://bassdoll.bandcamp.com/">Bandcamp</a></i>
      </React.Fragment>
    )
  }
}

class Writing extends Component {
  render() {
    return (
      <React.Fragment>
        <Br2 />
        <Link to="/writing/ensorcelled"><i>Ensorcelled</i></Link>
      </React.Fragment>
    )
  }
}

class Media extends Component {
  render() {
    return (
      <React.Fragment>
        <Br2 />
        <i><a href="https://www.instagram.com/bass.doll/">Instagram</a></i>
        <Br2 />
        <i><a href="https://www.facebook.com/GwenEverrr">Facebook</a></i>
      </React.Fragment>
    )
  }
}