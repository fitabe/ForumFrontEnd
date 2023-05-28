import React from "react";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/feather/facebook";
import { instagram } from "react-icons-kit/feather/instagram";
import { youtube } from "react-icons-kit/feather/youtube";
import "./Footer.css";
import logo from "../../Images/forumLogo-1.png";

export default function Footer() {
  return (
    <footer className="footer-wrapper d-md-flex justify-content-around">
      <div className="logo-icon-wrapper">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="Icon">
          <a href="https://www.facebook.com/" target="_blank">
            <Icon icon={facebook} size={25} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Icon icon={instagram} size={25} />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <Icon icon={youtube} size={25} />
          </a>
        </div>
      </div>
      <div className="row">
        <h3 className="titlee"> Useful Link</h3>
        <div className="Useful-Link ">
          <a href="#">How it works</a>

          <a href="#">Terms of Service</a>

          <a href="#">Privacy policy</a>
        </div>
      </div>
      <div className="row">
        <div className="Contact-Info">
          <h3 className="titlee"> Contact Info</h3>
          <p>Forum Networks</p>
          <p>fitabe7@gmail.com</p>
          <p>+1 (815)641-7740</p>
        </div>
      </div>
    </footer>
  );
}
