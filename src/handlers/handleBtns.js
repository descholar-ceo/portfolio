// import { animateScroll as scroll } from 'react-scroll';

export const handleAsideBtns = (component, event) => {
  console.log('this is the state of passed component', component.state);
  const { id } = event.target;
  const {
    aboutMeArticle,
    technicalSkillsArticle,
    softSkillsArticle,
    projectsArticle,
    contactArticle,
    aboutMeBtn,
    technicalSkillsBtn,
    softSkillsBtn,
    projectsBtn,
    contactBtn,
  } = component.state.myElements;

  const HIDDEN = 'hidden-element';
  const ACTIVE = 'active';
  const DARK = 'dark-bg';

  switch (id) {
    case 'about-me-btn':
      // articles
      aboutMeArticle.classList.remove(HIDDEN);
      technicalSkillsArticle.classList.add(HIDDEN);
      softSkillsArticle.classList.add(HIDDEN);
      projectsArticle.classList.add(HIDDEN);
      contactArticle.classList.add(HIDDEN);

      // btns
      aboutMeBtn.classList.add(ACTIVE);
      aboutMeBtn.classList.remove(DARK);
      technicalSkillsBtn.classList.remove(ACTIVE);
      technicalSkillsBtn.classList.add(DARK);
      softSkillsBtn.classList.remove(ACTIVE);
      softSkillsBtn.classList.add(DARK);
      projectsBtn.classList.remove(ACTIVE);
      projectsBtn.classList.add(DARK);
      contactBtn.classList.remove(ACTIVE);
      contactBtn.classList.add(DARK);
      break;

    case 'technical-skills-btn':
      // articles
      aboutMeArticle.classList.add(HIDDEN);
      technicalSkillsArticle.classList.remove(HIDDEN);
      softSkillsArticle.classList.add(HIDDEN);
      projectsArticle.classList.add(HIDDEN);
      contactArticle.classList.add(HIDDEN);

      // btns
      aboutMeBtn.classList.remove(ACTIVE);
      aboutMeBtn.classList.add(DARK);
      technicalSkillsBtn.classList.add(ACTIVE);
      technicalSkillsBtn.classList.remove(DARK);
      softSkillsBtn.classList.remove(ACTIVE);
      softSkillsBtn.classList.add(DARK);
      projectsBtn.classList.remove(ACTIVE);
      projectsBtn.classList.add(DARK);
      contactBtn.classList.remove(ACTIVE);
      contactBtn.classList.add(DARK);
      break;
    case 'soft-skills-btn':
      // articles
      aboutMeArticle.classList.add(HIDDEN);
      technicalSkillsArticle.classList.add(HIDDEN);
      softSkillsArticle.classList.remove(HIDDEN);
      projectsArticle.classList.add(HIDDEN);
      contactArticle.classList.add(HIDDEN);

      // btns
      aboutMeBtn.classList.remove(ACTIVE);
      aboutMeBtn.classList.add(DARK);
      technicalSkillsBtn.classList.remove(ACTIVE);
      technicalSkillsBtn.classList.add(DARK);
      softSkillsBtn.classList.add(ACTIVE);
      softSkillsBtn.classList.remove(DARK);
      projectsBtn.classList.remove(ACTIVE);
      projectsBtn.classList.add(DARK);
      contactBtn.classList.remove(ACTIVE);
      contactBtn.classList.add(DARK);
      break;
    case 'projects-btn':
      // articles
      aboutMeArticle.classList.add(HIDDEN);
      technicalSkillsArticle.classList.add(HIDDEN);
      softSkillsArticle.classList.add(HIDDEN);
      projectsArticle.classList.remove(HIDDEN);
      contactArticle.classList.add(HIDDEN);

      // btns
      aboutMeBtn.classList.remove(ACTIVE);
      aboutMeBtn.classList.add(DARK);
      technicalSkillsBtn.classList.remove(ACTIVE);
      technicalSkillsBtn.classList.add(DARK);
      softSkillsBtn.classList.remove(ACTIVE);
      softSkillsBtn.classList.add(DARK);
      projectsBtn.classList.add(ACTIVE);
      projectsBtn.classList.remove(DARK);
      contactBtn.classList.remove(ACTIVE);
      contactBtn.classList.add(DARK);
      break;
    case 'contact-btn':
      // articles
      aboutMeArticle.classList.add(HIDDEN);
      technicalSkillsArticle.classList.add(HIDDEN);
      softSkillsArticle.classList.add(HIDDEN);
      projectsArticle.classList.add(HIDDEN);
      contactArticle.classList.remove(HIDDEN);

      // btns
      aboutMeBtn.classList.remove(ACTIVE);
      aboutMeBtn.classList.add(DARK);
      technicalSkillsBtn.classList.remove(ACTIVE);
      technicalSkillsBtn.classList.add(DARK);
      softSkillsBtn.classList.remove(ACTIVE);
      softSkillsBtn.classList.add(DARK);
      projectsBtn.classList.remove(ACTIVE);
      projectsBtn.classList.add(DARK);
      contactBtn.classList.add(ACTIVE);
      contactBtn.classList.remove(DARK);
      break;
    default:
      // articles
      aboutMeArticle.classList.remove(HIDDEN);
      technicalSkillsArticle.classList.add(HIDDEN);
      softSkillsArticle.classList.add(HIDDEN);
      projectsArticle.classList.add(HIDDEN);
      contactArticle.classList.add(HIDDEN);

      // btns
      aboutMeBtn.classList.add(ACTIVE);
      aboutMeBtn.classList.remove(DARK);
      technicalSkillsBtn.classList.remove(ACTIVE);
      technicalSkillsBtn.classList.add(DARK);
      softSkillsBtn.classList.remove(ACTIVE);
      softSkillsBtn.classList.add(DARK);
      projectsBtn.classList.remove(ACTIVE);
      projectsBtn.classList.add(DARK);
      contactBtn.classList.remove(ACTIVE);
      contactBtn.classList.add(DARK);
  }
};

// export const handleStartBtn = () => {
//   // scroll.scrollToBottom();
//   window.scrollTo({
//     top: 900,
//     left: 0,
//     behavior: 'smooth',
//   });
// };

export const descholar = () => {};
