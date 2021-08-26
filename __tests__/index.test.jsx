import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/index';

describe('index page', () => {
  it('should render correctly', () => {
    const component = renderer.create(<Home />);
    expect(component).toMatchSnapshot
  })
})