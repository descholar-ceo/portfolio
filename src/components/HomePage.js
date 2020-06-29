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
              <div className="text-white">Projects</div>
              <div className="text-white">Contact</div>
            </nav>
            <section>
              {/** About me */}
              <article className="about-me-content text-white hidden-element">
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

              {/** My technical skills */}
              <article className="technical-skills-article hidden-element">
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
              <article className="soft-skills-article">
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
                                <p>
                                  As communication is a key to success to any institution, I am able
                                  to communicate my ideas clearly, through verbal or written
                                  communication. I can give a good presentation, writing articles,
                                </p>

                                <h3>Languages spoken</h3>
                                <p>I speak three languages:</p>
                                <p>Kinyarwanda as my mother tongue</p>
                                <p>English as a second language</p>
                                <p>French as my third language</p>

                                <h3>Communication based abilities</h3>
                                <p>
                                  I have great skills in mentoring, sharing knowledge,
                                  and giving constructive feedback.
                                </p>
                                <p>
                                  When it comes to communicating ideas, I can be a good instructor,
                                  leader, or teacher!
                                </p>
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
                            <figure className="homepage-book-cover-front" />
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
                          <span className="text-danger">sorry</span>
                        </div>
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
