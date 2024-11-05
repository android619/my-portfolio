import icon from "./assets/projects/icons8-menu.svg";
import React from "react";
import { useState } from "react";

import emailjs from "@emailjs/browser";

import Swal from "sweetalert2";
import pixxa from "./assets/pixxa.png";
import master from "./assets/mas.png";
import Potrait from "./assets/projects/m.png";
import html from "./assets/projects/html-5.png";
import css from "./assets/projects/css.png";
import atoms from "./assets/projects/atom.png";
import js from "./assets/projects/js.png";
import tailwind from "./assets/projects/tailwind.png";
import nextjs from "./assets/projects/nextjs.png";
import "./nav.css";

function App() {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <em className="Log">AM😎</em>
        </a>{" "}
        <nav className="navbar">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 50 50"
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </label>
          <ul>
            <a className="navvi blo" href="#About">
              About
            </a>
            <a className="navvi blo" href="#Service">
              services
            </a>

            <a className="navvi blo" href="#Portfolio">
              Portfolio
            </a>

            <a className="btn  " href="#Contact">
              Contact
            </a>
          </ul>
        </nav>
      </header>
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
function Hero() {
  return (
    <section id="Hero" className="hero-section">
      <div className="img-container">
        <div className="img-box">
          <div className="img">
            <img src={Potrait} alt="" />
          </div>
        </div>
      </div>
      <div className="home-container">
        <h3>Hello I am,</h3>
        <h1>Abdullahi</h1>
        <h2>Frontend Web Developer</h2>
        <p>
          My name is Abdullahi Muhammad, I am a Frontend Web developer.
          <br /> Check out my portfolio to see more..
        </p>
        <a className="btn-home" href="#Contact">
          Hire me
        </a>
      </div>
    </section>
  );
}
function About() {
  return (
    <section id="About" className="about-section ">
      <div className="about">
        <div className="about-text-container">
          <h1 className="sub-heading">About ME</h1>
          <div className="about-container">
            <h2 className="about-name">
              A great Frontend developer I am. I tried to make everything easy
              for a user{" "}
            </h2>
            <p className="about-small">
              I create fantastic website with great user experience that make it
              very easy for user to use
            </p>
            <p className="about-description">
              <h5 className="about-description-heading">My background</h5>I was
              born in jos, Nigeria. I started my primary in my home town and
              after i finished we moved to kano state were i finished my
              secondary school. I spend some years at home practicing web
              development and ux design. For all these years i've been learning
              many web languages like Html, Css, Tailwind, Javascript Next.js
              and React.{" "}
            </p>
            <p className="about-description-2">
              <h5 className="about-description-heading">
                My Web development Journey
              </h5>
              My development Journey started when my cisco teacher started
              showing us how websites work and how they are made i felt amazed
              and then my desire to started web development triggered, and when
              we were asked to choose between diffrent lesson after school and i
              choose to go for technology for the desire to learn web
              development.{" "}
            </p>
            <a href="#Service" className="btn-about ">
              Check my skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function Service() {
  return (
    <section id="Service" className="service">
      <div>
        <h2 className="sub-heading-2">Services</h2>
      </div>
      <h3 className="semi-sub-heading">
        Expertise Services! Let's check it out
      </h3>
      <p className="description-3">
        I have skills on the following programmning language and can create as
        many Website based on the following programmning languages
      </p>
      <div className="container">
        <div className="box-container">
          <div className="box">
            <img src={html} alt="" />
            <h3>HTML</h3>
            <p>
              Hypertext Markup Language is the standard markup language for
              documents designed to be displayed in a web browser. It defines
              the content and structure of web content.
            </p>
            <a
              className="btn-service"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
            >
              Learn More
            </a>
          </div>
          <div className="box">
            <img src={css} alt="" />
            <h3>CSS</h3>
            <p>
              Cascading Style Sheets is a style sheet language used for
              specifying the presentation and styling of a document written in a
              markup language such as HTML or XML.
            </p>
            <a
              className="btn-service"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
            >
              Learn More
            </a>
          </div>
          <div className="box">
            <img src={atoms} alt="" />
            <h3>REACT.JS</h3>
            <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components by Facebook Inc. It
              is maintained by Meta and a community of individual developers.
            </p>
            <a
              className="btn-service"
              href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
              target="_blank"
            >
              Learn More
            </a>
          </div>
          <div className="box">
            <img src={tailwind} alt="" />
            <h3>TAILWIND</h3>
            <p>
              Tailwind CSS is an open-source CSS framework. Unlike other
              frameworks, like Bootstrap, it does not provide a series of
              predefined classes for elements such as buttons or tables.
            </p>
            <a
              className="btn-service"
              href="https://www.geeksforgeeks.org/introduction-to-tailwind-css/"
              target="_blank"
            >
              Learn More
            </a>
          </div>
          <div className="box">
            <img src={js} alt="" />
            <h3>JAVASCRIPT</h3>
            <p>
              JavaScript, often abbreviated as JS, is a programming language and
              core technology of the Web, alongside HTML and CSS. 99% of
              websites use JavaScript on the client side for webpage behavior.
            </p>
            <a
              className="btn-service"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
              Learn More
            </a>
          </div>
          <div className="box">
            <img src={nextjs} alt="" />
            <h3>NEXT.JS</h3>
            <p>
              Next.js is an open-source web development framework created by the
              private company Vercel providing React-based web applications with
              server-side rendering and static website generation.
            </p>
            <a
              className="btn-service"
              href="https://nextjs.org/docs"
              target="_blank"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function Portfolio() {
  return (
    <section id="Portfolio" className="portfolio">
      <h2 className="sub-heading-2">Portfolio</h2>
      <p className="description-3 d-3">
        These are some of my website that i have create all these year of my
        Journey as a web developer.
      </p>
      <div>
        <div className="container c-2">
          <div className="box-container">
            <div className="box box-2">
              <img className="pic" src={master} alt="" />
              <h3>MasterMind</h3>
              <p>
                Master-mind is a website that find the movies of you choice and
                the display the publication date.
              </p>
              <a
                target="_blank"
                className="btn-service"
                href="https://mastermind-lilac.vercel.app/"
              >
                Check it out
              </a>
            </div>
            <div className="box box-2">
              <img src={pixxa} alt="" />
              <h3>Pixxabay</h3>
              <p>
                Pixxabay is a website that display a picture of anything you
                search and display it on the screen.
              </p>
              <a
                target="_blank"
                className="btn-service"
                href="https://pixxa-bay.vercel.app/"
              >
                Check it Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_esxz3fd",
        "template_jpzjwak",
        e.target,
        "5wPe819brMD13KZo-"
      )
      .then((result) => {
        setStateMessage(
          Swal.fire({
            title: "Success",
            text: "Messent Sent",
            icon: "success",
          })
        );
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      });
  };
  return (
    <section id="Contact" className="contact">
      <h2 className="sub-heading-2">Contact Me </h2>
      <div className="cont">
        <form action="#" onSubmit={sendEmail}>
          <div className="input-box">
            <label htmlFor="">Full name</label>
            <input
              name="name"
              className="field"
              type="text"
              placeholder="Full Name"
              id="name"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Email Address</label>
            <input
              name="email"
              className="field"
              type="email"
              placeholder="Email Address"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Your Message</label>
            <textarea
              name="message"
              className="field-mess"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <button className="btn-cont" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-el">CopyRight 2024 </div>
    </footer>
  );
}
export default App;
