import React from "react";
import FUUDIA from "../images/FUUDIA-removebg-preview.png";
// import Coffee from "../images/coffee_glasses-removebg-preview.png"
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus, faMagnifyingGlass, faStar, faArrowAltCircleLeft, faArrowAltCircleRight, faCircle, faChevronDown, faChevronUp, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Caramel from "../images/caramel.png";
import Vanilla from "../images/vanilla.png";
import Latte from "../images/Latte.png";
import Coffee from "../images/Coffeepicture.png";
import Americano from "../images/americano.png";
import Chai from "../images/chai.png";
import Pumpkin from "../images/pumpkin.png";
import Subscribe from "../images/Subscribe.png";
import Seeds from "../images/coffeeseeds.png"


function Header() {
  return (
    <div className="container">
      <header className="nav-bar">
        <nav className="elements">
          <div className="nav1">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
            </ul>
          </div>
          <img className="nav-img" src={FUUDIA} />
          <div className="nav2">
            <ul>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faBars} className="icon" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            <FontAwesomeIcon icon={faCartPlus} className="icon" />
          </div>
        </nav>
        <div className="info-sec">
          <div className="info">
            <h1>
              Good Coffee Will Always Find <br /> the Audience
            </h1>
            <p>
              The fresh auroma of our ethiopian blend is just what you need to
              start your day
            </p>
          </div>
          <button>Shop Now</button>
        </div>
      </header>

      <div className="menu">
        <h1>Popular Menu</h1>
        <p>What would you like to sip today?</p>
      </div>
      <div className="cards">
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="arrow" />

        <div className="card1">
          <card>
            <img src={Caramel} />
            <h3>Caramel Macchiato</h3>
            <h5>
              Enjoy the sweet flavor of <br /> this special blend.
            </h5>
            <div>
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
            </div>
            <h4 className="review">(250) Reviews</h4>
            <h2 className="dollar">$150</h2>
            <button>Shop Now</button>
          </card>
        </div>

        <div className="card1">
          <card>
            <img src={Vanilla} />
            <h3>Vanilla Crema</h3>
            <h5>
              Fresh madagascan vanilla <br /> coffe brew with cocoa.
            </h5>
            <div>
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
            </div>
            <h4 className="review">(250) Reviews</h4>
            <h2 className="dollar">$150</h2>
            <button>Shop Now</button>
          </card>
        </div>

        <div className="card1">
          <card>
            <img src={Latte} />
            <h3>Spicy Latte</h3>
            <h5>
              Catch up with your daily
              <br />
              dose of caffeine.
            </h5>
            <div>
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
            </div>
            <h4 className="review">(250) Reviews</h4>
            <h2 className="dollar">$150</h2>
            <button>Shop Now</button>
          </card>
        </div>
        <FontAwesomeIcon icon={faArrowAltCircleRight} className="arrow" />
      </div>
      <div className="circles">
        <FontAwesomeIcon icon={faCircle} className="circle1" />
        <FontAwesomeIcon icon={faCircle} className="circle2" />
        <FontAwesomeIcon icon={faCircle} className="circle3" />
      </div>
      <div className="ORDER">
        <div className="order">
          <h2>
            Order Your <br /> Favourite Coffee
          </h2>
          <img src={Coffee} />
        </div>

        <div className="order2">
          <p>
            Whether you like the hot black liquid <br /> slipping down your
            throat or you <br /> want a cold refreshing but uplifting <br />{" "}
            cup, we've got you.
          </p>
          <button>View More</button>
        </div>
      </div>

      <div className="weekly">
        <h2>Weekly Special Menu</h2>
        <p>
          Get brews from that warm your insides OR grab <br /> one of our
          delicious Ethiopian Brews
        </p>
        <div className="CARD">
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            className="arrow"
            style={{ color: "#71645E" }}
          />
          <div className="card1">
            <card>
              <img src={Americano} />
              <h3>Iced Americano Twist</h3>
              <h5>
                A cool and refreshing drink <br /> for a sunny day.
              </h5>
              <div className="STAR">
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
              </div>
              <h4 className="review1">(250) Reviews</h4>
              <h2 className="dollar">$150</h2>
              <button>Shop Now</button>
            </card>
          </div>

          <div className="card1">
            <card>
              <img src={Pumpkin} />
              <h3>Pumpkin Spice</h3>
              <h5>
                Bring the holiday spirit with <br /> this spicy drink.
              </h5>
              <div className="STAR">
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
              </div>
              <h4 className="review1">(250) Reviews</h4>
              <h2 className="dollar">$150</h2>
              <button>Shop Now</button>
            </card>
          </div>

          <div className="card1">
            <card>
              <img src={Chai} />
              <h3>Chai Latte</h3>
              <h5>
                Sweet and spicy treat for both
                <br />
                the young and the old.
              </h5>
              <div className="STAR">
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
              </div>
              <h4 className="review1">(250) Reviews</h4>
              <h2 className="dollar">$150</h2>
              <button>Shop Now</button>
            </card>
          </div>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="arrow" />
        </div>
        <div className="circles">
          <FontAwesomeIcon icon={faCircle} className="circle1" />
          <FontAwesomeIcon icon={faCircle} className="circle2" />
          <FontAwesomeIcon icon={faCircle} className="circle3" />
        </div>
      </div>
      <div className="subscribe">
        <img src={Subscribe} />
        <h2>Subscribe to our<br/> NewsLetter!</h2>
      </div>
      <div className="sub">
        <p>
          Be the first to know when we have <br /> exclussive offers
        </p>
        <button>Email address</button>
      </div>
      <div className="now">
        <button>Subscribe Now</button>
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="question">
          <card>
            <div className="shipping">
              <div className="free">
                <div className="frees">
                  <div>
                    <h4>Free shipping on all over $100</h4>
                    <p>
                      Order online and have it delivered to your home in up to 5
                      business days
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faChevronDown} className="chevron" />
                </div>
              </div>
              <hr />
              <div className="free">
                <div>
                  <h4>Updates and Promotions</h4>
                </div>
                <FontAwesomeIcon icon={faChevronUp} className="chevron" />
              </div>
              <hr />
              <div className="free">
                <div>
                  <h4>Customer Service</h4>
                </div>
                <FontAwesomeIcon icon={faChevronUp} className="chevron" />
              </div>
              <hr />
              <div className="free">
                <div>
                  <h4>Subscriptions</h4>
                </div>
                <FontAwesomeIcon icon={faChevronUp} className="chevron" />
              </div>
            </div>
          </card>
          <div className="seeds">
            <img src={Seeds} />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="minifooter">
          <img src={FUUDIA} />
          <div className="quick">
            <h3>Quick links</h3>
            <p>Shop Our Coffee</p>
            <p>Speaking Coffee</p>
            <p>Gifts & Accessories</p>
            <p>Subscription</p>
            <p>Company</p>
          </div>

          <div className="infor">
            <h3>Info</h3>
            <p>Search</p>
            <p>Policies</p>
            <p>Contact Us</p>
            <p>Accessories</p>
            <p>Partner with Us</p>
          </div>

          <div className="Customer">
            <h3>Customer Care</h3>
            <div>
              <FontAwesomeIcon icon={faPhone} className="phone" />
              <span className="text">+233205066992</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="phone" />
              <span className="text">info@ouicafe.com</span>
            </div>
            <FontAwesomeIcon icon={faLinkedin} className="brands" />
            <FontAwesomeIcon icon={faFacebook} className="brands" />
            <FontAwesomeIcon icon={faTwitter} className="brands" />
            <FontAwesomeIcon icon={faInstagram} className="brands" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
