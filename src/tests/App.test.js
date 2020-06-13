import { mount, shallow } from 'enzyme';
import React from 'react';
import App from '../entry/App';
import HelloComponent from '../components/HelloComponent';
import customMsg from '../utils/customMessages';
import renderer from 'react-test-renderer';

describe('App tests', () => {
  it('Will prove that the app is rendered from App component', () => {
    const appRender = shallow(<App />);
    expect(appRender.contains(<HelloComponent />));
  });

  it('Will show the home page', () => {
    const homePage = mount(<HelloComponent />);
    expect(homePage.text()).toEqual(customMsg.welcomeMessage);
  });

  it('Will match the snapshot', () => {
    const homePage = renderer.create(<HelloComponent />).toJSON();
    expect(homePage).toMatchSnapshot();
  });
});
