import React from 'react'
import App from './app'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import categories from './categories.json'

jest.mock('./services/api', () => {
  return {
    api: {
      get: jest.fn(() => {
        return Promise.resolve({
          data: {
            articles: [
              {
                url: 'http://www.brooklynvegan.com/thom-yorke-announces-new-solo-dates-teasing-new-music/',
                title: 'description',
                author: 'description',
                content: 'description',
                urlToImage:
                  'http://www.brooklynvegan.com/files/2018/11/thomyorke-17.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
              },
            ],
          },
        })
      }),
    },
  }
})

describe('App', () => {
  it('renders the app on loading state', async () => {
    const { getAllByTestId, queryAllByTestId } = render(<App />)
    getAllByTestId('article-placeholder')
    const articles = await queryAllByTestId('article')
    expect(articles).toHaveLength(0)
  })

  it('renders all categories', async () => {
    const { getByTestId } = render(<App />)
    categories.forEach(category => {
      expect(getByTestId(category)).toBeVisible()
    })
  })

  it('renders all results by categories', async () => {
    const { getByText, getByTestId } = render(<App />)
    fireEvent.click(getByText('business'))
    const articleElement = await waitForElement(() => getByTestId('article'))
    expect(articleElement).toBeInTheDocument()
  })
})
