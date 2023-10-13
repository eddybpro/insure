import { IntroImgM, IntroImgD } from "../assets";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="HeaderWrapper">
        <div className="HeaderWrapper-ImgBox">
          <picture>
            <source media="(max-width:768px)" srcSet={IntroImgM} />
            <source media="(min-width:769px)" srcSet={IntroImgD} />
            <img src={IntroImgM} alt="family" />
          </picture>
        </div>
        <div className="HeaderWrapper-TxtBox">
          <h1 className="HeaderWrapper-TxtBox-Title">
            Humanizing your insurance.
          </h1>
          <p className="HeaderWrapper-TxtBox-Para">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that&apos;s right
            for you. Ensure you and your loved ones are protected.
          </p>
          <button className="HeaderWrapper-TxtBox-Btn">view plans</button>
        </div>
        <hr className="HeaderWrapper-TxtBox-Line" />
      </div>
    </header>
  );
}
export default Header;
