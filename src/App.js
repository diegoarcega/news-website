import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import styled from 'styled-components'
import { Pill } from './components/pill'
import { Article } from './components/article'
import { api } from './services/api'

function App() {
  const [articles, setArticles] = useState([])
  const [articlesByCategories, setArticlesByCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    const fetchTodayNews = async () => {
      const headlines = await api.get(`/top-headlines?country=us&category=${selectedCategory}`)
      console.log({ headlines })
      setArticles(headlines.data.articles)
    }

    fetchTodayNews()
  }, [selectedCategory])

  return (
    <Container>
      <LoadingWrapper></LoadingWrapper>
      <AppContainer>
        <Row>
          <Header>
            <span>Categories: </span>
            {categories.map(category => (
              <StyledPill
                isSelected={category === selectedCategory}
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </StyledPill>
            ))}
            <AllCategories onClick={() => setSelectedCategory('')}>all</AllCategories>
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
        <Row>
          <footer>developed by Diego</footer>
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

const AllCategories = styled.span`
  color: ${props => props.theme.secondary};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  pointer-events: none;
`

const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology']

export default App
