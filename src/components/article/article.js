import React from 'react'
import styled from 'styled-components'

export default function Article({ title, img, content, author }) {
  return (
    <Container>
      <Image src={img} loading="lazy" />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Content>{content}</Content>
    </Container>
  )
}

const Container = styled.article`
  padding: 10px 0 10px 0;
`
const Title = styled.h1`
  padding-top: 13px;
`
const Image = styled.img`
  max-width: 100%;
  border-radius: 4px;
`
const Author = styled.p`
  padding-top: 10px;
`
const Content = styled.p`
  padding-top: 10px;
`
