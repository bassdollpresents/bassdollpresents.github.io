import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

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
        <Header>
          <Link to='/'>
            <HeaderImage src='headerimage.png' alt='Bassdoll Presents Ensorcelled' />
          </Link>
          <LinkMenu className="row-flex">
            <Icon src='axe_white.png' alt='music' href='/music' />
            <Icon src='book_white.png' alt='writing' href='/writing' />
            <Icon src='swords_white.png' alt='socials' href='/media' />
          </LinkMenu>
        </Header>
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

const Br = styled.div`
  width: 100%;
  height: 40px;
`;

const Br2 = styled.div`
  width: 100%;
  height: 10px;
`;

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
        {this.props.children}
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
      <Link to={this.props.href}>
        <IconBox>
          <img src={this.props.src} alt={this.props.alt}/>
          <IconCaption>{this.props.alt}</IconCaption>
        </IconBox>
      </Link>
    );
  }
}

class Story extends Component {
  render() {
    return (
      <React.Fragment>
        <Br />
        <i>
        Immortal born not of god, but by the hand of man
        <Br2 />
        You are the weapon wielded
        <Br2 />
        Hollow vessel for our fear and jealousy
        <Br2 />
        Our Longing and desire.
        <Br2 />
        The wailing curse of the misshapen, abandoned by time
        <Br2 />
        Be our blade
        <Br2 />
        Against those who cling to life eternal.
        </i>
        <Br />
        The spires of the ancient metropolis loomed above her as she strode forward, cutting a swath through the mist. Between its crumbling archways and sinking roofs, the biting wind hurried dust in shimmering curtains, biting away at the cities’ flesh. Her prey was here—somewhere—living out his borrowed time. The Lichslayer’s Axe weighed heavily on her sturdy shoulder, chattering quietly in anticipation.
        <Br />
        Through the sunken streets and alleys, the scent of decay began to cling to her, its dour stillness an eerie reminder of her foe’s unhallowed nature. A stirring in the sand drew her attention to a side street flanked by broken houses. Windowsills still laden with possessions, caked with dust and ash. There, beneath the awnings, she looked down at the corpse of a bird, one of the roc that fly in the wake of storms, said to carry away goats and unwatched children in their talons. 
        <Br />
        Though its lifeless flesh was grey and withered, the roc’s beak clacked a continuous deathrattle, as flightlessly, it crawled toward the doll. The axe barely swung, severing its head, and ending its unlife. Her porcelain face betrayed no pity or sorrow—for it was just undead, a bystander in her war. Walking on, she came to a pavilion, with a fountain full of still, stagnant water at its center. Looming above the plaza, stood the tall exedra of a mighty basilica, capped in glimmering gold, stained glass remnants still filling parts of its shattered windows. 
        <Br />
        The heavy, dead air of the ruin suddenly filled with the crackling ozone of magic. Motes of energy hovered in the air, and as if in menacing response to her encroachment, from beneath the dust, long dead corpses rose from the ground. Nearby, hanging from long-abandoned gallows, the corpse of a man raised his arm and pointed a finger of doom at the lone warrior. She fought, black axe cleaving and hacking against their desecrated forms, every moment spent in motion, her eyes procedurally scanning every roof and alley for her target. 
        <Br />
        In a flash of sallow blue light, he revealed himself a staff of iron clutched in his hand, sending starry projectiles hurtling at the battling doll. The first volley, she dodged, but the second, soars toward her in mid-air. A second too late, she raised the axe in defense, and the impact flung her against the lip of the fountain. Cracks arcing like spiderwebs on her back, she stood. The mouth of The axe spoke in its hollow tone, Do not falter, vessel—He shall taste the doom that awaits him.  As he raised his arms to cast a spell, the doll leveled the axe, reflecting grey sunlight off its blade. He stopped cold, fear crossing his undead visage. She walked towards him, the undead thralls around them paralyzed without their masters command. 
        <Br />
        With his magic in check, he was nothing but a wrinkled bag of bones. As if walking in a thick miasma, he turned, and fled in terror into the church. As she followed, her steps echoed a funeral dirge, and as he stumbled to the floor, he cast a last desperate look to the defaced idol on the dais, his undead will trembling in question. With a sickening crunch, the heavy blade of the axe sunk into his skull, and it was over as quickly as it began. His will to live severed, the atonal buzz of electricity dissipated, the magic he had summoned returning to whence it came.
        <Br />
        A moment of calm, punctuated by the winds singing .in the tall rafters of the cathedral
        <Br />
        The fall of the lich’s unmoving husk to the ground, his iron staff clattering as it was released from his immortal grip.
        <Br />
        And then, a great roar, a great and terrible expulsion. From his cloven brow, black tendrils emerged, grasping and tearing at the air and at the dust-streaked porcelain skin of the doll. Ensorcelled by whatever residual curse the undead fiend leveled against her mind, she could do nothing but watch as reality was torn asunder. Before her eyes, the city was rust and ash no more, and a vision of its former glory shone forth through hazy fog 
        <Br />
        The towers, now sunk deep beneath grey dust and heavied with the scent of death, were once shining citadels, alive with scintillating sunlight, whose painted interiors reassured their occupants of their place in the universe. This city, in its heyday called Meithull, was a holy site, where a thousand temples for a thousand gods stood in faithful worship. Shrines to every sun and moon, every star and spirit, with the smell of incense and the sounds of prayer always in alight in the air. But as the doll’s eyes closed, treading through this memory, so too did the eyes of the masses. The gods’ names were forgotten, and in the back alleys, where more twisted, craven gods were hailed, power grew in twisted ways.
        <Br />
        Faces of statues were chiseled away, replaced by that hallowed symbol, a toothy mouth and cyclopean eye that suggests skeletal form. What was once an occult name whispered by heretics became heightened above all others., The prayers of the devout became incantations, and incantations became spells, and dire omens went unseen as all devoted themselves to a divine task. Those who refused the tide where swept away by it, their hung and burning bodies sacrifices to Its glory.
        <Br />
        The day drew closer and closer, and the vision blacker and blacker, for the advent was upon Meithull.. In the center of the city, the priests and pontiffs gathered, led by Pope Hyellvet, his staff of iron raised high to the setting sun. He led the people in prayer as the drums of the deep rung out.
        <Br />
        From the depths of every shadow, convergence shattered thought. The weak fell instantly, their life forces churned into a growing whirlwind, and Its horrid form rose from the whirling ash of their disintegration.
        <Br />
        The Monolich, enshrouded in decay and sediment., Its billowing cloak of dust spelled doom for all in attendance. Rotting, aging, withering, the masses had nowhere to run, and all they could do was cry woe at their zealotry.  Standing above the sea of corpses stood Hyellvet, arms spread wide. As the eye of the skeletal god turned to him, though his body rotted away, his skeletal hand still clutched the iron rod, as if to refuse his own death. 
        <Br />
        The memory shattered, and doll awoke back in the ruined city, its spires now strangely familiar to her, even in their disrepair.She looked down at The Axe as if seeing it for the first time, the chatter of its bronze teeth ringing in her ears as it spoke:
        <Br />
        <i>
        You’ve seen its visage, and yet lived, yet another triumph a being of flesh could not achieve. You are made well indeed, and now you know our destination. We will walk through time immaterial, and we will slay their god.
        </i>
        <Br />
      </React.Fragment>
    );
  }
}

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