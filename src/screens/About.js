import { useState, useEffect } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { IoSchool } from 'react-icons/io5';
import Footer from '../components/Footer.js';
import profile from '../assets/profile.png';

function About() {
  const [display, toggleDisplay] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function _onMouseMove(e) {
    if (display) {
      setMousePos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
  }

  return (
    <div className="about" onMouseMove={_onMouseMove}>
      <img
        src={profile} alt=""
        style={{
            position: 'absolute',
            width: '200px',
            display: display ? 'block' : 'none',
            top: mousePos.y + 50,
            left: mousePos.x + 50,
          }}
      />
      <div className="container">
        <p>Nice to meet you,</p>
        <br />
        <h2
          className="orange"
          style={{ width: '260px', cursor: 'crosshair' }}
          onMouseEnter={() => { toggleDisplay(true); }}
          onMouseLeave={() => { toggleDisplay(false); }}
          >I'm Christine!</h2>
        <br />
        <p>I’m a software engineer, artist, and computer science student at <a href="https://www.berkeley.edu/" target="_blank" rel="noreferrer"><IoSchool className="icon" />UC Berkeley</a>.</p>
        <br /><br />
        <p>Growing up as a self-proclaimed “art kid”, I discovered coding through the Flash game ecosystem of the early 2010s. Since then, I’ve made a couple games of my own, and then websites and other small projects, until I finally found myself pursuing a degree in CS.</p>
        <br /><br />
        <p>Colorful tech and making people happy is what drives me. While I'm still throwing things and seeing what sticks, I'm especially curious about human-computer interaction, how tech can make good, and creative coding.</p>
        <br /><br />
        <p>Currently:</p>
        <ul>
          <li>Taking a gap semester to save people money at <a href="https://ramp.com/" target="_blank" rel="noreferrer">Ramp</a></li>
          <li>Incoming this summer on the VR team at <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><AiFillFacebook className="icon" />Meta</a></li>
          <li>Developing for non-profits at a student org, <a href="https://calblueprint.org/" target="_blank" rel="noreferrer">Blueprint</a></li>
          <li>Directing Berkeley's hackathon and other hacker events at <a href="https://calhacks.io/" target="_blank" rel="noreferrer">Cal Hacks</a></li>
        </ul>
        <br /><br />
        <p>Previously:</p>
        <ul>
          <li>Gamified biofeedback therapy at an Akron startup, <a href="https://www.linkedin.com/company/seelife" target="_blank" rel="noreferrer">SeeLife</a></li>
          <li>Created interactive exhibits in partnership with the <a href="http://clevelandclinicexpressions.org/" target="_blank" rel="noreferrer">Cleveland Clinic</a></li>
          <li>Exhibited indie games in <a href="https://www.artandwriting.org/" target="_blank" rel="noreferrer">New York City</a></li>
          <li>Made a <a href="https://chrome.google.com/webstore/detail/coffeelings/hcbddpppkcnfjifbcfnhmelpemdoepkk" target="_blank" rel="noreferrer">journaling chrome extension</a> that was <a href="https://youtu.be/iXN_THcp408?t=144" target="_blank" rel="noreferrer">featured by study YouTubers</a> and TikToks and racked up 200k users</li>
        </ul>
        <br />
        <p>
          ~
          <br /><br />
          When I’m not working, you can usually find me playing strategy games, steeping tea, re-watching anime, or tending to fake plants.
          <br /><br />
          <a href="https://drive.google.com/file/d/1eLelGRhX6h65sQhYiB_LqCli2UL2U-wW/view" target="_blank" rel="noreferrer">Check out my resume here! ↗︎</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
