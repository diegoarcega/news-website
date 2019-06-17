import React from 'react'
import ArticlePlaceholder, { ImagePlaceHolder } from './article-placeholder'
import { render } from '@testing-library/react'

it('renders the ArticlePlaceholder', () => {
  const { asFragment } = render(<ArticlePlaceholder />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders the ImagePlaceHolder', () => {
  const { asFragment } = render(<ImagePlaceHolder />)
  expect(asFragment()).toMatchSnapshot()
})
