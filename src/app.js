import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { useSpring, config } from 'react-spring'
import { Article } from './components/article'
import ArticlePlaceHolder from './components/article-placeholder/article-placeholder'
import { api } from './services/api'
import { AppContainer, Header, StyledPill, AllCategories, TopBar, OfflineMessage } from './app.styles'
import categories from './categories.json'

function App() {
  const [articles, setArticles] = useState(Array(20).fill({}))
  const [isFetching, setIsFetching] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')

  const topAnimation = useSpring({
    config: config.wobbly,
    from: { background: '#fff' },
    to: { background: !selectedCategory ? '#fff' : colors[selectedCategory] },
  })

  const offlineAnimation = useSpring({
    config: config.wobbly,
    from: { bottom: '-20px' },
    to: { bottom: '20px' },
  })

  useEffect(() => {
    const fetchTodayNews = async () => {
      setIsFetching(true)

      try {
        const headlines = await api.get(`/top-headlines?country=us&category=${selectedCategory}`)
        setArticles(headlines.data.articles)
        setIsFetching(false)
      } catch (error) {
        setIsFetching(false)
      }
    }

    fetchTodayNews()
  }, [selectedCategory])

  return (
    <div>
      <TopBar style={topAnimation} />
      {!navigator.onLine && (
        <OfflineMessage style={offlineAnimation}>
          You are offline, some sections may not be acessible while you aren't online
        </OfflineMessage>
      )}
      <Container>
        <AppContainer>
          <Row>
            <Col>
              <Header>
                <small>Categories: </small>
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
            </Col>
          </Row>
          <Row>
            {articles.map((article, index) => {
              return (
                <Col key={article.url || index} sm={4} md={2}>
                  {article.url && !isFetching ? (
                    <Article
                      img={article.urlToImage}
                      title={article.title}
                      author={article.author}
                      content={article.content}
                    />
                  ) : (
                    <ArticlePlaceHolder />
                  )}
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col>
              <footer>
                <small>Powered by newsapi.org</small>
              </footer>
            </Col>
          </Row>
        </AppContainer>
      </Container>
    </div>
  )
}

const colors = {
  [categories[0]]: '#173F5F',
  [categories[1]]: '#20639B',
  [categories[2]]: '#3CAEA3',
  [categories[3]]: '#F6D55C',
  [categories[4]]: '#ED553B',
  [categories[5]]: '#ebebeb',
}

export default App
