import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/setup.jpg'



const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt=" Tanaka" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            Dedicated Fullstack & Blockchain Developer with 5 years of experience in designing,
            developing, and deploying advanced web and blockchain applications. Possessing
            a strong proficiency in front-end technologies such as React.js, HTML, and CSS
            create intuitive user interfaces, alongside back-end expertise in Node.js,
            Express, and databases like MongoDB and PostgreSQL. Proven ability to architect
            and implement smart contracts on platforms such as Ethereum and Binance Smart Chain,
            leveraging Solidity and Web3.js to facilitate secure and efficient transactions.
            Skilled in ensuring seamless integration between front-end and back-end systems,
            optimizing performance, and maintaining robust application security standards.
            Passionate about leveraging blockchain technology to create innovative solutions
            that drive business success and improve user experiences.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
