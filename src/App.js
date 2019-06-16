import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import styled from 'styled-components'
import { Pill } from './components/pill'
import { Article } from './components/article'
import { api } from './services/api'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchTodayNews = async () => {
      const headlines = await api.get('/top-headlines?country=us')
      console.log({ headlines })
      setArticles(headlines.data.articles)
    }

    fetchTodayNews()
  }, [])

  return (
    <Container>
      <AppContainer>
        <Row>
          <Header>
            {categories.map(category => (
              <StyledPill key={category}>{category}</StyledPill>
            ))}
          </Header>
        </Row>
        <Row>
          {articles.map(article => (
            <Col sm={4} md={2} key={article.url}>
              <Article
                img={article.urlToImage}
                title={article.title}
                author={article.author}
                content={article.content}
              />
            </Col>
          ))}
        </Row>
      </AppContainer>
    </Container>
  )
}

const AppContainer = styled.div`
  padding: 30px 0 30px 0;
`

const Header = styled.header`
  padding-bottom: 20px;
`

const StyledPill = styled(Pill)`
  margin-right: 5px;
`

const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology']

export default App
