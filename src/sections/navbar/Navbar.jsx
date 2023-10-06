import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { RiTerminalLine } from "react-icons/ri";
import { useAppContext } from "../../context/AppContext";

const githubProfile = "https://github.com/djcade32";
const LinkedInProfile = "https://www.linkedin.com/in/norman-cade-268818167/";

const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useAppContext();
  return (
    <div className="portfolio__nav">
      {/* Desktop Navbar */}
      <div className="portfolio__nav_desktop">
        <div className="portfolio__nav_leftSide">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutMe">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#getInTouch">Get In Touch</a>
            </li>
          </ul>
        </div>
        <div className="portfolio__rightSide">
          <a className="portfolio__rightSide_socialLinks" href={githubProfile} target="_blank">
            <p>Github</p>
            <AiOutlineGithub size={25} color="white" />
          </a>
          <a className="portfolio__rightSide_socialLinks" href={LinkedInProfile} target="_blank">
            <p>LinkedIn</p>
            <AiFillLinkedin size={25} color="white" />
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      {showMobileMenu && (
        <div className="portfolio__nav_mobile_overlay" onClick={() => setShowMobileMenu(false)} />
      )}
      <div className="portfolio__nav_mobile">
        <RiTerminalLine
          size={25}
          color="white"
          cursor={"pointer"}
          onMouseOver={({ target }) =>
            (target.style.animation = "animate-opacity-fade-out .25s forwards")
          }
          onMouseOut={({ target }) =>
            (target.style.animation = "animate-opacity-fade-out .25s reverse")
          }
          onClick={() => setShowMobileMenu(true)}
        />
        <div
          className="portfolio__nav_mobile_menuContent"
          style={{
            flexDirection: "column",
            animation: showMobileMenu && "animate-mobileMenu-slideIn-left .25s forwards",
          }}
        >
          <div>
            <AiOutlineClose
              size={25}
              color="white"
              cursor={"pointer"}
              onMouseOver={({ target }) =>
                (target.style.animation = "animate-opacity-fade-out .25s forwards")
              }
              onMouseOut={({ target }) =>
                (target.style.animation = "animate-opacity-fade-out .25s reverse")
              }
              onClick={() => setShowMobileMenu(false)}
            />
          </div>

          <ul style={{ display: "flex", flexDirection: "column", rowGap: "var(--spacing-sm)" }}>
            <li onClick={() => setShowMobileMenu(false)}>
              <a href="#home">Home</a>
            </li>
            <li onClick={() => setShowMobileMenu(false)}>
              <a href="#aboutMe">About Me</a>
            </li>
            <li onClick={() => setShowMobileMenu(false)}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={() => setShowMobileMenu(false)}>
              <a href="#getInTouch">Get In Touch</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
