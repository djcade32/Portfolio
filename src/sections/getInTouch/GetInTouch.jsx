import React from "react";
import "./getInTouch.css";

const GetInTouch = () => {
  return (
    <div id="getInTouch" className="--section-padding portfolio__getInTouch">
      <h1>
        {"< "}Get In Touch{" />"}
      </h1>
      <div className="portfolio__getInTouch_content">
        <div className="portfolio__getInTouch_content_contactInfo_container">
          <div className="portfolio__getInTouch_content_contactInfo_item">
            <h1>Phone number</h1>
            <p>919.323.6477</p>
          </div>
          <div className="portfolio__getInTouch_content_contactInfo_item">
            <h1>Email</h1>
            <p>normancade@gmail.com</p>
          </div>
        </div>
        <div className="portfolio__getInTouch_content_contactForm">
          <div className="portfolio__getInTouch_content_contactForm_content">
            <div className="portfolio__getInTouch_content_contactForm_item">
              <h1>Name</h1>
              <input type="text" />
            </div>
            <div className="portfolio__getInTouch_content_contactForm_item">
              <h1>Email</h1>
              <input type="email" />
            </div>
            <div className="portfolio__getInTouch_content_contactForm_item">
              <h1>Message</h1>
              <textarea />
            </div>
            <button type="submit">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
