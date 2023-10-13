import { Logo } from "../assets";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="FooterLogo" aria-label="insure">
        <img src={Logo} alt="insure" />
      </a>

      <ul className="SocialIcons">
        <li>
          <a href="#" aria-label="facebook">
            <IconContext.Provider value={{ className: "SocialIcon" }}>
              <div>
                <FaFacebookSquare />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="twitter">
            <IconContext.Provider value={{ className: "SocialIcon" }}>
              <div>
                <FaTwitter />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="pinterest">
            <IconContext.Provider value={{ className: "SocialIcon" }}>
              <div>
                <FaPinterest />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="instagram">
            <IconContext.Provider value={{ className: "SocialIcon" }}>
              <div>
                <FaInstagram />
              </div>
            </IconContext.Provider>
          </a>
        </li>
      </ul>
      <div className="FooterLinksWrapper">
        <ul className="FooterLinksWrapper-LinksList">
          <li>
            <a href="#">our company</a>
          </li>
          <li>
            <a href="#">how we work</a>
          </li>
          <li>
            <a href="#">why insure?</a>
          </li>
          <li>
            <a href="#">check price</a>
          </li>
          <li>
            <a href="#">reviews</a>
          </li>
        </ul>

        <ul className="FooterLinksWrapper-LinksList">
          <li>
            <a href="#">help me</a>
          </li>
          <li>
            <a href="#">faq</a>
          </li>
          <li>
            <a href="#">terms of use</a>
          </li>
          <li>
            <a href="#">privacy policy</a>
          </li>
          <li>
            <a href="#">cookies</a>
          </li>
        </ul>

        <ul className="FooterLinksWrapper-LinksList">
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">sales</a>
          </li>
          <li>
            <a href="#">support</a>
          </li>
          <li>
            <a href="#">live chat</a>
          </li>
        </ul>

        <ul className="FooterLinksWrapper-LinksList">
          <li>
            <a href="#">others</a>
          </li>
          <li>
            <a href="#">careers</a>
          </li>
          <li>
            <a href="#">press</a>
          </li>
          <li>
            <a href="#">licenses</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
