import { useState, useEffect } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { IoSchool } from 'react-icons/io5';
import Footer from '../components/Footer.js';
import aboutImages from '../components/aboutImages.js';
import Card from '../components/Card.js';

function About() {
  const [display, toggleDisplay] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [list, setList] = useState(aboutImages);

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
      <div className="container">
        <p>Thanks for checking out my site!</p>
        <br />
        <h2
          className="orange"
          style={{ width: '500px', cursor: 'crosshair' }}
          onMouseEnter={() => { toggleDisplay(true); }}
          onMouseLeave={() => { toggleDisplay(false); }}
          >Here's a bit about me!</h2>
        <br />
        <p>I’m a computer science student at <a href="https://www.ucsb.edu/" target="_blank" rel="noreferrer"><IoSchool className="icon" />UC Santa Barbara</a>.</p>
        <br /><br />
        <p>Currently:</p>
        <ul>
          <li>Interning on the full stack team at <a href="https://www.arine.io/" target="_blank" rel="noreferrer">Arine</a></li>

        </ul>
        <br /><br />
        <br />
        <p>
          <br /><br />
          In my free time, you can usually find me attempting to bake, camping by the ocean, walking my really cute dog Wiggles, or scouring the bay for great deals on food!
          <br /><br />

          {/* <div className="projects">
          {list.map((data, index) => (
            <div key={index}>
              <img src=data[index][image] />
            </div>
          ))}
          </div> */}


          <a href="https://drive.google.com/file/d/1DYh-4T3f7Ni63d6fZ9UNCjP1_rzKpda_/view?usp=sharing" target="_blank" rel="noreferrer">Check out my resume here! ↗︎</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
