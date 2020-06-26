import React, { Component } from 'react';
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import customMsg from '../utils/customMessages';
import myImg from '../assets/img/my-pic.jpg';
import backendIcon from '../assets/img/backend-icon.jpg';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { welcomeMessage, myNames } = customMsg;
    return (
      <div className="portfolio-container">
        <div className="welcome-screen">
          <h1>{welcomeMessage}</h1>
          <h2>{myNames}</h2>
          <button type="button">Start</button>
        </div>
        <div className="portfolio-navigation">
          <nav className="top-nav">
            <ul>
              <li><FaTimesCircle className="close-btn" /></li>
              <li><FaMinusCircle className="minimize-btn" /></li>
              <li><FaPlusCircle className="maxmize-btn" /></li>
            </ul>
            <ul>
              <li>Home</li>
              <li>Contact me</li>
              <li>Settings</li>
            </ul>
          </nav>
          <main>
            <nav className="aside">
              <div className="active">About me</div>
              <div className="text-white">Technical skills</div>
              <div className="text-white">Soft skills</div>
              <div className="text-white">My works</div>
              <div className="text-white">My experience</div>
              <div className="text-white">Education</div>
              <div className="text-white">Contact me</div>
            </nav>
            <section>
              <article className="about-me-content text-white">
                <div className="padding-1 about-me-content-text scroll-y">
                  <p>
                    Hi there and nice to meet you!
                  </p>

                  <p>
                    I am MUGIRASE Emmanuel from Gisenyi, Rwanda. I have worke in health sector
                    as an assistant clinical anaesthetist since 2014 till 2020, where I was an
                    assistant of anesthesiology head of department in Gisenyi Hospital, I have
                    worked as team coordinator, and anesthesia services providing for the entire
                    time I spent there. I worked as an english teacher in Muduha Primary school
                    in 2011. After all of those works I shifted my career to software engineering
                    which I dreamt for years, I started software engineering in 2017, where I
                    learned Java, Javascript(NodeJS, React), Android, Web technologies.
                  </p>

                  <p>
                    I am confident enough to work on any health system app (desktop app,
                    web app, entreprise app, or mobile app), I am an innovative man,
                    who loves working with teams on daily basis.
                  </p>

                  <p>
                    I graduated from University of Rwanda in College of Medicine
                    and Health sciences in 2014, and in 2016 I went to Kigali independent
                    University to study computer sciences, when I grabbed the basics of programming
                    I dropped out before graduating because I wanted to focus muore on software
                    engineering in a professiona way. Now I am ready to bring solutions using
                    programming.
                  </p>

                  <p>
                    Hard-working, focused, innovative, result-oriented, and growth mindset are
                    the top four adjectives that best define my aptitude towards work.
                  </p>

                  <p>
                    Co-workers see me as a team player who gives his best in sharing ideas,
                    as well as creating and designing innovative experiences.
                  </p>

                  <p>
                    Friends and family members see me as a nerd person, who invest most of his
                    time for inventing new technology, and who will once move the world to the
                    extend of changing people lifestyle.
                  </p>

                  <p>
                    Either of them you choose to be, go ahead and get in touch with me!
                  </p>

                </div>
                <div>
                  <img src={myImg} alt="descholar-pic" />
                </div>
              </article>
              <article>
                <div className="technical-skills-conatiner">
                  <h1>My Technical skills</h1>
                  <div>
                    <div>
                      <h2>Backend</h2>
                      <img src={backendIcon} alt="descholar's backend skills" />
                      <div>
                        <span>NodeJS / Express</span>
                        <span>92%</span>
                      </div>
                      <div>
                        <span>Java / Springboot</span>
                        <span>60%</span>
                      </div>
                      <div>
                        <span>Ruby / Ruby on Rails</span>
                        <span>0.1%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default HomePage;
