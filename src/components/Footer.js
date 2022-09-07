import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';

function Footer() {
  return (
    <div className="container">
      <h2 className="green">contact info</h2>
      <p>Email me at <a href="mailto:christine.tu2002@gmail.com">christine.tu2002@gmail.com</a>.</p>
      <br />
      <p >Or find me at:
      <br />
        <a href="https://www.linkedin.com/in/christine2515/" target="_blank" rel="noreferrer"><AiFillLinkedin className="icon" />Linkedin</a> <a href="https://github.com/christine2515" target="_blank" rel="noreferrer"><AiFillGithub className="icon" />GitHub</a> 
      </p>
    </div>
  );
}

export default Footer;
