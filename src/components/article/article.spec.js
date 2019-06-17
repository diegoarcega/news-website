import React from 'react'
import Article from './article'
import { render, fireEvent } from '@testing-library/react'

it('renders the Article with ImagePlaceHolder', () => {
  const { asFragment } = render(
    <Article
      title="Article"
      img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
      content="This article is informative"
      author="Diego Arcega"
    />
  )
  expect(asFragment()).toMatchSnapshot('with-loading')
})

it('renders the Article without ImagePlaceHolder', async () => {
  const { getByTestId, queryByTestId } = render(
    <Article
      title="Article"
      img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
      content="This article is informative"
      author="Diego Arcega"
    />
  )

  fireEvent.load(getByTestId('article-image'))
  const imagePlaceholder = queryByTestId('image-placeholder')
  expect(imagePlaceholder).toBeNull()
})
