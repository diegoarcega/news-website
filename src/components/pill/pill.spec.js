import React from 'react'
import Pill from './pill'
import { render } from '@testing-library/react'

it('renders the pill', () => {
  const { asFragment } = render(<Pill>I'm a text</Pill>)
  expect(asFragment()).toMatchSnapshot()
})
