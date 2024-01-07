// library

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    // [calc(60vh-64px)]
    <footer className="footer">
      <div className="container row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">visit website</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>brand values</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">licence</a></li>
            <li><a href="#">documantations</a></li>
            <li><a href="#">registered</a></li>
            <li><a href="#">funds & investores</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>teams</h4>
          <ul>
            <li><a href="#">carers</a></li>
            <li><a href="#">goals</a></li>
            <li><a href="#">cultures</a></li>
            <li><a href="#">events</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/fuyaram-dewasi/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.linkedin.com/in/fuyaram-dewasi/" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.linkedin.com/in/fuyaram-dewasi/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/fuyaram-dewasi/" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
