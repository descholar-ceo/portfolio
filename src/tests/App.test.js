import { mount, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../entry/App';
import HomePage from '../components/HomePage';
import customMsg from '../utils/customMessages';

describe('App tests', () => {
  it('Will prove that the app is rendered from App component', () => {
    const appRender = shallow(<App />);
    expect(appRender.contains(<HomePage />));
  });

  it('Will show the home page', () => {
    const homePage = mount(<HomePage />);
    expect(homePage.text()).toEqual(customMsg.welcomeMessage);
  });

  it('Will match the snapshot', () => {
    const homePage = renderer.create(<HomePage />).toJSON();
    expect(homePage).toMatchSnapshot();
  });
});
