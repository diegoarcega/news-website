import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'
import { ImagePlaceHolder } from '../article-placeholder/article-placeholder'

export default function Article({ title, img, content, author, ...rest }) {
  const [hasImageLoaded, setHasImageLoaded] = useState(false)
  const handleImageLoaded = () => {
    setHasImageLoaded(true)
  }

  return (
    <Container {...rest}>
      <Image src={img} onLoad={handleImageLoaded} isLoaded={hasImageLoaded} data-testid="article-image" />
      {!hasImageLoaded && <ImagePlaceHolder data-testid="image-placeholder" />}
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Content>{content}</Content>
    </Container>
  )
}

Article.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
}

const Container = styled.article`
  padding: 10px 0 10px 0;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`

const Title = styled.h1`
  padding-top: 13px;
`

const Image = styled.img`
  display: ${props => (props.isLoaded ? 'block' : 'none')};
  max-width: 100%;
  max-height: 200px;
  height: 100%;
  border-radius: 4px;

  ${props => config(props).media['xs']`
    width: 100%;
  `}

  ${props => config(props).media['sm']`
    width: initial;
  `}
`
const Author = styled.small`
  padding-top: 10px;
`
const Content = styled.p`
  padding-top: 10px;
`
