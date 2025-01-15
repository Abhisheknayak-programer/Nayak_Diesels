import React from "react";
import "./Footer.css";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_redirects_container">
        <div className="footer__section">
          <img src="./logo.png" className="margin__bottom" alt="logo" />
          <p className="footer___headline margin__bottom">
            Expert in DG Set Repair & Service – Ensuring Power, Anytime,
            Anywhere!
          </p>
          <div className="footer_redirect_box">
            <CallIcon className="mui___icons" />
            <a href="tel:+91 9439088814" target="_blank" rel="noreferrer">
              +91 9439088814, +91 7077358291
            </a>
          </div>
          <div className="footer_redirect_box">
            <MailIcon className="mui___icons" />
            <a
              href="mailto:nayakservice@gmail.com?&amp;subject=User from Website"
              target="_blank"
              rel="noreferrer"
            >
              nayakservice@gmail.com
            </a>
          </div>
          <div className="footer_redirect_box">
            <HomeIcon className="mui___icons" />
            <a
              href="https://www.google.com/maps/place/Anand+Plaza,+Laxmisagar+Rd,+Laxmisagar,+Bhubaneswar,+Odisha+751006/@20.268198,85.8463286,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19a0b2cb0f0b8d:0x51084694ddb89876!8m2!3d20.268193!4d85.8489035!16s%2Fg%2F11bxdypdx5?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              Anand Plaza, Laxmisagar, Bhubaneswar 751006
            </a>
          </div>
        </div>

        <div className="footer__section footer__nav___items">
          <h4 className="footer___section__headlines">Quick Links</h4>

          <div className="footer_redirect_box">
            <PlayArrowIcon className="mui___icons" />
            <Link to="/">Home</Link>
          </div>

          <div className="footer_redirect_box">
            <PlayArrowIcon className="mui___icons" />
            <Link to="/about">About</Link>
          </div>

          <div className="footer_redirect_box">
            <PlayArrowIcon className="mui___icons" />
            <Link to="/services">Services</Link>
          </div>

          <div className="footer_redirect_box">
            <PlayArrowIcon className="mui___icons" />
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer_redirect_box">
            <PlayArrowIcon className="mui___icons" />
            <Link to="#">Terms & Conditions</Link>
          </div>
        </div>

        <div className="footer__section footer__nav___items">
          <h4 className="footer___section__headlines margin__bottom">
            Social Media
          </h4>
          <p className="footer__headline margin__bottom">
            Stay Connected! Follow us on social media for updates and insights.
          </p>
          <div className="social__media_container">
            <a href="#" target="_blank" rel="noreferrer">
              <LinkedInIcon className="social_media_icon" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <WhatsAppIcon className="social_media_icon" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FacebookIcon className="social_media_icon" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <XIcon className="social_media_icon" />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright_paragraph">
        Copyright &copy; {new Date().getFullYear()} Nayak Diesels | All Rights
        Reserved!
      </p>
    </footer>
  );
};

export default Footer;
