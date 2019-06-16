import React, { useState } from 'react'
import styled from 'styled-components'
import { ImagePlaceHolder } from '../article-placeholder/article-placeholder'

export default function Article({ title, img, content, author }) {
  const [hasImageLoaded, setHasImageLoaded] = useState(false)
  const handleImageLoaded = () => {
    setHasImageLoaded(true)
  }

  return (
    <Container>
      <Image src={img} onLoad={handleImageLoaded} isLoaded={hasImageLoaded} />
      {!hasImageLoaded && <ImagePlaceHolder />}
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Content>{content}</Content>
    </Container>
  )
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
`
const Author = styled.small`
  padding-top: 10px;
`
const Content = styled.p`
  padding-top: 10px;
`
