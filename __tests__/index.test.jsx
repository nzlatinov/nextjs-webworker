import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '../pages/index';

describe('index page', () => {
  it('should render correctly', async () => {
    render(<Home />);
    const expected = await screen.findByTestId('home-container')
    expect(expected).toMatchSnapshot()
  })
})