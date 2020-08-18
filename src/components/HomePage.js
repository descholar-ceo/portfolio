import React, { Component } from 'react';
import {
  FaPhone,
  FaLinkedinIn,
  FaGithub,
  FaMedium,
  FaSms,
  FaTwitter,
} from 'react-icons/fa';
import phoneIcon from '../assets/img/icons/telephone.svg';
import emailIcon from '../assets/img/icons/email.svg';
import githubIcon from '../assets/img/icons/github.svg';
import twitterIcon from '../assets/img/icons/twitter.svg';
import linkedinIcon from '../assets/img/icons/linkedin.svg';
import mediumIcon from '../assets/img/icons/medium.svg';
import customMsg from '../utils/customMessages';
import myImg from '../assets/img/my-pic.jpg';
import backendIcon from '../assets/img/backend-icon.jpg';
import { handleAsideBtns } from '../handlers/handleBtns';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    const elts = {
      aboutMeArticle: document.getElementById('about-me-article'),
      technicalSkillsArticle: document.getElementById('technical-skills-article'),
      softSkillsArticle: document.getElementById('soft-skills-article'),
      projectsArticle: document.getElementById('projects-article'),
      contactArticle: document.getElementById('contact-article'),
      aboutMeBtn: document.getElementById('about-me-btn'),
      technicalSkillsBtn: document.getElementById('technical-skills-btn'),
      softSkillsBtn: document.getElementById('soft-skills-btn'),
      projectsBtn: document.getElementById('projects-btn'),
      contactBtn: document.getElementById('contact-btn'),
    };

    this.setState({ myElements: elts });
  }

  render() {
    const { welcomeMessage, myNames, guideMsg } = customMsg;
    return (
      <div className="portfolio-container">
        <div className="welcome-screen">
          <h1>{welcomeMessage}</h1>
          <h2>{myNames}</h2>
          <h3>{guideMsg}</h3>
        </div>
        <div id="portfolio-navigation" className="portfolio-navigation">
          <nav className="top-nav">
            <ul>
              <li><div className="close-btn" /></li>
              <li><div className="minimize-btn" /></li>
              <li><div className="maxmize-btn" /></li>
            </ul>
          </nav>
          <main>
            <nav className="aside">
              <button
                id="about-me-btn"
                type="button"
                className="text-white active"
                onClick={(event) => { handleAsideBtns(this, event); }}
              >
                About me

              </button>
              <button
                id="technical-skills-btn"
                type="button"
                className="text-white dark-bg"
                onClick={(event) => { handleAsideBtns(this, event); }}
              >
                Technical skills

              </button>
              <button
                id="soft-skills-btn"
                type="button"
                className="text-white dark-bg"
                onClick={(event) => { handleAsideBtns(this, event); }}
              >
                Soft skills

              </button>
              <button
                id="projects-btn"
                type="button"
                className="text-white dark-bg"
                onClick={(event) => { handleAsideBtns(this, event); }}
              >
                Projects

              </button>
              <button
                id="contact-btn"
                type="button"
                className="text-white dark-bg"
                onClick={(event) => { handleAsideBtns(this, event); }}
              >
                Contact me

              </button>
            </nav>
            <section>
              {/** About me */}
              <article id="about-me-article" className="about-me-content text-white">
                <div className="padding-1 about-me-content-text scroll-y">
                  <p>
                    Hi there and nice to meet you!
                  </p>

                  <p>
                   I am a full-stack software engineer with expertise in NodeJS, PostgreSQL, React, Ruby, Ruby on Rails, 
                   Semantic HTML5, CSS3, Git, Agile methodology, Mobile applications, Technical Team Lead, and mentor.
                  </p>
                  <p>
                    I am currently open to full-stack development posts, for global products, startups, and many more.
                  </p>
                  <p>
                    Since I started my professional journey in 2014 as a health care provider, I realized that programming 
                    had the potential to change our world through solving the most challenging, tiresome, and repetitive 
                    work we do manually.
                  </p>
                  <p>
                    Being a technology enthusiast, I decided to dive deep in programming and developed an android application 
                    that helps me keep track of my phone logs and SMS which encouraged me that programming is feasible. So I 
                    joined the Andela stack up to master all of the needed technical and soft skills that professional software 
                    engineers use in their daily life, and after that, I attended Microverse, an online coding school.
                  </p>
                  <p>
                    Now, I can comfortably build solutions based on ideas, help engineering teams to escalate their productivity 
                    by delivering the product before or on deadlines, help new businesses to grow their productivity by automating 
                    their processes through qualified systems, mentor junior programmers.
                  </p>

                </div>
                <div>
                  <img src={myImg} alt="descholar-pic" />
                </div>
              </article>

              {/** My technical skills */}
              <article id="technical-skills-article" className="technical-skills-article hidden-element">
                <div className="technical-skills-container">
                  <div className="technical-skills-container-head"><h1>My Technical skills</h1></div>
                  <div className="technical-skills-listing">
                    <section>
                      <div>
                        <img src={backendIcon} alt="descholar's backend skills" />
                      </div>
                      <div className="card-mid-head">
                        <h2>Backend</h2>
                      </div>
                      <div className="tech-skill">
                        <div className="skill">
                          <div className="skill-node-progress skill-progress">NodeJS / Express</div>
                        </div>
                        <div className="skill">
                          <div className="skill-java-progress skill-progress">Java / Springboot</div>
                        </div>
                        <div className="skill">
                          <div className="skill-ruby-progress skill-progress">Ruby</div>
                        </div>
                      </div>
                    </section>
                    <section>
                      <div>
                        <img src={backendIcon} alt="descholar's backend skills" />
                      </div>
                      <div className="card-mid-head">
                        <h2>Frontend</h2>
                      </div>
                      <div className="tech-skill">
                        <div className="skill">
                          <div className="skill-javascript-progress skill-progress">Javascript / React</div>
                        </div>
                        <div className="skill">
                          <div className="skill-html-progress skill-progress">HTML5 && CSS3</div>
                        </div>
                      </div>
                    </section>
                    <section>
                      <div>
                        <img src={backendIcon} alt="descholar's backend skills" />
                      </div>
                      <div className="card-mid-head">
                        <h2>Mobile development</h2>
                      </div>
                      <div className="tech-skill">
                        <div className="skill">
                          <div className="skill-android-progress skill-progress">Android</div>
                        </div>
                        <div className="skill">
                          <div className="skill-react-native-progress skill-progress">React native && Java</div>
                        </div>
                      </div>
                    </section>
                    <section>
                      <div>
                        <img src={backendIcon} alt="descholar's backend skills" />
                      </div>
                      <div className="card-mid-head">
                        <h2>Database</h2>
                      </div>
                      <div className="tech-skill">
                        <div className="skill">
                          <div className="skill-postgresql-progress skill-progress">PostgreSQL</div>
                        </div>
                        <div className="skill">
                          <div className="skill-mysql-progress skill-progress">MySQL</div>
                        </div>
                        <div className="skill">
                          <div className="skill-sqlite-progress skill-progress">SQLite</div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </article>

              {/** My soft skills */}
              <article id="soft-skills-article" className="soft-skills-article hidden-element">
                <div className="soft-skills-container">
                  <div className="soft-skills-container-head"><h1>My soft skills</h1></div>
                  <div className="soft-skills-listing">
                    <section>
                      <div className="homepage-book">
                        <div>
                          <div className="homepage-book-cover">
                            <figure className="homepage-book-cover-front">
                              <div>
                                <h3>Communication</h3>
                                <h3>Teamworking</h3>
                                <h3>Leadership</h3>
                                <h3>Time management</h3>
                              </div>
                            </figure>
                            <figure className="homepage-book-cover-back">
                              <div className="homepage-book-cover-back-text p-5">
                                <div id="what-nezarecruit-title" />
                                <div id="what-nezarecruit" />
                              </div>
                            </figure>
                          </div>
                        </div>
                        <div className="p-5">
                          <div id="why-nezarecruit-title" />
                          <div id="why-nezarecruit" />
                        </div>
                        <div>
                          {/* <span className="text-danger">sorry</span> */}
                        </div>
                      </div>
                    </section>
                    <section>
                      <div className="homepage-book">
                        <div>
                          <div className="homepage-book-cover">
                            <figure className="homepage-book-cover-front">
                              <div>
                                <h3>Attention to details</h3>
                                <h3>Problem solving</h3>
                                <h3>Adaptability</h3>
                                <h3>Work ethics</h3>
                              </div>
                            </figure>
                            <figure className="homepage-book-cover-back">
                              <div className="homepage-book-cover-back-text p-5">
                                <div id="what-nezarecruit-title" />
                                <div id="what-nezarecruit" />
                              </div>
                            </figure>
                          </div>
                        </div>
                        <div className="p-5">
                          <div id="why-nezarecruit-title" />
                          <div id="why-nezarecruit" />
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </article>

              {/** Projects */}
              <article id="projects-article" className="projects-article hidden-element">
                <div className="projects-container">
                  <div className="projects-container-head"><h1>My projects</h1></div>
                  <div className="projects-listing">
                    <section>
                      <div className="project-card">
                        <h3>CityInfo</h3>
                        <div className="project-bg-city-info">
                          <div className="project-specs">
                            <p>
                              An open source project which helps searching any U.S. Cities or State
                            </p>
                          </div>
                          <div className="project-card-links card-grid-two-links">
                            <a href="https://github.com/descholar-ceo/city-info" rel="noreferrer" target="_blank">Source codes</a>
                            <a href="https://frosty-meitner-e44822.netlify.app/" rel="noreferrer" target="_blank">Live link</a>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section>
                      <div className="project-card">
                        <h3>AccommodationDirectory</h3>
                        <div className="project-bg-accommodation">
                          <div className="project-specs">
                            <p>
                              A capstone project after completing HTML5 && CSS3,
                              for the design of patashule application
                            </p>
                          </div>
                          <div className="project-card-links card-grid-two-links">
                            <a href="https://github.com/descholar-ceo/accommodations-directory" rel="noreferrer" target="_blank">Source codes</a>
                            <a href="https://xenodochial-volhard-3da12d.netlify.app/" rel="noreferrer" target="_blank">Live link</a>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section>
                      <div className="project-card">
                        <h3>Phone History Store</h3>
                        <div className="project-bg-ph-store">
                          <div className="project-specs">
                            <p>
                              An android application for storing phone data, calls, and sms logs
                            </p>
                          </div>
                          <div className="project-card-links card-grid-one-link">
                            <a href="https://apkcombo.com/phone-history-store-v7/com.scholar.emmanuel_de_scholar.phonehistorystore/" rel="noreferrer" target="_blank">
                              See it and download apk from
                              {' '}
                              <strong>apkcombo</strong>
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </article>

              {/** contact */}
              <article id="contact-article" className="contact-article hidden-element">
                <div className="contact-container">
                  <div className="contact-container-head"><h1>I would like to hear from you</h1></div>
                  <div className="contact-listing">
                    <section>
                      <div className="contact-card">
                        <h1>Call me or send me an sms</h1>
                        <div>
                          <img src={phoneIcon} alt="descholar's phone" />
                        </div>

                        <a href="tel:+250782229462">
                          <FaPhone />
                          {' '}
                          +250782229462
                        </a>
                      </div>
                    </section>
                    <section>
                      <div className="contact-card">
                        <h1>Send me an email</h1>
                        <div>
                          <img src={emailIcon} alt="descholar's phone" />
                        </div>

                        <a href="mailto:emmamugira@gmail.com">
                          <FaSms />
                          {' '}
                          emmamugira@gmail.com
                        </a>
                      </div>
                    </section>
                    <section>
                      <div className="contact-card">
                        <h1>Find me on GitHub</h1>
                        <div>
                          <img src={githubIcon} alt="descholar's github" />
                        </div>

                        <a href="https://github.com/descholar-ceo">
                          <FaGithub />
                          {' '}
                          descholar-ceo
                        </a>
                      </div>
                    </section>
                    <section>
                      <div className="contact-card">
                        <h1>Find me on LinkedIn</h1>
                        <div>
                          <img src={linkedinIcon} alt="descholar's phone" />
                        </div>

                        <a href="https://www.linkedin.com/in/mugirase-emmanuel-a90b49143/">
                          <FaLinkedinIn />
                          {' '}
                          Mugirase Emmanuel
                        </a>
                      </div>
                    </section>
                    <section>
                      <div className="contact-card">
                        <h1>Find me on Twitter</h1>
                        <div>
                          <img src={twitterIcon} alt="descholar's twitter" />
                        </div>

                        <a href="https://twitter.com/descholar3">
                          <FaTwitter />
                          {' '}
                          descholar
                        </a>
                      </div>
                    </section>
                    <section>
                      <div className="contact-card">
                        <h1>Find me on Medium</h1>
                        <div>
                          <img src={mediumIcon} alt="descholar's medium" />
                        </div>

                        <a href="https://medium.com/@emmamugira">
                          <FaMedium />
                          {' '}
                          Mugirase Emmanuel
                        </a>
                      </div>
                    </section>
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
