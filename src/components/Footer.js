import "../css/Footer.css";
import WhiteLogo from "../images/white_logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <div>
          <img src={WhiteLogo} alt="logo_Casa" />
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
