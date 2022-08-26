import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';

function Footer() {
  return (
    <div className="container">
      <h2 className="green">get in touch!</h2>
      <p>Email me at <a href="mailto:tiffanywang@berkeley.edu">tfny@berkeley.edu</a>.</p>
      <br />
      <p >Or find me at:
      <br />
        <a href="https://www.linkedin.com/in/wtiffany/" target="_blank" rel="noreferrer"><AiFillLinkedin className="icon" />Linkedin</a> <a href="https://github.com/cnnmon" target="_blank" rel="noreferrer"><AiFillGithub className="icon" />GitHub</a> <a href="https://cnnmon.itch.io/" target="_blank" rel="noreferrer"><FaItchIo className="icon" />itch.io</a> <a href="https://twitter.com/cnnmonsugar" target="_blank" rel="noreferrer"><AiOutlineTwitter className="icon" />Twitter</a>
      </p>
    </div>
  );
}

export default Footer;
