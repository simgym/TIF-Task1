import logo from "./assets/logo.png";
import twitterLogo from "./assets/twitter.svg";
import fbLogo from "./assets/facebook.svg";
import instaLogo from "./assets/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <img width="161px" height="125px" src={logo} alt="Food Truck Logo PNG" />
      <div className="footer--content">
        <h3 className="footer--heading">Contact Us</h3>
        <ul>
          <li>
            <p>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
          </li>
          <li>example2020@gmail.com</li>
          <li>(904) 443-0343</li>
        </ul>
      </div>
      <div className="footer--content">
        <h3 className="footer--heading">More</h3>
        <ul>
          <li>About Us</li>
          <li>Products</li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="footer--social">
        <h3 className="footer--heading">Social Links</h3>
        <ul id="social-list">
          <li>
            <a href="#">
              {" "}
              <img src={instaLogo} alt="Instagram logo" />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <img src={twitterLogo} alt="Twitter logo" />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <img src={fbLogo} alt="Facebook logo" />{" "}
            </a>
          </li>
        </ul>
        <span id="copyright" className="text">
          © 2022 Food Truck Example
        </span>
      </div>
    </footer>
  );
}

export default Footer;
