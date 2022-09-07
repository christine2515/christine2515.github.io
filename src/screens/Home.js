import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from '../components/Card.js';
import Footer from '../components/Footer.js';
import { getProject } from '../components/projectData.js';
const colors = [ 'red', 'orange', 'yellow', 'lightgreen', 'green' ];
const attributes = ['software engineering', 'web development', 'machine learning', 'artificial intelligence', 'research', 'writing', 'exploring the great outdoors!','new purple hyacinth chapters'];

function Home() {
  let [ timer, setTimer ] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    const interval = setTimeout(() => {
      setTimer(timer + 1);
    }, 2000);
    return () => { clearTimeout(interval); }
  }, [timer]);

  const color = (string) => {
    let words = "";
    for (let i = 0; i < string.length; i +=1) {
      words += `<span style="animation-delay:${i/8}s;" class='wave ${colors[i % colors.length]}'>${string.charAt(i)}</span>`;
    }
    return (<span dangerouslySetInnerHTML={{__html: words}}></span>);
  }

  return (
    <div className="home">
      <div className="title">
      <h2>Hello!</h2>
        <h1>I'm Christine Tu</h1>
        <p>a third-year CS major at UCSB interested in</p>
        <p><b>{attributes[timer % attributes.length]}</b>
        <br />
        <br />
        </p>
        <p>welcome to my personal website!</p>
      </div>
      <div className="container featured">
        <h2 className="red">featured</h2>
        <p>Projects I've been working on recently!</p>
        <div className="cards-list">
          <Card data={getProject('Campsite Checker')} />
          <Card data={getProject('Bookshelf')} />
        </div>
        <p><Link to="/work">see all projects ↗︎</Link></p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
