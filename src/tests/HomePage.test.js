import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../components/HomePage';
import { idText } from 'typescript';

describe('HomePage tests', ()=>{
    it('Will match the homepage snapshot', ()=>{
        const homePageSnap = renderer.create(<HomePage/>).toJSON();
        expect(homePageSnap).toMatchSnapshot();
    });
});
