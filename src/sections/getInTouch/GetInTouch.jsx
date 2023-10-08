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
        <form className="portfolio__getInTouch_content_contactForm" name="contact" method="POST">
          <input type="hidden" name="contact" value="contact" />
          <div className="portfolio__getInTouch_content_contactForm_content">
            <div className="portfolio__getInTouch_content_contactForm_item">
              <h1>Name</h1>
              <input name="name" type="text" required />
            </div>
            <div className="portfolio__getInTouch_content_contactForm_item">
              <h1>Email</h1>
              <input name="email" type="email" required />
            </div>
            <div className="portfolio__getInTouch_content_contactForm_item">
              <h1>Message</h1>
              <textarea name="message" required />
            </div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
